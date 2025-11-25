const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi database untuk siswa dan guru (sekarang hanya db_siswa)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_siswa", // Sekarang hanya satu database
});

// Cek koneksi database
db.connect((err) => {
  if (err) {
    console.log("Gagal konek ke database:", err);
  } else {
    console.log("Database terkoneksi!");
  }
});

// Promise wrapper for convenient async/await usage
const dbPromise = db.promise();

// ==========================================
// Routes untuk Siswa
// ==========================================

// GET semua siswa
app.get("/siswa", (req, res) => {
  db.query("SELECT * FROM siswa", (err, result) => {
    if (err) return res.json({ error: err });
    res.json(result);
  });
});

// POST tambah siswa
app.post("/siswa", (req, res) => {
  const { nama, kelas, jurusan, alamat } = req.body;

  db.query(
    "INSERT INTO siswa (nama, kelas, jurusan, alamat) VALUES (?, ?, ?, ?)",
    [nama, kelas, jurusan, alamat],
    (err, result) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Siswa berhasil ditambahkan" });
    }
  );
});

// PUT update siswa
app.put("/siswa/:id", (req, res) => {
  const { nama, kelas, jurusan, alamat } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE siswa SET nama=?, kelas=?, jurusan=?, alamat=? WHERE id=?",
    [nama, kelas, jurusan, alamat, id],
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
    const [result] = await dbPromise.execute(
      "DELETE FROM siswa WHERE id = ?",
      [id]
    );
    if (result && result.affectedRows === 0) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }
    res.status(200).json({ message: "Siswa berhasil dihapus" });
  } catch (err) {
    console.error("Error deleting siswa:", err);
    res.status(500).json({ error: "Failed to delete" });
  }
});

// ==========================================
// Routes untuk Guru
// ==========================================

// GET semua guru
app.get("/teachers", (req, res) => {
  db.query("SELECT * FROM teachers", (err, result) => {
    if (err) return res.json({ error: err });
    res.json(result);
  });
});

// POST tambah guru
app.post("/teachers", (req, res) => {
  const { name, subject, address, phone } = req.body;
  db.query(
    "INSERT INTO teachers (name, subject, address, phone) VALUES (?, ?, ?, ?)",
    [name, subject, address, phone],
    (err, result) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Guru berhasil ditambahkan" });
    }
  );
});

// PUT update guru
app.put("/teachers/:id", (req, res) => {
  const { name, subject, address, phone } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE teachers SET name=?, subject=?, address=?, phone=? WHERE id=?",
    [name, subject, address, phone, id],
    (err) => {
      if (err) return res.json({ error: err });
      res.json({ message: "Guru berhasil diupdate" });
    }
  );
});

// DELETE hapus guru
app.delete("/teachers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await dbPromise.execute(
      "DELETE FROM teachers WHERE id = ?",
      [id]
    );
    if (result && result.affectedRows === 0) {
      return res.status(404).json({ message: "Guru tidak ditemukan" });
    }
    res.status(200).json({ message: "Guru berhasil dihapus" });
  } catch (err) {
    console.error("Error deleting guru:", err);
    res.status(500).json({ error: "Failed to delete" });
  }
});

// Server berjalan
app.listen(5000, () => {
  console.log("Server berjalan di http://localhost:5000");
});
