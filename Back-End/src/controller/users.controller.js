import { AppErrors } from "../error/AppErrors.error.js";
import { UsersService } from "../service/users.service.js";

const usersService = new UsersService();

export class UsersController {

    findAll(request, response) {
        usersService.findAll().then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            if(error instanceof AppErrors)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
            else
                console.log(error);
        });
    }

    findById(request, response) {
        usersService.findById(request.params.id).then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            if(error instanceof AppErrors)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
            else
                console.log(error);
        });
    }

    findByName(request, response) {
        usersService.findByName(request.params.name).then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            if(error instanceof AppErrors)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
            else
                console.log(error);
        });
    }

    create(request, response) {
        const reqBody = request.body;
        
        usersService.create(reqBody).then(() => {
            response.status(201).json();
        }).catch((error) => {
            if(error instanceof AppErrors)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
            else
                console.log(error);
        });
    }

    update(request, response) {
        const id = request.params.id;
        const reqBody = request.body;

        usersService.update(reqBody, id).then(() => {
            response.status(204).json();
        }).catch((error) => {
            if(error instanceof AppErrors)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
            else
                console.log(error);
        });
    }

    delete(request, response) {
        usersService.delete(request.params.id).then(() => {
            response.status(204).json();
        }).catch((error) => {
            if(error instanceof AppErrors)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
            else
                console.log(error);
        });
    }

};