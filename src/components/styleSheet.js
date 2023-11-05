import styled from "styled-components";

export const WarehouseDetailsContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 66%;
  margin: auto;
`;

export const DetailForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  }
`;

export const DetailInput = styled.input`
  margin-bottom: 10px;
`;

export const DetailLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

export const DetailSelect = styled.select`
  margin-bottom: 10px;
  width: 170px;
  height: 21px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    `;


export const WarehouseListContainer = styled.div`
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

export const TableHead = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gainsboro;
  padding: 5px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CenteredHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PageInfo = styled.div`
  margin-right: 20px;
`;

export const PaginationButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
`;

export const StyledPrevButton = styled(PaginationButton)`
  order: 1;
`;

export const StyledNextButton = styled(PaginationButton)`
  order: 3; /* Changed the order to 3 */
`;