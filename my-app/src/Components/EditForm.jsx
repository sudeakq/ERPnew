import React, { useState } from "react";
import "./EditForm.css";

function EditForm({ onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-popup">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Edit Announcement</h2>
        <div className="form-date-title">
          <label htmlFor="date">
            <b>Date</b>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="title">
            <b>Title</b>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-post">
          <label htmlFor="postedBy">
            <b>Posted By</b>
          </label>
          <input
            type="text"
            id="postedBy"
            name="postedBy"
            value={formData.postedBy || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-desc">
          <label htmlFor="description">
            <b>Description</b>
          </label>
          <textarea
            className="desc-input"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn">
            Submit
          </button>
          <button type="button" className="btn cancel" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
