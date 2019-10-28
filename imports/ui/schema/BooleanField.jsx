import React from 'react';

export const BooleanField = ({field}) => {
    return (
        <div className="form-group row">
            <label for={field.$id} className="col-sm-3 control-label">{field.title}</label>
            <div className="col-sm-9">
                <input type="checkbox" name={field.title} id={field.$id} value="true" title={field.title}/>
            </div>
        </div>
    );
};
