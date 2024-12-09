import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getNoteById();
  }, []);

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/notes/${id}`, {
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

  const getNoteById = async () => {
    const response = await axios.get(`http://localhost:5000/notes/${id}`);
    setTitle(response.data.title);
    setDate(response.data.date);
    setTime(response.data.time);
    setNote(response.data.note);
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
          <Link to="/add" className="button">
            Add New
          </Link>
        </div>
      </nav>

      {/* Konten utama dengan jarak dari navbar */}
      <div className="main-content" style={{ paddingTop: "70px" }}>
        {" "}
        {/* Menambahkan padding untuk memberikan jarak dari navbar */}
        <div className="columns mt-5 is-centered">
          <div className="column is-half">
            <form onSubmit={updateNote}>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    type="text"
                    className="textarea"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Note"
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button details">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
