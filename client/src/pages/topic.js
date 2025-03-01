import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Container, Grid, Header, List } from "semantic-ui-react";
import { List } from 'antd';


const Topic = () => {
    const { topic } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`/api/topic/${topic}`)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Log the fetched data
                console.log('data type:', typeof(data));
                setData(data);
            })
            .catch(error => console.error('Error fetching topic data:', error));
    }, [topic]);


    // Perform a loop outside of JSX
    const numbers = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
        numbers.push(i);
    }

    return (
        <div>
            <h1>{topic} Page</h1>
            {data ? (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                    <p>Length of data object: {Object.keys(data).length}</p>
                    <p> this {data[0]['problem']}</p>
                    {numbers}
                    {/* {data.problems && (
                        <ul>
                            {data.problems.map(problem => (
                                <li key={problem.ID}>
                                    <strong>ID:</strong> {problem.ID} <br />
                                    <strong>Problem:</strong> {problem.problem} <br />
                                    <strong>Answer:</strong> {problem.answer}
                                </li>
                            ))}
                        </ul>
                    )} */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
            
                
            

       </div>
            )

};

export default Topic;