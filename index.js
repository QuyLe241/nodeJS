//   cài đặt thư viện nodemon: npm i nodemon
//   nodemon giúp tự động khởi động lại server khi có thay đổi code
//  cấu hình tại package.json: "start": "nodemon index.js"

//    js chạy code từ trên xuống dưới. cần khời tạo project từ trên xuống dưới

//  import thư viện
import express from "express";

//import db. đuôi file .js
import pool from "./db.js";
import usersRoutes from "./src/routes/users.router.js";
import rootRoutes from "./src/routes/root.router.js";

// khởi tọa project
const app = express();
//  thêm middleware để đọc data json từ request gửi đến
app.use(express.json());

//  define port
//  có thể tùy chọn port
//  gồm port và callback function( thường sử dụng khi server chạy).
app.listen(8080, () => {
  console.log("server online at port 8080");
});

// sử dụng router
// sử dụng cho mô hình MVC để dễ bảo trì và sửa chửa hơn
app.use(rootRoutes);

//  tạo api cơ bản chưa theo mô hình mvc
//  tạo api đơn giản
app.get("/", (req, res, next) => {
  res.send("get thành công...");
});
app.get("/test", (req, res, next) => {
  res.send("test thành công.");
});

// app.post("/users", (req, res, next) => {
//   //  lấy dữ liệu từ body , của request
//   let body = req.body;
//   //   gửi về response cho client
//   res.send(body);
// });

// tạo api lấy dữ liệu từ database
// app.get("/users", (req, res, next) => {});
