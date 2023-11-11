import { User } from "../model/User.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies

        if (!token) {
            return res.status(400).json({ success: false, message: "Please login to access" })
        }

        const userId = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(userId._id)

        next()

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    } 
}