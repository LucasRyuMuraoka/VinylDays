import { UserNotFound } from "../error/specialization/UserNotFound.error.js";
import { UsersService } from "../service/users.service.js";

const usersService = new UsersService();

export class UsersController {

    findAll(request, response) {
        usersService.findAll().then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            if(error instanceof UserNotFound)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
        });
    }

    findById(request, response) {
        usersService.findById(request.params.id).then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            if(error instanceof UserNotFound)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
        });
    }

    findByName(request, response) {
        usersService.findByName(request.params.name).then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            if(error instanceof UserNotFound)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
        });
    }

    delete(request, response) {
        usersService.delete(request.params.id).then(() => {
            response.status(204).json();
        }).catch((error) => {
            if(error instanceof UserNotFound)
                response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
        });
    }

};