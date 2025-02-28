import pool from "../../db.js";

//  xử lý logic ở đây để sử dụng cho route

const createUsser = (req, res) => {
  let params = req.params;
  let { id, hoTen } = params;
  let body = req.body;
  res.send({
    id,
    hoTen,
  });
};

const getUsers1to5 = async (req, res) => {
  try {
    const [data] = await pool.query("SELECT * FROM users limit 5");
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

//  delete user
//  delete like_video từ user

//  muốn xóa tự động
// ALTER TABLE like_video DROP FOREIGN KEY like_video_ibfk_1;

// ALTER TABLE like_video ADD CONSTRAINT like_video_ibfk_1
// FOREIGN KEY (user_id) REFERENCES users(user_id)
// ON DELETE CASCADE;

const deleteUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    // const [data] = await pool.query(
    //   `
    //   DELETE FROM users WHERE user_id = ${user_id}
    //   `
    // );
    const [data] = await pool.query(
      ` DELETE FROM like_video WHERE user_id = ${user_id}`
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export { createUsser, getUsers1to5, deleteUser };
