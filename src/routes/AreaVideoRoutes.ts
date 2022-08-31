import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateAreaVideoController } from "../modules/areas/area_video/create-area-video/CreateAreaVideoController";
import { DeleteAreaVideoByIDController } from "../modules/areas/area_video/delete-area-video/DeleteAreaVideoController";
import { DeleteAreaOnlyVideo } from "../modules/areas/area_video/delete-area-video/DeleteOnlyVideo";
import { DeleteAreaVideoOnlyController } from "../modules/areas/area_video/delete-area-video/DeleteOnlyVideoController";
import { ReadAreaVideoController } from "../modules/areas/area_video/read-area-video/ReadAreaVideoController";
import { UpdateAreaVideoController } from "../modules/areas/area_video/update-area-video/UpdateAreaVideoController";

const areaVideoRoutes = Router();

const createAreaVideoController = new CreateAreaVideoController();
const readAreaVideoById = new ReadAreaVideoController();
const deleteAreaVideoByID = new DeleteAreaVideoByIDController();
const updateAreaVideo = new UpdateAreaVideoController();
const deleteOnlyVideo = new DeleteAreaVideoOnlyController()

areaVideoRoutes.get('/:id', readAreaVideoById.handle);
areaVideoRoutes.post('/', ensureAuthenticateUser, createAreaVideoController.handle);
areaVideoRoutes.put('/:id', ensureAuthenticateUser, updateAreaVideo.handle);
areaVideoRoutes.delete('/:id/:id2', ensureAuthenticateUser, deleteAreaVideoByID.handle);
areaVideoRoutes.delete('/:id', ensureAuthenticateUser, deleteOnlyVideo.handle);

export { areaVideoRoutes };