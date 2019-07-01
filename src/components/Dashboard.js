import React, { Component } from 'react';
import api from '../services/api';
import Header from './Header';
import Planet from './Planet';

export default class Dashboard extends Component {
    state = {
        pick: {},
        movies: [],
        loaded: false
    };

    async componentDidMount() {
        await this.pickAPlanet();
        await this.getMovieWherePlanetAppears();
        this.setState({ loaded: true });
    }

    pickAPlanet = async () => {
        const allPlanetsResponse = await api.get('/planets');
        const planetId = Math.floor(Math.random() * allPlanetsResponse.data.count) + 1;
        // const planetId = 1;

        const response = await api.get(`/planets/${planetId}`);
        const planet = response.data;
        this.setState({ pick: planet });
    };

    getMovieWherePlanetAppears = async () => {
        const { films } = this.state.pick;

        if (!films) {
            return;
        }

        const movies = [];

        for (let i = 0; i < films.length; i++) {
            const filmEndpoint = films[i];
            const response = await api.get(filmEndpoint);
            movies.push(response.data);
        }

        this.setState({ movies: movies });
    };

    refreshPlanetInfo = async () => {
        this.setState({ loaded: false, pick: {}, movies: [] });
        await this.pickAPlanet();
        await this.getMovieWherePlanetAppears();
        this.setState({ loaded: true });
    };

    render() {
        if (!this.state.loaded) {
            return <></>;
        }

        return (
            <>
                <Header planetName={this.state.pick.name} pickAPlanet={this.refreshPlanetInfo} />
                <Planet planet={this.state.pick} movies={this.state.movies} />
            </>
        );
    }
}
