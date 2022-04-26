// import logo from './logo.svg';
// import ResumeInputForm from './assets/ResumeInputForm';
import './App.css';
import LoginLayout from './assets/Login';
import ResumeInputForm from './assets/ResumeInputForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div class='App-header'>
        <Routes>
          <Route exact path="/" element={<LoginLayout />}/>
          <Route exact path="/Resume" element={<ResumeInputForm />}/>
          {/* <Route path="*" element={<LoginLayout />}/> */}
        </Routes>
      </div>
  );
}

export default App;
