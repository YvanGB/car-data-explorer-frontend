import React from 'react'
import { Card } from 'react-bootstrap'

export const CarTile = ({car}) => {
  return (
        <Card style={{ width: '18rem', margin:10 }}>
        <Card.Body>
            <Card.Title style={{fontSize:22}}>Marque: {car.brand}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Modèle: {car.model}</Card.Subtitle>
            <Card.Text>Année: {car.year}</Card.Text>
            <Card.Text>Couleur: {car.color}</Card.Text>
            <Card.Text>Price: {car.price}</Card.Text>
            <Card.Text>Etat: {car.state}</Card.Text>
            <Card.Text>Pays: {car.country}</Card.Text>
            <Card.Text>Mileage: {car.mileage} Km</Card.Text>      
        </Card.Body>
        </Card>
  )
}


export const AvgPriceByYear = ({car}) => {
  return (
        <Card style={{ width: '18rem', margin:10 }}>
        <Card.Body>
            <Card.Title style={{fontSize:22}}>Année: {car._id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Prix moyen: {car.averagePrice} $</Card.Subtitle>
        </Card.Body>
        </Card>
  )
}

export const CarsCountByBrand = ({car}) => {
  return (
        <Card style={{ width: '18rem', margin:10 }}>
          <Card.Body>
            <Card.Title style={{fontSize:22}}>Marque: {car.brand}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Nombre: {car.count}</Card.Subtitle>
          </Card.Body>
        </Card>
  )
}



export const CarsSortedByMileage = ({car}) => {
  return (
        <Card style={{ width: '18rem', margin:10 }}>
          <Card.Body>
              <Card.Title style={{fontSize:22}}>Marque: {car.brand}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Modèle: {car.model}</Card.Subtitle>
              <Card.Text>Année: {car.year}</Card.Text>
              <Card.Text>Couleur: {car.color}</Card.Text>
              <Card.Text>Etat: {car.state}</Card.Text>
              <Card.Text>Mileage: {car.mileage} Km</Card.Text>
          </Card.Body>
        </Card>
  )
}


export const YearCard = ({car}) => {
  return (
    <Card style={{ width: '18rem', margin: 10 }}>
      <Card.Body>
        <Card.Title style={{ fontSize: 22 }}>Année: {car}</Card.Title>
      </Card.Body>
    </Card>
  );
};


export const TotalPriceByBrand = ({car}) => {
  return (
        <Card style={{ width: '18rem', margin:10 }}>
        <Card.Body>
            <Card.Title style={{fontSize:22}}>Marque: {car._id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Prix: {car.totalPrice} $</Card.Subtitle>
        </Card.Body>
        </Card>
  )
};

export const AverageAndTotalPriceByYear = ({car}) => {
  return (
        <Card style={{ width: '18rem', margin:10 }}>
        <Card.Body>
            <Card.Title style={{fontSize:22}}>Année: {car.year}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Prix total: {car.totalPrice} $</Card.Subtitle>
            <Card.Text>Prix moyen: {car.averagePrice} $</Card.Text>
        </Card.Body>
        </Card>
  )
};

