import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

const ImageCard = () => {
    interface SalesData {
        weekEnding: string;
        retailSales: number;
        wholesaleSales: number;
        unitsSold: number;
        retailerMargin: number;
    }

    interface ItemDetails {
        image: string;
        title: string;
        subtitle: string;
        tags: string[];
        sales: SalesData[];
    }

    interface RootState {
        data: {
            data: ItemDetails[];
        };
    }

    const ItemData = useSelector((state: RootState) => state.data.data[0]);

    return (
        <Card>
            <CardMedia component='img' height='140' image={ItemData.image} alt='random image' />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {ItemData.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {ItemData.subtitle}
                </Typography>
                <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', mt: 3 }}>
                    {ItemData.tags.map((tag) => (
                        <Chip style={{ marginBottom: '10px' }} label={tag} variant='outlined' />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ImageCard;