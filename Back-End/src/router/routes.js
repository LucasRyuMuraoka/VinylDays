import { Router, json } from "express";
import { UsersController } from "../controller/users.controller.js";
import { AlbumsController } from "../controller/albums.controller.js";

const router = Router();
const usersController = new UsersController();
const albumsController = new AlbumsController();

router.use(json());

router.get("/users/", (request, response) => usersController.findAll(request, response));
router.get("/users/:id", (request, response) => usersController.findById(request, response));
router.get("/users/name-like/:name", (request, response) => usersController.findByName(request, response));
router.post("/users", (request, response) => usersController.create(request, response));
router.put("/users/:id", (request, response) => usersController.update(request, response));
router.delete("/users/:id", (request, response) => usersController.delete(request, response));

router.get("/albums/", (request, response) => albumsController.findAll(request, response));
router.get("/albums/:id", (request, response) => albumsController.findById(request, response));
router.get("/albums/name-like/:name", (request, response) => albumsController.findByName(request, response));
router.get("/albums/artist/:artist", (request, response) => albumsController.findByArtist(request, response));
router.get("/albums/category/:category", (request, response) => albumsController.findByCategory(request, response));
router.post("/albums", (request, response) => albumsController.create(request, response));
router.put("/albums/:id", (request, response) => albumsController.update(request, response));
router.delete("/albums/:id", (request, response) => albumsController.delete(request, response));

export { router };
