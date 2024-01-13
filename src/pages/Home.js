import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ListedLink from '../components/ListedLink'
import { CarTile, AvgPriceByYear, CarsCountByBrand, CarsSortedByMileage, YearCard, TotalPriceByBrand, AverageAndTotalPriceByYear } from '../components/CarTile'
import api from '../services/api'
import { Pagination } from 'react-bootstrap'
import LoadingIndicator from '../components/LoadingIndicator'

const PAGE_SIZE = 96;

const Home = ({name}) => {

  const [cars, setCars] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const totalPages = Math.ceil(cars.length / PAGE_SIZE);

useEffect(()=>{
  setTimeout(() => {
    setLoading(false)
  }, 3000);
},[])

//Fonctions pour recuperer les voitures en fonctions de plusieurs criteres
const fetchAllCars = async () => {
    try {
        const result = await api.fetchCars();
        console.log("result: ", result);
        setCars(result);
    } catch (error) {
        console.log("Error: ", error);
    }
};

const fetchCarsByBrand = async () => {
  // Logique pour récupérer les voitures par marque (ford)
  try {
      const result = await api.fetchCarsByBrand();
      setCars(result);
  } catch (error) {
      console.log("Error fetching cars by brand: ", error);
  }
};

const fetchCarsByModel = async () => {
  // Logique pour récupérer les voitures par modèle (door)
  try {
      const result = await api.fetchCarsByModel();
      setCars(result);
  } catch (error) {
      console.log("Error fetching model cars door: ", error);
  }
};

const fetchCarsByYear = async () => {
  // Logique pour récupérer les voitures par année (exemple)
  try {
    const result = await api.fetchCarsByYear();
    setCars(result);
  } catch (error) {
    console.log("Error fetching cars by year: ", error);
  }
};

const fetchCarsByState = async () => {
  try {
    const result = await api.fetchCarsByState();
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchCarsByMileage = async () => {
  try {
    const result = await api.fetchCarsByMileage();
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchCarsByPrice = async () => {
  try {
    const result = await api.fetchCarsByPrice();
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchCarsByColor = async () => {
  try {
    const result = await api.fetchCarsByColor();
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchCarsByTitleStatus = async () => {
  try {
    const result = await api.fetchCarsByTitleStatus();
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

//aggregation
const fetchAveragePriceByYear = async () => {
  try {
    const result = await api.fetchAveragePriceByYear();
    console.log("Nombre de voiture par marque: ", result)
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchCarsCountByBrand = async () => {
  try {
    const result = await api.fetchCarsCountByBrand();
    console.log("Nombre de voiture par marque: ", result)
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchCarsSortedByMileage = async () => {
  try {
    const result = await api.fetchCarsSortedByMileage();
    // console.log(result)
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchDistinctYears = async () => {
  try {
    const result = await api.fetchDistinctYears();
    console.log(result[0].distinctYears);
    setCars(result[0].distinctYears);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchTotalPricesByBrand = async () => {
  try {
    const result = await api.fetchTotalPricesByBrand();
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};

const fetchAverageAndTotalPriceByYear = async () => {
  try {
    const result = await api.fetchAverageAndTotalPriceByYear();
    setCars(result);
  } catch (error) {
    console.log("Error fetching Texas cars: ", error);
  }
};


const handleRouteRendering = async () => {
  switch (name) {
    case "root":
    case "allCars":
      fetchAllCars();
      break;
    case "fordBrandCars":
      fetchCarsByBrand();
      break;
    case "modelCarsDoor":
      fetchCarsByModel();
      break;
    case "carsYear2011":
      fetchCarsByYear();
      break;
    case "texasCars":
      fetchCarsByState();
      break;
    case "maxMileageCars":
      fetchCarsByMileage();
      break;
    case "maxPriceCars":
      fetchCarsByPrice();
      break;
    case "blackCars":
      fetchCarsByColor();
      break;
    case "cleanVehicleCars":
      fetchCarsByTitleStatus();
      break;
    case "averagePriceByYear":
      fetchAveragePriceByYear();
      break;
    case "carsCountByBrand":
      fetchCarsCountByBrand();
      break;
    case "carsSortedByMileage":
      console.log("Fetching cars sorted by mileage");
      fetchCarsSortedByMileage();
      break;
    case "distinctYears":
      fetchDistinctYears();
      break;
    case "totalPricesByBrand":
      fetchTotalPricesByBrand();
      break;
    case "averageAndTotalPriceByYear":
      fetchAverageAndTotalPriceByYear();
      break;

    default:
      fetchAllCars();
  }
};

const aggRoute = ["averagePriceByYear", "carsCountByBrand", "carsSortedByMileage", "distinctYears", "totalPricesByBrand", "averageAndTotalPriceByYear"]

useEffect(() => {
  handleRouteRendering();
}, [name]);


const handlePageChange = (page) => {
  setCurrentPage(page);
};

const renderLoadingIndicator = () =>{
  return <LoadingIndicator />
}


// const renderCarTiles = () => {
//   const startIndex = (currentPage - 1) * PAGE_SIZE;
//   const endIndex = startIndex + PAGE_SIZE;
//   const carsToDisplay = cars.slice(startIndex, endIndex);
  
//   return carsToDisplay.map((car) => {
//     for (let i = 0; i < aggRoute.length; i++) {
//       if (name !== aggRoute[i]) {
//         return <CarTile key={car._id} car={car} />;
//       } else {
//         switch (name) {
//           case aggRoute[0]:
//             console.log(car);
//             return <AvgPriceByYear key={car._id} car={car} />;
//           case aggRoute[1]:
//             return <CarsCountByBrand key={car._id} car={car} />;
//           case aggRoute[2]:
//             return <CarsSortedByMileage key={car._id} car={car} />;
//           default:
//             return <CarTile key={car._id} car={car} />;
//         }
//       }
//     }
//     // Si aucune condition n'est satisfaite, retourner CarTile par défaut
//     return <CarTile key={car._id} car={car} />;
//   });
// };


const renderCarTiles = () => {
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const carsToDisplay = cars.slice(startIndex, endIndex);

  return carsToDisplay.map((car) => {
    // Utilisez indexOf pour vérifier la présence du nom dans aggRoute
    const aggIndex = aggRoute.indexOf(name);

    if (aggIndex === -1) {
      return <CarTile key={car._id} car={car} />;
    } else {
      switch (name) {
        case aggRoute[0]:
          return <AvgPriceByYear key={car._id} car={car} />;
        case aggRoute[1]:
          return <CarsCountByBrand key={car._id} car={car} />;
        case aggRoute[2]:
          return <CarsSortedByMileage key={car._id} car={car} />;
        case aggRoute[3]:
          return <YearCard key={car} car={car} />
        case aggRoute[4]:
          return <TotalPriceByBrand key={car._id} car={car} />
        case aggRoute[5]:
          return <AverageAndTotalPriceByYear key={car._id} car={car} />
        
        default:
          return <CarTile key={car._id} car={car} />;
      }
    }
  });
};


  return (
    <div>
        <Header />
        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{marginTop:10, marginLeft:10}} className='col-3'>
            <ListedLink />
          </div>
          
            <div style={{
                width:'70%',
                display:'flex', 
                flexDirection:'row', 
                flexWrap:'wrap', 
                marginLeft:20,
                justifyContent:'space-evenly',
                alignItems:'center',
                marginTop:10
            }} className='col-9'>
              {
                loading ? renderLoadingIndicator() : renderCarTiles()
              }
                
            </div>
        </div> 
        
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Pagination>
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            </Pagination> 
        </div>
    </div>
  )
}


export default Home