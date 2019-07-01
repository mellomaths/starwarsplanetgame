import React, { Component } from 'react';
import { Card, Row, Col, Icon, Collection, CollectionItem } from 'react-materialize';

export default class Planet extends Component {
    render() {
        const { planet, movies } = this.props;

        return (
            <>
                <Row>
                    <Col m={4} s={12}>
                        <Card
                            title={
                                <span>
                                    <Icon className="right">wb_sunny</Icon>
                                    <Icon className="right">cloud</Icon>Climate
                                </span>
                            }
                        >
                            {planet.climate}
                        </Card>
                    </Col>
                    <Col m={8} s={12}>
                        <Card
                            title={
                                <span>
                                    <Icon className="right">terrain</Icon>Terrain
                                </span>
                            }
                        >
                            {planet.terrain}
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col m={12} s={12}>
                        <Card title={<span>Seen in {movies ? movies.length : 0} movies</span>}>
                            <Row>
                                <Col m={12} s={12}>
                                    <Collection>
                                        {movies.map(movie => (
                                            <CollectionItem className="avatar">
                                                <Icon className="right">local_movies</Icon>
                                                <span className="title">{movie.title}</span>
                                                <p>
                                                    {movie.director}
                                                    <br />
                                                    {movie.release_date}
                                                </p>
                                            </CollectionItem>
                                        ))}
                                    </Collection>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}
