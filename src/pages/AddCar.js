import React, { useState } from 'react';
import { Container, Form, Button, Alert  } from 'react-bootstrap';
import api from '../services/api';
import { Navigate } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

function AddCarPage() {
  const [carData, setCarData] = useState({
    price: '',
    brand: '',
    model: '',
    year: '',
    title_status: '',
    mileage: '',
    color: '',
    vin: '',
    state: '',
    country: '',
    condition: '',
  });

  const [redirection, setRedirection] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const showAlert = (message, type) => {
    // setAlertMessage(message);
    // setAlertType(type);
    // Afficher l'alerte pendant 3 secondes (3000 millisecondes)
    setTimeout(() => {
      setAlertMessage(message);
    setAlertType(type);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      await api.addCar(carData)
      .then(()=>{
        showAlert('Voiture ajoutée avec succès', 'success');

        setRedirection(true);
      })
      .catch (error => {
      console.error('Erreur lors de l\'ajout de la voiture :', error);
      showAlert('Erreur lors de l\'ajout de la voiture', 'danger');
    })
  };

  if (redirection) {
    return <Navigate replace to="/cars" />
  }

  return (
    <Container>
      <h2>Ajouter une voiture</h2>

      {alertMessage && <Alert variant={alertType}>{alertMessage}</Alert>}
      {!redirection && (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPrice">
          <Form.Label>Prix</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Entrez le prix"
            name="price"
            value={carData.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBrand">
          <Form.Label>Marque</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrez la marque"
            name="brand"
            value={carData.brand}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formModel">
          <Form.Label>Modèle</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrez le modèle"
            name="model"
            value={carData.model}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formYear">
          <Form.Label>Année</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Entrez l'année"
            name="year"
            value={carData.year}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formTitleStatus">
          <Form.Label>Statut du titre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez le statut du titre"
            name="title_status"
            value={carData.title_status}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formMileage">
          <Form.Label>Kilométrage</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Entrez le kilométrage"
            name="mileage"
            value={carData.mileage}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formColor">
          <Form.Label>Couleur</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez la couleur"
            name="color"
            value={carData.color}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formVin">
          <Form.Label>Numero d'immatriculation</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrez le numero d'immatriculation"
            name="vin"
            value={carData.vin}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formState">
          <Form.Label>État</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez l'état"
            name="state"
            value={carData.state}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCountry">
          <Form.Label>Pays</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez le pays"
            name="country"
            value={carData.country}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCondition">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez la condition"
            name="condition"
            value={carData.condition}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{marginTop:20}}>
          Ajouter la voiture
        </Button>
      </Form>
      )}
    </Container>
  );
}

export default AddCarPage;
