// Filename - pages/about.js
import React, { useEffect, useState } from "react";
import { Button, Flex, Input } from 'antd';
// import React from "react";

const About = () => {
    const [dictionary, setDictionary] = useState({});
    const [newWord, setNewWord] = useState('');
    const [newDefinition, setNewDefinition] = useState('');

    useEffect(() => {
        fetch('/api/dictionary')
            .then(response => response.json())
            .then(data => setDictionary(data))
            .catch(error => console.error('Error fetching dictionary:', error));
    }, []);

    const showAlert = () => {
        alert('Hello world!!');
    };
    const showFirstEntry = () => {
        alert(dictionary[Object.keys(dictionary)[0]]);
    };
    const EditFirstEntry = () => {
        const firstKey = Object.keys(dictionary)[0];
        const newDictionary = { ...dictionary, [firstKey]: "This is the new definition" };
        setDictionary(newDictionary);
    };

    const addWord = () => {
        fetch('/api/dictionary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ [newWord]: newDefinition })
        })
        .then(response => response.json())
        .then(newWord => {
            setDictionary(prevDictionary => ({ ...prevDictionary, ...newWord }));
            setNewWord(''); // Clear the input field
            setNewDefinition(''); // Clear the input field
        })
        .catch(error => console.error('Error adding word:', error));
    };
    return (
        <div>
            <h1>
                This is the about page
            </h1>

            <ul>
                {Object.entries(dictionary).map(([word, definition]) => (
                    <li key={word}>
                        <strong>{word}:</strong> {definition}
                    </li>
                ))}
            </ul>
            {/* <button type="button" onclick="alert('Hello world!')">Click Me!</button>     */}

            <Flex gap="small" wrap>
            <Button onClick={showAlert} type="primary">Primary Button</Button>
            <Button onClick={showFirstEntry} type="primary">Show first entry</Button>
            <Button onClick={EditFirstEntry} type="primary">Edit first entry</Button>
            <Button type="button" onClick={() => addWord('newWord', 'newDefinition')}>Add Word</Button>
            <Input
                    style={{ width: '200px' }}
                    placeholder="Word"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                />
                <Input
                    style={{ width: '200px' }}
                    placeholder="Definition"
                    value={newDefinition}
                    onChange={(e) => setNewDefinition(e.target.value)}
                    />
            </Flex>
        </div>
        
    );
};

export default About;