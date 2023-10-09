import { UsersDTO } from "../DTO/users.dto.js";
import { UsersRepository } from "../repository/users.repository.js";
import { UserNotFound } from "../error/specialization/UserNotFound.error.js";
import { Base64 } from "../util/base64.encrypt.js";

let decriptedUser = null;

const base64 = new Base64();
const usersDTO = new UsersDTO();
const usersRepository = new UsersRepository();

export class UsersService {
    
    findAll() {
        return new Promise(async (resolve, reject) => {
            const usersList = await usersRepository.findAll();
            
            if(!usersList[0])
                reject(new UserNotFound("The method to fetch all users was invoked but the database is empty!"));

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

    delete(id) {
        return new Promise(async (resolve, reject) => {
            await this.findById(id).then(async () => {
                await usersRepository.delete(id);
                resolve();
            }).catch((error) => {
                if(error instanceof UserNotFound)
                    reject(new UserNotFound(error.message));                
            });
        });
    }

}