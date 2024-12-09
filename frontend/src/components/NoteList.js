import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get("http://localhost:5000/notes");
    setNotes(response.data);
  };

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
          <Link to="add" className="button">
            Add New
          </Link>
        </div>
      </nav>

      {/* Konten utama dengan jarak dari navbar */}
      <div className="main-content">
        <div className="columns mt-5 is-multiline is-centered">
          {notes.map((note) => (
            <div
              className="column is-12-mobile is-6-tablet is-4-desktop"
              key={note.id}
              style={{ marginBottom: "20px" }}
            >
              <div className="card">
                <div className="card-content">
                  <p className="title is-5">
                    {note.title.length > 30
                      ? `${note.title.substring(0, 30)}...`
                      : note.title}
                  </p>
                  <p className="subtitle is-6">
                  <span className="note_date"> {note.date} </span> | <span className="note_time"> {note.time} </span>
                  </p>
                  <div className="content">
  {note.note.length > 100
    ? note.note.substring(0, 100).split('\n').map((line, index) => (
        <div key={index}>{line}</div>
      ))
    : note.note.split('\n').map((line, index) => (
        <div key={index}>{line}</div>
      ))}
</div>
                  <Link
                    to={`/note/${note.id}`}
                    className="button details"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteList;
