import logo from './stackline_logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/actions';
import { AppDispatch } from './redux/store';
import SalesChart from './component/SalesChart';
import ListTable from './component/ListTable';
import ItemCard from './component/ItemCard';

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const userData = useSelector((state: any) => state.data.data);
    const isLoading = useSelector((state: any) => state.data.loading);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>No data found.</div>;
    }

    return (
        <div className='App'>
            <header style={{ height: '100px', backgroundColor: '#052849' }}>
                <img
                    style={{ height: '120px', width: '120px', position: 'absolute', top: 0, left: 20 }}
                    src={logo}
                    className='App-logo'
                    alt='logo'
                />
            </header>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    top: '150px',
                    width: '100%',
                    backgroundColor: '#f6f8fa'
                }}
            >
                <div style={{ width: '18%' }}>
                    <ItemCard />
                </div>
                <div
                    style={{
                        width: '80%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <SalesChart />
                    <ListTable />
                </div>
            </div>
        </div>
    );
}

export default App;
