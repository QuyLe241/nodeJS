//            cách khởi toajduwj án express ở trang chủ expressJs

//          ở file package.json thêm "type": "module" để chạy file js và main: "..." chọn file để chạy

//       NodeJs dùng để chay code js ở phía server( môi trường để chayJS)

// console.log("Hello World");
//  Cần phải vào file package.json thêm "type": "modules" .
//      Cú pháp cũ
//       const common = requỉe()
//      modules.exports = {}
// import express from "express";

// //      gọi đến express để sử dụng các chức năng mà thư viện có
// const app = express();

// //  phương thức tạo api
// // truyền vào 2 tham số, 1 là url, 2 là 1 callback function
// //  res: kết quả trả về
// // req: request gửi đến
// // next: khi sử dụng middleware thì cần đến
// app.get("/", (req, res, next) => {
//   //  trả về kết quả
//   res.status(200).json("Hello World");
// });
// //  app chạy ở một cổng port và 1 callback function
// //
// app.listen(3000, () => {
//   console.log("server online tại port 3000");
// });

//              file test
