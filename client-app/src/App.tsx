import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from "semantic-ui-react";
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/activities")
            .then((res) => {
                setActivities(res.data);
            });
    })
    return (
        <div>
            <Header as='h2' icon='users' content="Reactivities"></Header>
            <List>
            {activities.map((act: any) =>
                        <List.Item key={act.id}>{act.title}</List.Item>
                    )}                
            </List>
            <Button/>
        </div>
    );
}

export default App;
