import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
// import MovieList from "./pages/movie";
// import CreateMovie from "./pages/create";
import ProtectedRoute from "./utils/protectedRoutes";
//import './App.css';
 


function App() {
  return (
    <div>
  <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />
            {/* <Route path="/home" element={<ProtectedRoute><MovieList /></ProtectedRoute>} /> */}
            {/* <Route path="/home" element={<MovieList />} />
            <Route path="/create" element={<CreateMovie />} />
            <Route path="/edit/:id" element={<CreateMovie />} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;