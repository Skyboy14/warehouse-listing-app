import React from 'react';
import { ButtonWrapper, DetailForm, DetailInput, DetailLabel, DetailSelect } from './styleSheet';



function WarehouseDetailForm({ editedWarehouse, handleInputChange, handleSaveClick, handleBackClick, hasChanges }) {
    return (
        <>
            <DetailForm>
                <div>
                    <DetailLabel>ID:</DetailLabel>
                    <DetailInput
                        type="text"
                        id="id"
                        name="id"
                        value={editedWarehouse.id}
                        onChange={handleInputChange}
                        disabled
                    />
                </div>
                <div>
                    <DetailLabel>Name:</DetailLabel>
                    <DetailInput
                        type="text"
                        id="name"
                        name="name"
                        value={editedWarehouse.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <DetailLabel>Code:</DetailLabel>
                    <DetailInput
                        type="text"
                        id="code"
                        name="code"
                        value={editedWarehouse.code}
                        onChange={handleInputChange}
                        disabled
                    />
                </div>
                <div>
                    <DetailLabel>Type:</DetailLabel>
                    <DetailInput
                        type="text"
                        id="type"
                        name="type"
                        value={editedWarehouse.type}
                        onChange={handleInputChange}
                        disabled
                    />
                </div>
                <div>
                    <DetailLabel>Space Available:</DetailLabel>
                    <DetailInput
                        min={0}
                        type="number"
                        id="space_available"
                        name="space_available"
                        value={editedWarehouse.space_available}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <DetailLabel>City:</DetailLabel>
                    <DetailInput
                        type="text"
                        id="city"
                        name="city"
                        value={editedWarehouse.city}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <DetailLabel>Cluster:</DetailLabel>
                    <DetailInput
                        type="text"
                        id="cluster"
                        name="cluster"
                        value={editedWarehouse.cluster}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <DetailLabel>Is Live:</DetailLabel>
                    <DetailSelect
                        id="is_live"
                        name="is_live"
                        value={editedWarehouse.is_live}
                        onChange={handleInputChange}
                    >
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </DetailSelect>
                </div>

                <div>
                    <DetailLabel>Is Registered:</DetailLabel>
                    <DetailInput
                        id="is_registered"
                        name="is_registered"
                        value={editedWarehouse.is_registered}
                        onChange={handleInputChange}
                        disabled
                    />
                </div>
            </DetailForm>
            <ButtonWrapper>
                <button type="button" onClick={handleSaveClick} disabled={!hasChanges}>
                    Update
                </button>
                <button type="button" onClick={handleBackClick}>
                    Back
                </button>
            </ButtonWrapper>
        </>
    );
}

export default WarehouseDetailForm;
