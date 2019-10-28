import React, {Component} from 'react';

export default class Home extends Component {
    state = {
        counter: 0,
    };

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Onepoint MDM UI</h3>
                <div className="col-sm-12">
                    This UI allows to generate forms from JSON schemas.
                </div>
            </div>
        );
    }
}
