import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DbGuru() {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    subject: "",
    address: "",
    phone: "",
  });
  const [editId, setEditId] = useState(null);

  // Load data guru
  const loadData = async () => {
    const res = await axios.get("http://localhost:5000/teachers");
    setTeachers(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Tambah atau Update guru
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/teachers/${editId}`, form);
    } else {
      await axios.post("http://localhost:5000/teachers", form);
    }

    setForm({ name: "", subject: "", address: "", phone: "" });
    setEditId(null);
    loadData();
  };

  // Edit guru
  const handleEdit = (item) => {
    setEditId(item.id);
    setForm({
      name: item.name,
      subject: item.subject,
      address: item.address,
      phone: item.phone,
    });
  };

  //Delete Guru
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/teachers/${id}`);
      loadData();
    } catch (error) {
      console.error("Tidak bisa menghapus guru:", error);
      alert("Tidak bisa menghapus data guru, mohon coba lagi");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "");

    setForm({ ...form, phone: numericValue });
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-r from-teal-400 to-green-600 p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Database Guru</h1>
          <button>
            <Link to="/">Kembali Ke Mainpage</Link>
          </button>

          {/* Form Input */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama Guru"
              className="w-full p-3 border rounded-xl"
              required
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Mata Pelajaran"
              className="w-full p-3 border rounded-xl"
              required
            />

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Alamat"
              className="w-full p-3 border rounded-xl"
              required
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handlePhoneChange}
              placeholder="Nomor Telepon"
              className="w-full p-3 border rounded-xl"
              required
            />

            <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
              {editId ? "Update Guru" : "Tambah Guru"}
            </button>
          </form>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4">Nama</th>
                <th className="p-4">Mata Pelajaran</th>
                <th className="p-4">Alamat</th>
                <th className="p-4">Nomor Telepon</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody className="space-y-4">
              {teachers.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white shadow-md rounded-xl hover:shadow-lg transition"
                >
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.subject}</td>
                  <td className="p-4">{item.address}</td>
                  <td className="p-4">{item.phone}</td>
                  <td className="p-4 flex gap-4 justify-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-3 py-1 bg-purple-600 hover:bg-purple-700 shadow text-white rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 shadow text-white rounded-lg"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="text-center mt-10 p-5 text-white bg-gray-900 shadow-inner">
        <p className="tracking-wide">
          Database Kesiswaan SMK Medikacom — All Rights Reserved ©2025
        </p>
      </footer>
    </>
  );
}
