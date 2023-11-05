import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useRouteError } from 'react-router-dom';
import WarehouseList from './components/WarehouseList';
import WarehouseDetail from './components/WarehouseDetail';
import { useDispatch, useSelector } from 'react-redux';
import { addWarehouses } from './redux/actions';
import data from './data/warehouseData.json'
import { CenteredHeading } from './components/styleSheet';


function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(addWarehouses(data));
  }, [])

  const warehouses = useSelector((state) => state.warehouses.warehouses);

  function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return (
      <div>
        <h2>Something went wrong</h2>
        <p>Please refresh the page or try again later.</p>
      </div>
    )
  }


  return (
    <Router>
      <div className="app-container">
        <CenteredHeading>Warehouse Management</CenteredHeading>

        <Routes>
          <Route exact path='/' element={<WarehouseList warehouseList={warehouses} />} />
          <Route
            path="/warehouse/:id"
            element={<WarehouseDetail />}
            errorElement={<ErrorBoundary />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
