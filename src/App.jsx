import { useEffect, useState } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";

const App = () => {
  const [records, setRecords] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (data) => {
    setRecords([...records, { ...data, id: Date.now() }]);
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  const startEdit = (id) => {
    setEditData(records.find((r) => r.id === id));
  };

  const updateRecord = (updated) => {
    setRecords(records.map((r) => (r.id === updated.id ? updated : r)));
    setEditData(null);
  };

  const clearAllRecords = () => {
    setRecords([]);
  };

  return (
    <div className="container">
      <h1>LocalBox Miner</h1>

      <div className="summary">
        <p>Total Records: {records.length}</p>
        <p>
          Last Added:{" "}
          {records.length ? records[records.length - 1].name : "None"}
        </p>
      </div>

      <RecordForm
        addRecord={addRecord}
        updateRecord={updateRecord}
        editData={editData}
      />

      <RecordList
        records={records}
        deleteRecord={deleteRecord}
        startEdit={startEdit}
        clearAllRecords={clearAllRecords}
      />
    </div>
  );
};

export default App;
