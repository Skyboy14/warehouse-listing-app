import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Table, TableCell, TableHead, TableHeader, TableRow, WarehouseListContainer } from './styleSheet';
import { Pagination } from './Pagination';
import { FilterComponent } from './Filter';

function WarehouseList({ warehouseList }) {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const [filter, setFilter] = useState({
        name: '',
        city: '',
        cluster: '',
        space_available: '',
    });

    const filteredWarehouses = warehouseList
        .filter((warehouse) =>
            warehouse.name.includes(filter.name) || filter.name === ''
        )
        .filter((warehouse) =>
            warehouse.city.includes(filter.city) || filter.city === ''
        )
        .filter((warehouse) =>
            warehouse.cluster.includes(filter.cluster) || filter.cluster === ''
        )
        .filter((warehouse) =>
            warehouse.space_available >= parseInt(filter.space_available) || filter.space_available === ''
        );


    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredWarehouses.length / itemsPerPage);

    // Calculate the start and end indexes for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the items for the current page
    const currentItems = filteredWarehouses.slice(startIndex, endIndex);

    return (
        <WarehouseListContainer>
            <h2>Warehouse List</h2>

            <FilterComponent
                filter={filter}
                setFilter={setFilter}
            />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Cluster</TableHead>
                        <TableHead>Available Space</TableHead>
                        <TableHead>Details</TableHead>
                    </TableRow>
                </TableHeader>
                <tbody>
                    {currentItems.map((warehouse) => (
                        <TableRow key={warehouse.id}>
                            <TableCell>{warehouse.id}</TableCell>
                            <TableCell>
                                <Link to={`/warehouse/${warehouse.id}`}>{warehouse.name}</Link>
                            </TableCell>
                            <TableCell>{warehouse.city}</TableCell>
                            <TableCell>{warehouse.cluster}</TableCell>
                            <TableCell>{warehouse.space_available}</TableCell>
                            <TableCell>
                                <Link to={`/warehouse/${warehouse.id}`}><IoIosArrowDroprightCircle /></Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </WarehouseListContainer>
    );
}

export default WarehouseList;
