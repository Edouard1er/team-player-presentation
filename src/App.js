import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PlayerListPage from './pages/PlayerListPage';
import PlayerDetailPage from './pages/PlayerDetailPage'; // Importez la nouvelle page
import NavBarComponent from './components/NavBarComponent';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavBarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<PlayerListPage />} />
          <Route path="/teams" element={<PlayerListPage />} />
          <Route path="/history" element={<PlayerListPage />} />
          <Route path="/player/:id" element={<PlayerDetailPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
