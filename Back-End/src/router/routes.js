import { Router, json } from "express";
import { UsersController } from "../controller/users.controller.js";

const router = Router();
const usersController = new UsersController(); 

router.use(json());

router.get("/users/", (request, response) => usersController.findAll(request, response));
router.get("/users/:id", (request, response) => usersController.findById(request, response));
router.get("/users/name-like/:name", (request, response) => usersController.findByName(request, response));

router.delete("/users/:id", (request, response) => usersController.delete(request, response));

export { router };