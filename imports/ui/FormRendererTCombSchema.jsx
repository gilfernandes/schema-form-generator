import React, {Component} from 'react';
import t from 'tcomb-form';
import {readSchema} from "./schema/SchemaReader";

var transform = require('tcomb-json-schema');

class NumberComponent extends t.form.Component { // extend the base class
    getTemplate = () => {
        const template = this.props.options.template;
        return (locals) => {
            return (
                <div className="form-group">
                    <label>{locals.label}</label>
                    <input type="number" className="form-control" value={locals.value} onChange={(e) => {
                        locals.value = e.target.value;
                        this.setState({value: parseInt(e.target.value)});
                    }} />
                </div>
            );
        };
    }
}

const formLayout = (locals) => {
    console.log(Object.entries(locals.inputs));
    return (
        <div>
            {Object.entries(locals.inputs).map(inp => {
                const type = locals.inputs[inp[0]].props.type;
                console.log(inp[0], type);
                return (
                    <div className="form-group">{locals.inputs[inp[0]]}</div>
                );
            } )}
        </div>
    );
};

const optionalLayout = (locals) => {
    return (
        <div>
            <p>petLayout</p>
            <div>{locals.inputs.name}</div>
        </div>
    );
};

const options = {
    template: formLayout,
    fields: {
        price: {
            factory: NumberComponent
        }
    }
};

export class FormRendererTCombSchema extends Component {

    constructor(props, context) {
        super(props, context);
        const schema = readSchema();
        this.state = {
            schema: JSON.stringify(schema, null, 2), // pretty print
            formSchema: transform(schema),
            validationErrors: []
        }
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        let validate = this.refs.form.validate();
        if (validate.errors && validate.errors.length > 0) {
            this.setState({
                validationErrors: validate.errors
            })
        } else {
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
                <h2 className="title">TComb with schema</h2>
                <form onSubmit={(e) => this.updateFormSchema(e)}>
                    <div className="form-group">
                        <textarea className="form-control" value={this.state.schema}
                                  onChange={(e) => this.updateSchema(e)} rows={10}/>
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
                    <t.form.Form ref="form" type={this.state.formSchema} options={options}/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        )
    }

}