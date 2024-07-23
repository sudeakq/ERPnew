import React, { useState } from "react";

function EditForm({ onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="form-popup">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Edit Announcement</h2>
        <label htmlFor="date"><b>Date</b></label>
        <input 
          type="text" 
          id="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="title"><b>Title</b></label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="postedBy"><b>Posted By</b></label>
        <input 
          type="text" 
          id="postedBy" 
          name="postedBy" 
          value={formData.postedBy} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="description"><b>Description</b></label>
        <textarea 
          id="description" 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />

        <button type="submit" className="btn">Submit</button>
        <button type="button" className="btn cancel" onClick={onClose}>Close</button>
      </form>
    </div>
  );
}

export default EditForm;
