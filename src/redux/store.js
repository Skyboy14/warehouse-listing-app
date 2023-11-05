import { configureStore } from '@reduxjs/toolkit';
import { warehouseReducer } from './reducers';

const store = configureStore({
    reducer: {
        warehouses: warehouseReducer,
    },
});

export default store;