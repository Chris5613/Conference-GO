import './App.css';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeForm from './AttendeeForm';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
        <Nav />
        <AttendeesList attendees={props.attendees} />
        <div className="container">
          <Routes>
            <Route path="location">
              < Route path="new" element={<LocationForm />} />
            </Route>
            <Route path="attendees">
              <Route path="new" element={<AttendeeForm />} />
            </Route>
            <Route path="conference">
              <Route path="new" element={<ConferenceForm />} />
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
      }

export default App;
