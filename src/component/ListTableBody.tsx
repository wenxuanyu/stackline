import React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface ListTableBodyProps {
  sortedSalesData: SalesData[];
}

const ListTableBody: React.FC<ListTableBodyProps> = ({ sortedSalesData }) => {
  return (
    <TableBody>
      {sortedSalesData.map((row, index) => (
        <TableRow key={index}>
          <TableCell>{row.weekEnding}</TableCell>
          <TableCell>{row.retailSales}</TableCell>
          <TableCell>{row.wholesaleSales}</TableCell>
          <TableCell>{row.unitsSold}</TableCell>
          <TableCell>{row.retailerMargin}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default ListTableBody;
