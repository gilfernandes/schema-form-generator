import React from 'react';

export const NumberField = ({field}) => {
    return (
        <div className="form-group row">
            <label for={field.$id} className="col-sm-3 control-label">{field.title}</label>
            <div className="col-sm-9">
                <input type="number" name={field.title} id={field.$id} title={field.title} className="form-control"
                       step={field.type === 'number' ? '.01' : '1' }/>
            </div>
        </div>
    );
};
