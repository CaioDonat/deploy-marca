import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateAreaVideoController } from "../Modules/Areas/area_video/CreateAreaVideo/CreateAreaVideoController";
import { DeleteAreaVideoByIDController } from "../Modules/Areas/area_video/DeleteAreaVideo/DeleteAreaVideoController";
import { DeleteAreaOnlyVideo } from "../Modules/Areas/area_video/DeleteAreaVideo/DeleteOnlyVideo";
import { DeleteAreaVideoOnlyController } from "../Modules/Areas/area_video/DeleteAreaVideo/DeleteOnlyVideoController";
import { ReadAreaVideoController } from "../Modules/Areas/area_video/ReadAreaVideo/ReadAreaVideoController";
import { UpdateAreaVideoController } from "../Modules/Areas/area_video/UpdateAreaVideo/UpdateAreaVideoController";

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