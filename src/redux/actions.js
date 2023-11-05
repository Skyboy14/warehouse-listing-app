// actions.js

export const addWarehouses = (warehouses) => {
    return {
        type: 'ADD_WAREHOUSES',
        payload: warehouses,
    };
};

export const updateWarehouse = (warehouse) => {
    return {
        type: 'UPDATE_WAREHOUSE',
        payload: warehouse,
    };
};




