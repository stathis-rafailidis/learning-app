import { Button, Flex, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Start = () => {

    const navigate = useNavigate();

    const handleButtonClick = (topic) => {
        navigate(`/topic/${topic}`);
    };
    return (
        <div>
            <h1>This is the start page</h1>
            <h2>select a topic</h2>
            <Button type="primary" onClick={() => handleButtonClick('math1')}>Math1</Button>
            <Button type="primary" onClick={() => handleButtonClick('math2')}>Math2</Button>
            <Button type="primary" onClick={() => handleButtonClick('math3')}>Math3</Button>
            
        </div>
    );
};

export default Start;