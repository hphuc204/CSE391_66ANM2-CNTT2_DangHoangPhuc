import { useState } from "react";

function LessonForm({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    Roomname: "",
    Roomcode: "",
    Computers: "",
    Manager: "",
    Email: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Room name
    if (!formData.Roomname.trim()) {
      newErrors.Roomname = "Room name is required";
    } else if (formData.Roomname.length > 50) {
      newErrors.Roomname = "Max 50 characters";
    }

    // Room code
    if (!formData.Roomcode.trim()) {
      newErrors.Roomcode = "Room code is required";
    } else if (!/^PM\d{3}$/.test(formData.Roomcode)) {
      newErrors.Roomcode = "Format: PM + EXACTLY 3 DIGITS";
    }

    // Computers
    const num = Number(formData.Computers);
    if (!formData.Computers) {
      newErrors.Computers = "Computers is required";
    } else if (!Number.isInteger(num) || num < 1 || num > 60) {
      newErrors.Computers = "Integer from 1 to 60 (e.g. 40)";
    }

    // Manager
    if (!formData.Manager.trim()) {
      newErrors.Manager = "Manager is required";
    }

    // Email
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newErrors.Email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSave({
      ...formData,
      id: Date.now(),
    });

    onClose();
    setFormData({
      Roomname: "",
      Roomcode: "",
      Computers: "",
      Manager: "",
      Email: "",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>Add computer lab</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Room name</label>
              <input
                name="Roomname"
                value={formData.Roomname}
                onChange={handleChange}
                placeholder="e.g. Web Programming Practice Lab"
              />
              {errors.Roomname && (
                <p className="error-text">{errors.Roomname}</p>
              )}
            </div>

            <div className="form-group">
              <label>Room code</label>
              <input
                name="Roomcode"
                value={formData.Roomcode}
                onChange={handleChange}
                placeholder="PM201 (PM + EXACTLY 3 DIGITS)"
              />
              {errors.Roomcode && (
                <p className="error-text">{errors.Roomcode}</p>
              )}
            </div>

            <div className="form-group">
              <label>Computers</label>
              <input
                name="Computers"
                value={formData.Computers}
                onChange={handleChange}
                placeholder="Integer from 1 to 60 (e.g.40)"
              />
              {errors.Computers && (
                <p className="error-text">{errors.Computers}</p>
              )}
            </div>

            <div className="form-group">
              <label>Manager</label>
              <input
                name="Manager"
                value={formData.Manager}
                onChange={handleChange}
                placeholder="Manager full name"
              />
              {errors.Manager && (
                <p className="error-text">{errors.Manager}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="name@domain.com(valid email format)"
            />
            {errors.Email && (
              <p className="error-text">{errors.Email}</p>
            )}
          </div>

          <div className="modal-actions">
            <button type="submit" className="save-btn">
              Save
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LessonForm;