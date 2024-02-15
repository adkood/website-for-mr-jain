import React, { lazy, Suspense } from 'react';
import Modal from '../src/utils/Modal/Modal';
import ProductFrame from './utils/ProductFrame/ProductFrame';
import TechFrame from './utils/TechFrame/TechFrame';
import { modalActions } from './store';
import { useSelector } from 'react-redux';
import AppliFrame from './utils/AppliFrame/AppliFrame';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const HomePage = lazy(() => import('./components/Home/HomePage'));
const Products = lazy(() => import('./components/Products/Products'));
const Technology = lazy(() => import('./components/Technology/Technology'));
const Application = lazy(() => import('./components/Application/Application'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));


function App() {

  const isProductModalOpen = useSelector((state) => state.modal.productState);
  const isTechModalOpen = useSelector((state) => state.modal.techState);
  const isApplicationModalOpen = useSelector((state) => state.modal.applicationState);

  return (
    <Suspense fallback={<div style={{ color: "brown", fontSize: "1.5rem" }}>Loading...</div>}>
      <Navbar />
      <HomePage />
      <Products />
      <Technology />
      <Application />
      <AboutUs />
      <ContactUs />
      <Modal isOpen={isProductModalOpen} closeModal={modalActions.productStateToggle}>
        <ProductFrame />
      </Modal>
      <Modal isOpen={isTechModalOpen} closeModal={modalActions.techStateToggle}>
        <TechFrame />
      </Modal>
      <Modal isOpen={isApplicationModalOpen} closeModal={modalActions.applicaionStateToggle}>
        <AppliFrame />
      </Modal>
    </Suspense>
  );
}

export default App;
