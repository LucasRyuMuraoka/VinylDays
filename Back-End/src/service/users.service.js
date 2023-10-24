import { UsersDTO } from "../DTO/users.dto.js";
import { UsersRepository } from "../repository/users.repository.js";
import { UserNotFound } from "../error/specialization/UserNotFound.error.js";
import { Base64 } from "../util/base64.encrypt.js";
import { UsersValidations } from "../util/users.validation.js";
import { InvalidFields } from "../error/specialization/InvalidFields.error.js";
import { DateFormat } from "../util/dateFormat.format.js";
import { UserAlreadyExists } from "../error/specialization/UserAlreadyExists.error.js";

let decriptedUser = null;

const base64 = new Base64();
const usersDTO = new UsersDTO();
const dateFormat = new DateFormat();
const usersValidation = new UsersValidations();
const usersRepository = new UsersRepository();

export class UsersService {
    
    findAll() {
        return new Promise(async (resolve, reject) => {
            const usersList = await usersRepository.findAll();
            
            if(!usersList[0])
                reject(new UserNotFound("The method to fetch all users was invoked but the table album is empty!"));

            const usersDTOList = new Array();
            
            usersList.forEach((user) => {
                decriptedUser = {
                    id: user.id,
                    name: user.name,
                    email: base64.decode(user.email),
                    password: base64.decode(user.password),
                    createdAt: user.createdAt,
                    updateAt: user.updatedAt 
                };

                usersDTOList.push(usersDTO.toJson(usersDTO.format(decriptedUser)));
            });

            resolve(usersDTOList);
        });
    }

    findById(id) {
        return new Promise(async (resolve, reject) => {
            const user = await usersRepository.findById(id);
            
            if(!user) {
                reject(new UserNotFound("The method to search for a user was invoked but it was not found in the database!"));
            } else {
                decriptedUser = {
                    id: user.id,
                    name: user.name,
                    email: base64.decode(user.email),
                    password: base64.decode(user.password),
                    createdAt: user.createdAt,
                    updateAt: user.updatedAt 
                };

                resolve(usersDTO.toJson(usersDTO.format(decriptedUser)));
            }
        });
    }

    findByName(name) {
        return new Promise(async (resolve, reject) => {
            const usersList = await usersRepository.findByName(); 
            
            if(!usersList[0])
                reject(new UserNotFound("The method to search for a user by your name was invoked but it was not found in the database!"));
            
            const usersDTOList = new Array();
            
            usersList.forEach((user) => {
                if(String(user.name).toLowerCase().includes(String(name).toLowerCase())) {
                    decriptedUser = {
                        id: user.id,
                        name: user.name,
                        email: base64.decode(user.email),
                        password: base64.decode(user.password),
                        createdAt: user.createdAt,
                        updateAt: user.updatedAt 
                    };
    
                    usersDTOList.push(usersDTO.toJson(usersDTO.format(decriptedUser)));
                }
            });

            if(usersDTOList.length !== 0)
                resolve(usersDTOList);
            else
                reject(new UserNotFound("The method to search for a user by your name was invoked but it was not found in the database!"));
        });
    }

    create(user) { 
        return new Promise(async (resolve, reject) => {
            const userExist = await this.findAll().then((datas) => {
                let userExist = false;

                datas.forEach(data => {
                    if(user.email === data.email) {
                        userExist = true;
                    }
                });

                return userExist;
            }).catch((error) => {
                if(error instanceof UserNotFound)
                    reject(new UserNotFound(error.message));                
                else
                    console.log(error);
            });

            if(!userExist) {
                usersValidation.validation(user).then(async (userPromise) => {
                    const userReadyToSave = {
                        name: userPromise.name,
                        email: base64.encode(String(userPromise.email)),
                        password: base64.encode(String(userPromise.password))
                    }
    
                    await usersRepository.create(userReadyToSave);
                    resolve();
                }).catch((error) => {
                    if(error instanceof InvalidFields)
                        reject(new InvalidFields(error.message));                
                    else
                        console.log(error);
                });
            } else {
                reject(new UserAlreadyExists("There is already a user with this email registered in our system!"));
            }
        });
    }

    update(newUser, id) {
        return new Promise(async (resolve, reject) => {
            /* Verifica e-mail */
            let userExist = await this.findAll()
                .then((datas) => {
                    let userExist = false;

                    datas.forEach((data) => {
                        if(newUser.email === data.email && data.id !== id) {
                            userExist = true;
                        }
                    });

                    return userExist;
                })
                .catch((error) => {
                    if(error instanceof UserNotFound)
                        reject(new UserNotFound(error.message));                
                    else
                        console.log(error);
            });

            if (!userExist) {
                const oldUser = await this.findById(id)
                    .then((data) => {
                        return data
                    })
                    .catch((error) => {
                        if(error instanceof UserNotFound)
                            reject(new UserNotFound(error.message));
                        else
                            console.log(error);
                    }
                );

                usersValidation.validation(newUser).then(async (userPromise) => {
                    if(oldUser) {
                        const userReadyToUpdate = {
                            id: id,
                            name: userPromise.name,
                            email: base64.encode(String(userPromise.email)),
                            password: base64.encode(String(userPromise.password)),
                            createdAt: dateFormat.parseDatabaseFormat(oldUser.createdAt)
                        }

                        await usersRepository.update(userReadyToUpdate);
                        resolve();
                    }
                }).catch((error) => {
                    if(error instanceof InvalidFields)
                        reject(new InvalidFields(error.message));                
                    else
                        console.log(error);
                });
            } else {
                reject(new UserAlreadyExists("There is already a user with this email registered in our system!"));
            }
        });
    }

    delete(id) {
        return new Promise(async (resolve, reject) => {
            await this.findById(id).then(async () => {
                await usersRepository.delete(id);
                resolve();
            }).catch((error) => {
                if(error instanceof UserNotFound)
                    reject(new UserNotFound(error.message));                
                else
                    console.log(error);
            });
        });
    }

}
