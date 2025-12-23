import RecordRow from "./RecordRow";

const RecordList = ({ records, deleteRecord, startEdit, clearAllRecords }) => {
  if (!records.length) return <p>No Records Found</p>;

  return (
    <>
      <table>
        <tbody>
          {records.map((record) => (
            <RecordRow
              key={record.id}
              record={record}
              deleteRecord={deleteRecord}
              startEdit={startEdit}
            />
          ))}
        </tbody>
      </table>
      <button onClick={clearAllRecords}>Clear All Records</button>
    </>
  );
};

export default RecordList;
