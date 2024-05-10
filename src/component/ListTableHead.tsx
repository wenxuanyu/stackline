import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

interface ListTableHeadProps {
  columns: string[];
  valueToOrderBy: string;
  orderDirection: 'asc' | 'desc';
  onRequestSort: (property: string) => void;
}

const ListTableHead: React.FC<ListTableHeadProps> = ({ columns, valueToOrderBy, orderDirection, onRequestSort }) => {
  const onSortChange = (property: string) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell, index) => (
          <TableCell key={index}>
            <TableSortLabel
              active={valueToOrderBy === headCell.replace(' ', '')}
              direction={valueToOrderBy === headCell.replace(' ', '') ? orderDirection : 'asc'}
              onClick={() => onSortChange(headCell.replace(' ', ''))} 
            >
              {headCell.charAt(0).toUpperCase() + headCell.slice(1)}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default ListTableHead;
