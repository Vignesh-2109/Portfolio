const jwt = require("jsonwebtoken");

exports.refreshToken = async (req, res, next) => {
    try {
        const cookies = req.headers.cookie;
        const prevToken = cookies.split("=")[1];

        // Check if token is not present
        if (!prevToken) {
            return res.status(401).json({
                success: false,
                message: "Please login first",
            });
        }

        // Verify token
        jwt.verify(prevToken, process.env.JWT_SECRET, (error, user) => {
            if (error) {
                return res.status(403).json({
                    success: false,
                    message: "Token is not valid",
                });
            }
            // Clear previous token
            res.clearCookie("token");

            // Creating the new token
            const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: "30000000s",
            });

            // Setting the new token in cookie
            res.cookie("token", newToken, {
                path: "/",
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 30000000),
                sameSite: "lax",
            });
            req.id = user.id;
            next();
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
