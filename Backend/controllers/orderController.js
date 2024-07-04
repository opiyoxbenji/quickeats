import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createPayment = async (req, res) => {
    try {
        const { amount } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "Rand"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Payment intent creation failed" });
    }

}

export { createPayment };