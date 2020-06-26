import React, {useReducer} from 'react'
import {reducers} from '../reducers/mapReducer';
import Context,{INITIAL_STATE} from './store';

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducers, INITIAL_STATE),
        value = {state, dispatch};

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
};

export default Provider;
