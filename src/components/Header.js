import React, { Component } from 'react';
import { Button, Icon, Row, Col } from 'react-materialize';

export default class Header extends Component {
    render() {
        const { planetName } = this.props;

        return (
            <Row>
                <Col m={7} s={12}>
                    <h1>{planetName}</h1>
                </Col>
                <Col m={5} s={12}>
                    <Button
                        className="btn-large waves-effect waves-light right teal darken-1"
                        onClick={this.props.pickAPlanet}
                    >
                        Pick another planet<Icon className="right">autorenew</Icon>
                    </Button>
                </Col>
            </Row>
        );
    }
}
