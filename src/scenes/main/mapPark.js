import React,{useContext} from 'react'
import {SafeAreaView, Text} from 'react-native';
import Context from '../../store/store';

const MapPark = () => {
    const {state,dispatch} = useContext(Context);

    return(
        <SafeAreaView>
            <Text>
                {state.mapData[1].Adres}
            </Text>
        </SafeAreaView>

    )
};

export default MapPark
