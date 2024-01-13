import React, {useState} from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ListedLink() {
    const [activeItem, setActiveItem] = useState("/cars");

    // const handleItemClick = (eventKey) => {
    //   // Mettre à jour l'état de l'élément actif lorsqu'un élément est cliqué
    //   setActiveKey(eventKey);
    //   // Naviguer vers la nouvelle URL
    //   navigate(`/${eventKey}`);
    // };

    const handleItemClick = (eventKey) => {
      setActiveItem(eventKey);
    };

    const renderListGroupItems = () => {
      const items = [
        { key: "/cars", label: "Toutes les voitures" },
        { key: "/ford-cars", label: "Les voitures de marque Ford" },
        { key: "/model-cars=door", label: "Les voitures de model Door" },
        { key: "/cars-year=2011", label: "Liste des voitures de 2011" },
        { key: "/texas-cars", label: "Liste des voitures de l'Etat du Texas" },
        { key: "/max-mileage=35000", label: "Liste des voitures ayant parcouru maximum 35000Km" },
        { key: "/max-price=15000", label: "Liste des voitures ne depassant pas 15000$" },
        { key: "/cars-color=black", label: "Liste des voitures de couleur noire" },
        { key: "/cars-title=clean_vehicle", label: "Liste des voitures neuves" },
        { key: "/average-price-by-year", label: "Prix moyen des voitures par année" },
        { key: "/cars-count-by-brand", label: "Nombre de voitures par marque" },
        { key: "/cars-sort-by-mileage&order=asc", label: "Liste des voitures par kilométrage" },
        { key: "/distinct-years", label: "Liste des années distinctes des voitures" },
        { key: "/total-prices-by-brand", label: "Somme des prix des voitures par marque" },
        { key: "/average-and-total-price-by-year", label: "Moyenne et somme des prix des voitures par année" }
      ];
  
      return items.map((item) => (
        <ListGroup.Item
          key={item.key}
          action
          variant='info'
          as={Link}
          to={item.key}
          style={{
            textDecoration: 'none',
            color: activeItem === item.key ? 'white' : 'black',
            fontSize: activeItem === item.key ? 18 : 15,
            fontWeight: activeItem === item.key ? 'bold' : 'normal'
            // backgroundColor: activeItem === item.key ? '#007bff' : 'transparent',
          }}
          onClick={() => handleItemClick(item.key)}
        >
          {item.label}
        </ListGroup.Item>
      ));
    };

  // return (
  //   <ListGroup defaultActiveKey="/cars" activeKey={activeKey} onSelect={handleItemClick}>
  //     <ListGroup.Item action variant='info' eventKey="cars" >
  //       <Link style={linkStyle} to="/cars">Toutes les voitures</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="ford-cars" >
  //       <Link style={linkStyle} to="/ford-cars">Les voitures de marque Ford</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="model-cars=door" >
  //       <Link style={linkStyle} to="/model-cars=door">Les voitures de model Door</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="cars-year=2011">
  //       <Link style={linkStyle} to="/cars-year=2011">Liste des voitures de 2011</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="texas-cars">
  //       <Link style={linkStyle} to="/texas-cars">Liste des voitures de l'Etat du Texas</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="max-mileage=35000">
  //       <Link style={linkStyle} to="/max-mileage=35000">Liste des voitures de Kilométrage maximale 35000Km</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="max-price=15000">
  //       <Link style={linkStyle} to="/max-price=15000">Liste des voitures ne depassant pas 15000$</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="cars-color=black">
  //       <Link style={linkStyle} to="/cars-color=black">Liste des voitures de couleur noire</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="cars-title=clean_vehicle">
  //       <Link style={linkStyle} to="/cars-title=clean_vehicle">Liste des voitures neuves</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="average-price-by-year">
  //       <Link style={linkStyle} to="/average-price-by-year">Prix moyen des voiture par année</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="cars-count-by-brand">
  //       <Link style={linkStyle} to="/cars-count-by-brand">Nombre de voitures par marque</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="cars?sort=mileage&order=asc">
  //       <Link style={linkStyle} to="/cars?sort=mileage&order=asc">Liste des voitures par kilométrage</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="distinct-years">
  //       <Link style={linkStyle} to="/distinct-years">Liste des années distinctes des voitures</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="total-prices-by-brand">
  //       <Link style={linkStyle} to="/total-prices-by-brand">Somme des prix des voitures par marque</Link>
  //     </ListGroup.Item>
  //     <ListGroup.Item action variant='info' eventKey="average-and-total-price-by-year">
  //       <Link style={linkStyle} to="/average-and-total-price-by-year">Moyenne et somme des prix des voitures par année</Link>
  //     </ListGroup.Item>    

  //   </ListGroup>
  // )
  return (
    <ListGroup defaultActiveKey="/cars">
      {renderListGroupItems()}
    </ListGroup>
  );
}

export default ListedLink
