//  cấu hình các api liên quan đến users
import express from "express";
import pool from "../../db.js";
import {
  createUsser,
  deleteUser,
  getUsers1to5,
} from "../controllers/user.controller.js";

const usersRoutes = express.Router();

//  gọi đến controller để xử lý

//  tạo api xử lý dữ liệu ở đây
//  đem đến sử dụng ở route tổng root.touter.js
//  [data] là mảng chứa dữ liệu theo quy ước của mysqll2
usersRoutes.get("/", async (req, res, next) => {
  try {
    const [data] = await pool.query("SELECT * FROM users");
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

usersRoutes.post("/:id/:hoTen", createUsser);

usersRoutes.get("/get-users-1to5", getUsers1to5);

usersRoutes.delete("/delete-user/:user_id", deleteUser);

export default usersRoutes;
