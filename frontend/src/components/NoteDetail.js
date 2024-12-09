import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate(); // Untuk redirect setelah menghapus note

  useEffect(() => {
    getNoteDetail();
  }, [id]);

  const getNoteDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/notes/${id}`);
      setNote(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      navigate("/"); // Redirect ke halaman utama setelah menghapus
    } catch (error) {
      console.log(error);
    }
  };

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Navbar dengan tombol Add New */}
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            NoteApp
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/add" className="button">
            Add New
          </Link>
        </div>
      </nav>

      {/* Konten utama dengan jarak dari navbar */}
      <div className="main-content" style={{ paddingTop: "70px" }}>
        {" "}
        {/* Menambahkan padding untuk memberikan jarak dari navbar */}
        <div className="container mt-5">
          <div className="card">
            <div className="card-content">
              <p className="title">{note.title}</p>
              <p className="subtitle">
                <span className="note_date"> {note.date} </span> |{" "}
                <span className="note_time"> {note.time} </span>
              </p>
              <div className="content">
                {note.note.split("\n").map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
              {/* Tombol Edit dan Delete */}
              <div className="buttons mt-3">
                <Link to={`/edit/${note.id}`} className="button is-info mr-2">
                  Edit
                </Link>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="button is-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
