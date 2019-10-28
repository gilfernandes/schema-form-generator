import React, {Component} from 'react';
import {FieldFactory} from "./FieldFactory";

export class ArrayField extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            numberItems: 2,
            field: props.field
        }
    }

    componentDidMount() {

    }

    increaseNumberItems = (e, diff) => {
        this.setState({
            numberItems: this.state.numberItems + diff
        });
        e.preventDefault();
    };

    render() {
        return (
            <div className="form-group row">
                <label htmlFor={this.state.field.$id}
                       className="col-sm-3 control-label">{this.state.field.title}</label>
                <div className="col-sm-9">
                    {
                        [...Array(this.state.numberItems).keys()].map(n => {
                            return (
                                <FieldFactory field={this.state.field.items}/>
                            );
                        })
                    }
                    <button className="btn btn-info array-field" onClick={(e) => this.increaseNumberItems(e, 1)}>+</button>
                    <button className="btn btn-danger array-field" onClick={(e) => this.increaseNumberItems(e, -1)}>-</button>
                </div>
            </div>
        );
    }
}