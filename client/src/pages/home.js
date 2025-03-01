// Filename - pages/index.js
import { Button, Flex, Input } from 'antd';
import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>This is the home page</h1>
            <Button type="primary">Settings</Button>
            <Button type="primary" onClick={() => navigate('/start')}>Start</Button>
            <Button type="primary" onClick={() => navigate('/about')}>About</Button>
        </div>
    );
};

export default Home;