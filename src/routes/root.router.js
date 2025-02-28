// mô hình MVC
import express from "express";
import usersRoutes from "./users.router.js";

//  tạo object router tổng
const rootRoutes = express.Router();

rootRoutes.use("/users", usersRoutes);

//  export cho index sử dụng
export default rootRoutes;
