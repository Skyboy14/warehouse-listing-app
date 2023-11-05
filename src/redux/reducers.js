// reducers.js
const initialState = {
    warehouses: [],
};


export const warehouseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WAREHOUSES':
            return {
                ...state,
                warehouses: action.payload,
            };

        case 'UPDATE_WAREHOUSE':
            return {
                ...state,
                warehouses: state.warehouses.map((warehouse) =>
                    warehouse.id === action.payload.id ? action.payload : warehouse
                ),
            };
        default:
            return state;
    }
};