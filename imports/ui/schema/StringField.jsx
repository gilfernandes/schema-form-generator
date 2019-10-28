import React from 'react';

export const StringField = ({field}) => {
    return (
        <div className="form-group row">
            <label for={field.$id} className="col-sm-3 control-label">{field.title}</label>
            <div className="col-sm-9">
                <input type="text" name={field.title} id={field.$id} title={field.title} className="form-control" />
            </div>
        </div>
    );
};