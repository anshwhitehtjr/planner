import React, { useState } from 'react';
import appContext from './appContext';

const AppState = props => {
    const [isAlert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 5000);
    };

    return (
        <appContext.Provider value={ { isAlert, setAlert, showAlert } }>
            { props.children }
        </appContext.Provider>
    );
};

export default AppState;
