import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWarehouse } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { WarehouseDetailsContainer } from './styleSheet';
import WarehouseDetailForm from './Form';

function WarehouseDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Retrieve the warehouse data from Redux store based on the 'id' parameter
    const warehouse = useSelector((state) =>
        state.warehouses.warehouses.find((w) => w.id === parseInt(id))
    );

    // Use local state for editing
    const [editedWarehouse, setEditedWarehouse] = useState({ ...warehouse });

    // State to track changes
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        // Compare the current 'editedWarehouse' with the initial 'warehouse'
        const isDifferent = Object.keys(editedWarehouse).some(
            (key) => editedWarehouse[key] !== warehouse[key]
        );
        setHasChanges(isDifferent);
    }, [editedWarehouse, warehouse]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedWarehouse({
            ...editedWarehouse,
            [name]: value,
        });
    };

    const handleSaveClick = () => {
        // Check if any field is empty in the editedWarehouse object
        const isEmptyField = Object.values(editedWarehouse).some((value) => !value);

        if (isEmptyField) {
            // Display an error message or handle the empty fields as needed
            alert('Please fill in all fields before saving.');
        } else {
            // Dispatch the updated data to the Redux store
            dispatch(updateWarehouse(editedWarehouse));
        }
    };
    const handleBackClick = () => {
        navigate('/'); // Navigate back to the list page
    };

    return (
        <WarehouseDetailsContainer>
            <h2>Warehouse Details</h2>

            <WarehouseDetailForm
                editedWarehouse={editedWarehouse}
                handleInputChange={handleInputChange}
                handleSaveClick={handleSaveClick}
                handleBackClick={handleBackClick}
                hasChanges={hasChanges}
            />
        </WarehouseDetailsContainer>
    );
}

export default WarehouseDetail;
