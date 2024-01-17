import React from 'react'
import { Card, Button, CardHeader } from 'react-bootstrap'

export const CarTile = ({car}) => {
  return (
        <Card className='box' style={{ width: '18rem', margin:10, backgroundColor:'white', borderWidth:2  }}>
        <CardHeader style={{backgroundColor:'white'}}>
          <Card.Title style={{fontSize:22, color:'#047fee'}}>Marque: {car.brand}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{fontSize:18}}>Modèle: {car.model}</Card.Subtitle>
        </CardHeader>
        <Card.Body  style={{fontSize:17}}>
          <Card.Text><span style={{color:'#047fee'}}>Année :</span> {car.year}</Card.Text>
          <Card.Text><span style={{color:'#047fee'}}>Couleur :</span> {car.color}</Card.Text>
          <Card.Text><span style={{color:'#047fee'}}>Price : </span> {car.price}</Card.Text>
          <Card.Text><span style={{color:'#047fee'}}>Etat : </span> {car.state}</Card.Text>
          <Card.Text><span style={{color:'#047fee'}}>Pays : </span> {car.country}</Card.Text>
          <Card.Text><span style={{color:'#047fee'}}>Mileage : </span> {car.mileage} Km</Card.Text>      
        </Card.Body>
        <Card.Footer style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', backgroundColor:'white'}}>
          <Button variant='light' style={{backgroundColor:'#5ae684', color:'white', fontWeight:'bold',}} >Modifier</Button>
          <Button variant='light' style={{backgroundColor:'#f25050',color:'white', fontWeight:'bold'}}>Supprimer</Button>
        </Card.Footer>
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

