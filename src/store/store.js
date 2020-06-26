import {createContext} from 'react'

export const INITIAL_STATE ={
    mapData:[]
};

const Context = createContext(INITIAL_STATE);
export default Context
