import React, { lazy, Suspense } from 'react';
import Modal from '../src/utils/Modal/Modal';
import TechFrame from './utils/TechFrame/TechFrame';
import { modalActions } from './store';
import { useSelector } from 'react-redux';
import AppliFrame from './utils/AppliFrame/AppliFrame';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const TechPage = lazy(() => import('./components/TechPage'));
const ApplicationPage = lazy(() => import('./components/ApplicationPage'));
const Main = lazy(() => import('./components/Main'));

function App() {

  const isTechModalOpen = useSelector((state) => state.modal.techState);
  const isApplicationModalOpen = useSelector((state) => state.modal.applicationState);

  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ color: "brown", fontSize: "1.5rem" }}>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/technology' element={<TechPage />} />
          <Route path='/application' element={<ApplicationPage />} />
        </Routes>
        <Modal isOpen={isTechModalOpen} closeModal={modalActions.techStateToggle}>
          <TechFrame />
        </Modal>
        <Modal isOpen={isApplicationModalOpen} closeModal={modalActions.applicaionStateToggle}>
          <AppliFrame />
        </Modal>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
