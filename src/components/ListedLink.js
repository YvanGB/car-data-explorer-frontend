import React, {useState, useEffect} from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function ListedLink() {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState("/cars");

    useEffect(() => {
      // Mettre à jour l'élément actif en fonction de l'URL actuelle
      setActiveItem(location.pathname);
    }, [location.pathname]);

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
          // variant='info'
          as={Link}
          to={item.key}
          style={{
            backgroundColor:'#FFC107',
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

  return (
    <ListGroup style={{position:'fixed'}} defaultActiveKey="/cars">
      {renderListGroupItems()}
    </ListGroup>
  );
}

export default ListedLink
