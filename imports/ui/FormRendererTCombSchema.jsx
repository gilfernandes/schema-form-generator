import React, {Component} from 'react';
import t from 'tcomb-form';
import {readSchema} from "./schema/SchemaReader";

var transform = require('tcomb-json-schema');

export class FormRendererTCombSchema extends Component {

    constructor(props, context) {
        super(props, context);
        const schema = readSchema();
        this.state = {
            schema: JSON.stringify(schema),
            formSchema: transform(schema),
            validationErrors: []
        }
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        let validate = this.refs.form.validate();
        if(validate.errors && validate.errors.length > 0) {
            this.setState({
                validationErrors: validate.errors
            })
        }
        else {
            const value = this.refs.form.getValue();
            if (value) {
                console.log(value)
            }
        }
    };

    updateFormSchema = (e) => {
        e.preventDefault();
        this.setState({
            formSchema: transform(JSON.parse(this.state.schema))
        });
    };

    updateSchema = (e) => {
        this.setState({
            schema: e.target.value
        })
    };

    render() {
        return (
            <div className="container">
                <h2>TComb with schema</h2>
                <form onSubmit={(e) => this.updateFormSchema(e)}>
                    <div className="form-group">
                        <textarea className="form-control" value={this.state.schema} onChange={(e) => this.updateSchema(e)}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Update schema</button>
                    </div>
                </form>

                <div className="col-sm-12 alert-danger">
                    {this.state.validationErrors.map(error => (
                        <div className="col-sm-12">{error.message}</div>
                    ))}
                </div>

                <form onSubmit={this.onSubmit}>
                    <t.form.Form ref="form" type={this.state.formSchema}/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        )
    }

}