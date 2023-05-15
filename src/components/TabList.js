import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import React, { useState } from 'react';
import Manufacturers from './Manufacturers';

export default function TabList() {

    const [value, setValue] = useState('one');

    const changeTab = (event, value) => {
        setValue(value);
    };

    return(
        <div>
            <Tabs value={value} onChange={changeTab}>
                <Tab value="one" label="Koti" />
                <Tab value="two" label="Tuotteet" />
                <Tab value="three" label="Valmistajat" />
                <Tab value="four" label="Meistä" />
            </Tabs>
            {value === 'one' && <div><Home /></div>}
            {value === 'two' && <div><Products /></div>}
            {value === 'three' && <div><Manufacturers /></div>} 
            {value === 'four' && <div><AboutUs /></div>}
        </div>
    );
}