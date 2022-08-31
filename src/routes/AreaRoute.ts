import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateAreaVideoController } from "../modules/areas/area_video/create-area-video/CreateAreaVideoController";
import { DeleteAreaVideoByIDController } from "../modules/areas/area_video/delete-area-video/DeleteAreaVideoController";
import { ReadAreaVideoController } from "../modules/areas/area_video/read-area-video/ReadAreaVideoController";
import { UpdateAreaVideoController } from "../modules/areas/area_video/update-area-video/UpdateAreaVideoController";
import { CreateAreaController } from "../modules/areas/create-area/CreateAreaController";
import { DeleteAreaByIDController } from "../modules/areas/delete-area/ByID/DeleteAreaByIDController";
import { ReadAreaController } from "../modules/areas/read-area/ByID/ReadAreaController";
import { ReadAllAreasController } from "../modules/areas/read-area/ReadAllAreasController";
import { UpdateAreaController } from "../modules/areas/update-area/UpdateAreaController";

const areaRoutes = Router();

const deleteAreaByIDController = new DeleteAreaByIDController();
const createAreaController = new CreateAreaController(); 
const updateAreaController = new UpdateAreaController();
const readAreaController = new ReadAreaController();
const readAllAreasController = new ReadAllAreasController();

areaRoutes.get('/', readAllAreasController.handle);
areaRoutes.get('/:id', readAreaController.handle);
areaRoutes.post('/', ensureAuthenticateUser, createAreaController.handle);
areaRoutes.put('/:id', ensureAuthenticateUser, updateAreaController.handle);
areaRoutes.delete('/:id', ensureAuthenticateUser, deleteAreaByIDController.handle);

export {areaRoutes};