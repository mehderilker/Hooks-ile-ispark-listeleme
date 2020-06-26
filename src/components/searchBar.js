import React from 'react';
import {TextInput} from 'react-native';

const SearchBar = ({placeHolder,value,onChange}) => {
    return(
        <TextInput
            style={{height:50,
            borderWidth:1,
            borderColor:'blue',
            paddingLeft:10}}
            placeholder = {placeHolder}
            value= {value}
            onChangeText={onChange}
        />
    )
};

export {SearchBar}
