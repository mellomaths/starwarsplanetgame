import React, { Component } from 'react';
import api from '../services/api';
import Materialize from 'materialize-css';
import { Modal, Button, Container, Navbar, NavItem, Card, Row, Col, CardTitle } from 'react-materialize';
import Header from './Header';

export default class Dashboard extends Component {
    state = {
        pick: {},
        planets: []
    };

    async componentDidMount() {
        await this.pickAPlanet();
    }

    pickAPlanet = async () => {
        const allPlanetsResponse = await api.get('/planets');
        const planetId = Math.floor(Math.random() * allPlanetsResponse.data.count) + 1;

        const response = await api.get(`/planets/${planetId}`);
        const planet = response.data;
        this.setState({ pick: planet, planets: [planet, ...this.state.planets] });
    };

    render() {
        return (
            <>
                <Header planetName={this.state.pick.name} pickAPlanet={this.pickAPlanet} />
            </>
        );
    }
}
