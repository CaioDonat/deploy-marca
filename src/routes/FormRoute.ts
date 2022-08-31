import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateFormController } from "../modules/forms/create_forms/CreateFormController";
import { DeleteFormController } from "../modules/forms/delete_form/DeleteFormController";
import { ReadAllFormsController } from "../modules/forms/read_forms/AllForms/ReadAllFormsController";
import { ReadFormByIDController } from "../modules/forms/read_forms/ByID/GetFormByIDController";
import { UpdateFormController } from "../modules/forms/update_forms/UpdateFormController";

const formRoute = Router();

const createFormController = new CreateFormController();
const updateFormController = new UpdateFormController();
const deleteFormController = new DeleteFormController();
const readFormByIdController = new ReadFormByIDController();
const readAllFormsController = new ReadAllFormsController();

formRoute.post('/', ensureAuthenticateUser, createFormController.handle);
formRoute.put('/:id', ensureAuthenticateUser, updateFormController.handle);
formRoute.delete('/:id', ensureAuthenticateUser, deleteFormController.handle);
formRoute.get('/:id', readFormByIdController.handle);
formRoute.get('/', readAllFormsController.handle);

export {formRoute};