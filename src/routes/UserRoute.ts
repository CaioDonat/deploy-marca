import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateUserController } from "../modules/users/create_user/CreateUserController";
import { DeleteUserByIDController } from "../modules/users/delete_user/DeleteUserByIDController";
import { ReadUsersByIdController } from "../modules/users/read_user/ByID/ReadUsersByIDController";
import { ReadAllUsers } from "../modules/users/read_user/ReadAllUsers";
import { ReadAllUsersController } from "../modules/users/read_user/ReadAllUsersController";
import { UpdateUserController } from "../modules/users/update_user/UpdateUserController";
import { AuthenticateUserController } from "../services/AuthenticateUserController";


const userRoute = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const deleteUserByIDController = new DeleteUserByIDController();
const updateUserByID = new UpdateUserController();
const readlAllUsers = new ReadAllUsersController();
const readUserById = new ReadUsersByIdController();

userRoute.get('/', ensureAuthenticateUser, readlAllUsers.handle);
userRoute.get('/:id', ensureAuthenticateUser, readUserById.handle);
userRoute.post('/', createUserController.handle);
userRoute.post('/authenticate', authenticateUserController.handle);
userRoute.put('/:id', ensureAuthenticateUser, updateUserByID.handle);
userRoute.delete('/:id', ensureAuthenticateUser, deleteUserByIDController.handle);

export {userRoute};