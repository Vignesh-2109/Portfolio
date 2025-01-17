const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.verifyToken = async (req, res, next) => {
    // Getting token from cookies
    const { token } = req.cookies;
    try {
        // If no token found
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Please login to access this resource",
            });
        }
        // Verify token
        const user = jwt.verify(token, process.env.JWT_SECRET);

        // Adding user id to req object
        req.id = user.id;

        // To proceed further
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token or Token expired",
        });
    }
};
