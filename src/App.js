import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddCarPage from './pages/AddCar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home name="root" />} />
        <Route path="/cars" element={<Home name="allCars" />} />  
        <Route path="/ford-cars" element={<Home name="fordBrandCars" />} />
        <Route path="/model-cars=door" element={<Home name="modelCarsDoor" />} />
        <Route path="/cars-year=2011" element={<Home name="carsYear2011" />} />
        <Route path="/texas-cars" element={<Home name="texasCars" />} />
        <Route path="/max-mileage=35000" element={<Home name="maxMileageCars" />} />
        <Route path="/max-price=15000" element={<Home name="maxPriceCars" />} />
        <Route path="/cars-color=black" element={<Home name="blackCars" />} />
        <Route path="/cars-title=clean_vehicle" element={<Home name="cleanVehicleCars" />} />
        <Route path="/average-price-by-year" element={<Home name="averagePriceByYear" />} />
        <Route path="/cars-count-by-brand" element={<Home name="carsCountByBrand" />} />
        <Route path="/cars-sort-by-mileage&order=asc" element={<Home name="carsSortedByMileage" />} />
        <Route path="/distinct-years" element={<Home name="distinctYears" />} />
        <Route path="/total-prices-by-brand" element={<Home name="totalPricesByBrand" />} />
        <Route path="/average-and-total-price-by-year" element={<Home name="averageAndTotalPriceByYear" />} />
        <Route path="/add-car" element={<AddCarPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
