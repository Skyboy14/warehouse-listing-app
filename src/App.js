import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


  return (
    <Router>
      <div>
        <CenteredHeading>Warehouse Management</CenteredHeading>
        <Routes>
          <Route exact path='/' element={<WarehouseList warehouseList={warehouses} />} />
          <Route
            path="/warehouse/:id"
            element={<WarehouseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
