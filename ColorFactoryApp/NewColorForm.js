import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [form, setForm] = useState({ name: "", value: "#000000" });
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addColor(form);
    history.push("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name:</label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="value">Color Value:</label>
      <input
        type="color"
        id="value"
        name="value"
        value={form.value}
        onChange={handleChange}
      />
      <button>Add Color</button>
    </form>
  );
}

export default NewColorForm;
