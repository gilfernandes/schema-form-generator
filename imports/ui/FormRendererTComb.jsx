import React, {Component} from 'react';
import t from 'tcomb-form'

const Phone = t.struct({
    areaCode: t.String,
    prefix: t.String,
    phone: t.String
});

const Person = t.struct({
    name: t.String,
    surname: t.String,
    phones: t.list(Phone)
});

const FormSchema = t.struct({
    name: t.String,         // a required string
    age: t.maybe(t.Number), // an optional number
    rememberMe: t.Boolean,   // a boolean
    tags: t.list(t.String), // a list of strings
    friends: t.list(Person)
});

export class FormRendererTComb extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        let validate = this.refs.form.validate();
        const value = this.refs.form.getValue();
        if (value) {
            console.log(value)
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <t.form.Form ref="form" type={FormSchema}/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        )
    }

}