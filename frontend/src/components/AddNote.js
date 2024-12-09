import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddNote = () => {
  const [title, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const saveNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/notes", {
        title,
        date,
        time,
        note,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
          <Link to="/" className="button">
            Add New
          </Link>
        </div>
      </nav>

      {/* Konten utama dengan jarak dari navbar */}
      <div className="main-content">
        <div className="columns mt-5 is-centered">
          <div className="column is-half">
            <form onSubmit={saveNote}>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Time</label>
                <div className="control">
                  <input
                    type="time"
                    className="input"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Time"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Note</label>
                <div className="control">
                  <textarea
                    type="textarea"
                    className="textarea"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Note"
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button details">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
