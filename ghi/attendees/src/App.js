import Nav from './Nav'

function App({attendees}) {
  return (

    <>
    <Nav />

    <div className="container">
      <table className="table-striped table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
        {attendees.map(attendee => {
        return (
          <tr  key={attendee.href}>
            <td>{ attendee.name }</td>
            <td>{ attendee.conference }</td>
          </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
