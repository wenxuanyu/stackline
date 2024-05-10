import React, { useMemo, useState } from 'react';
import { Table, TableContainer, Paper } from '@mui/material';
import ListTableHead from './ListTableHead';
import ListTableBody from './ListTableBody';
import { useSelector } from 'react-redux';

interface SalesData {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

const ListTable = () => {
    const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');
    const [valueToOrderBy, setValueToOrderBy] = useState<string>('');

    const salesData = useSelector((state: { data: { data: { sales: SalesData[] }[] } }) => state.data.data[0].sales);

    const columns: string[] = ['week Ending', 'retail Sales', 'wholesale Sales', 'units Sold', 'retailer Margin'];

    const handleRequestSort = (property: string) => {
        const isAscending = valueToOrderBy === property && orderDirection === 'asc';
        setValueToOrderBy(property);
        setOrderDirection(isAscending ? 'desc' : 'asc');
    };

    const sortedSalesData = useMemo(() => {
        return salesData.sort((a, b) => {
            if (a[valueToOrderBy] < b[valueToOrderBy]) {
                return orderDirection === 'asc' ? -1 : 1;
            }
            if (a[valueToOrderBy] > b[valueToOrderBy]) {
                return orderDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [valueToOrderBy, orderDirection, salesData]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <ListTableHead
                    columns={columns}
                    valueToOrderBy={valueToOrderBy}
                    orderDirection={orderDirection}
                    onRequestSort={handleRequestSort}
                />
                <ListTableBody sortedSalesData={sortedSalesData} />
            </Table>
        </TableContainer>
    );
};

export default ListTable;

