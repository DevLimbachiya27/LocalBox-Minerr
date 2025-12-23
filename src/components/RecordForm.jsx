import { useEffect, useState } from "react";

const RecordForm = ({ addRecord, updateRecord, editData }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setValue(editData.value);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !value) {
      setError("All fields required");
      return;
    }

    editData
      ? updateRecord({ ...editData, name, value })
      : addRecord({ name, value });

    setName("");
    setValue("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editData ? "Edit Record" : "Add Record"}</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      <button type="submit">{editData ? "Update Record" : "Add Record"}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default RecordForm;
