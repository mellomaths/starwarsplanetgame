import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const { planetName } = this.props;

        return (
            <div className="row">
                <div className="col s7">
                    <h1>{planetName ? planetName : ''}</h1>
                </div>

                <div className="col s5">
                    <button
                        id="addNewTaskTrigger"
                        data-target="addNewTaskModal"
                        className="btn-large waves-effect waves-light right teal darken-1 modal-trigger"
                        onClick={this.props.pickAPlanet}
                    >
                        Pick another planet
                        <i className="material-icons right">autorenew</i>
                    </button>
                </div>
            </div>
        );
    }
}
