import React from 'react';
import {BooleanField} from "./BooleanField";
import {NumberField} from "./NumberField";
import {StringField} from "./StringField";
import {ArrayField} from "./ArrayField";

export const FieldFactory = ({field}) => {
    let type = field.type;
    if (type === 'string') {
        return (
            <StringField field={field}/>
        );
    } else if (type === 'boolean') {
        return (
            <BooleanField field={field}/>
        );
    } else if (type === 'object') {
        return (
            <div className="form-group row">
                <label className="col-sm-3 control-label">{field.title}</label>
                <div className="col-sm-9">
                    {
                        Object.entries(field.properties).map(element => {
                            return (
                                <FieldFactory field={element[1]}/>
                            );
                        })}
                </div>
            </div>
        );
    } else if (type === 'integer' || type === 'number') {
        return (
            <NumberField field={field}/>
        );
    } else if (type === 'array') {
        return (
            <ArrayField field={field} />
        )
    } else {
        return (
            <p>Not implemented</p>
        )
    }
};
