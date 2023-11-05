import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation, PageInfo, PaginationContainer, StyledNextButton, StyledPrevButton } from './styleSheet';


export function Pagination({ currentPage, totalPages, setCurrentPage }) {
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <Navigation>
            <PaginationContainer>
                <StyledPrevButton
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                >
                    <IoIosArrowBack /> Previous
                </StyledPrevButton>
            </PaginationContainer>
            <PageInfo>
                Page {currentPage} of {totalPages}
            </PageInfo>
            <StyledNextButton
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
            >
                Next <IoIosArrowForward />
            </StyledNextButton>
        </Navigation>
    );
}
