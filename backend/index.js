const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_siswa",
});

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.log("Gagal konek ke database:", err);
  } else {
    console.log("Database terkoneksi!");
  }
});

// Promise wrapper for convenient async/await usage
const dbPromise = db.promise();

// GET semua siswa
app.get("/siswa", (req, res) => {
  db.query("SELECT * FROM siswa", (err, result) => {
    if (err) return res.json({ error: err });
    res.json(result);
  });
});

// POST tambah siswa
app.post("/siswa", (req, res) => {
  const { nama, kelas, alamat } = req.body;
  db.query(
    "INSERT INTO siswa (nama, kelas, alamat) VALUES (?, ?, ?)",
    [nama, kelas, alamat],
    (err, result) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Siswa berhasil ditambahkan" });
    }
  );
});

// PUT update siswa
app.put("/siswa/:id", (req, res) => {
  const { nama, kelas, alamat } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE siswa SET nama=?, kelas=?, alamat=? WHERE id=?",
    [nama, kelas, alamat, id],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Siswa berhasil diupdate" });
    }
  );
});
// DELETE hapus siswa
app.delete("/siswa/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await dbPromise.execute("DELETE FROM siswa WHERE id = ?", [id]);
    // result.affectedRows indicates how many rows were deleted
    if (result && result.affectedRows === 0) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }
    console.log(`Deleted siswa id=${id}, affectedRows=${result.affectedRows}`);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Error deleting siswa:", err);
    res.status(500).json({ error: "Failed to delete" });
  }
});

// ⬇⬇⬇ BAGIAN YANG KAMU LUPA ⬇⬇⬇
app.listen(5000, () => {
  console.log("Server berjalan di http://localhost:5000");
});
