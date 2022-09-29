const loai = require("../models/database");
var db = require("../models/database");
var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
exports.getlist = (req, res, next) => {
  let sql = `SELECT * FROM sp`;
  db.query(sql, function (err, data) {
    res.render("loai_list", { list: data });
  });
};
exports.getLoaiCreate = (req, res, next) => {
  //res.send('Form thêm loại sách');
  res.render("loai_addnew");
};
exports.postStore = (req, res, next) => {
  let n = req.body.name;
  let c = req.body.content;
  let i = req.body.image;
  let t = req.body.VND;
  let u = req.body.up_date || utc;
  let hd = req.body.hidden;
  book1 = { name: n, content: c, image: i, VND: t, up_date: u, hidden: hd };
  db.query("insert into sp SET ?", book1, function (err, data) {
    if (err) throw err;
    res.redirect("/loai");
  });
};
exports.getEdit = (req, res, next) => {
  var id = req.params.id;
  let sql = `SELECT id, name, content, image, VND, up_date, hidden  FROM sp where id=${id}`;
  db.query(sql, function (err, data) {
    res.render("loai_edit", { sp: data[0] });
  });
};
exports.postUpdate = (req, res, next) => {
  //nhận dữ liệu từ edit để cập nhật vào db
  let n = req.body.name;
  let c = req.body.content;
  let i = req.body.image;
  let t = req.body.VND;
  let u = req.body.up_date || utc;
  let hd = req.body.hidden;
  let id = req.params.id;
  db.query(
    `UPDATE sp SET name=?,content=?,image=?,VND=?,up_date=?, hidden=? WHERE id = ?`,
    [n, c, i, t, u, hd, id],
    function (err, data) {
      if (data.affectedRows == 0) {
        console.log(`Không có id loại ${id} để cập nhật`);
      }
      res.redirect("/loai");
    }
  );
};

exports.getDelete = (req, res, next) => {
  let id = req.params.id;
  let sql = `DELETE FROM sp WHERE id = ?`;
  db.query(sql, [id], function (err, data) {
    if (data.affectedRows == 0) {
      console.log(`Không có loại ${id} để xóa`);
    }
    res.redirect("/loai");
  });
};
