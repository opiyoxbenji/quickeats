import express from 'express';
import { createPayment } from '../controllers/orderController.js';

const paymentRouter = express.Router();

paymentRouter.post('/create-payment-intent', createPayment);

export default paymentRouter;