import express from 'express';
import { userLogin, userRegistration, getAllUsers, getUserById } from '../controllers/userController.js';

const routeUsers = express.Router();
routeUsers.post('/register', userRegistration);
routeUsers.post('/login', userLogin);
routeUsers.get('/users', getAllUsers);
routeUsers.get('/users/:id', getUserById);

export default routeUsers;
 