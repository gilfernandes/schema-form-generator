import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import Links from '../api/links';
import {readSchema} from "./schema/SchemaReader";
import {FieldFactory} from "./schema/FieldFactory";

class FormRenderer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    componentDidMount() {
        this.setState({
            schema: readSchema()
        });
    }

    renderProperties = () => {
        if (this.state.schema) {
            const formElements = Object.entries(this.state.schema.properties).map(element => {
                return (
                    <FieldFactory field={element[1]} />
                );
            });
            return (
                <div>
                    {formElements}
                </div>
            )
        }
    };

    render() {
        return (
            <form>
                <h3 className="title">Form Renderer</h3>
                {this.renderProperties()}
            </form>
        )
    }

    makeLink(link) {
        return (
            <li key={link._id}>
                <a href={link.url} target="_blank">{link.title}</a>
            </li>
        );
    }
}

export default FormRenderer = withTracker(() => {
    return {
        links: Links.find().fetch(),
    };
})(FormRenderer);
