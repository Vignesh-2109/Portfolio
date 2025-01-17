const express =require("express");
const app=express();
const port = 5000;
const cors =require("cors");
const { connectDB } = require("./connection");
const routes =require("./routes/routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//connection to DB

connectDB();

//middlewares
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api",routes);



app.listen(port,() => console.log(`Server is runnng on port ${port}`));