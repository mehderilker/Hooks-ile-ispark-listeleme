import React from 'react';
import {Modal,View, StyleSheet,ActivityIndicator} from 'react-native';

const Loader = ({loading}) => {
    const {modalBackground, activityIndicatorWrapper} = styles;

    return (
        <Modal
        transparent={false}
        animationType='none'
        visible={loading}
        >
            <View style={modalBackground}>
                <View style={{...activityIndicatorWrapper}}>
                    <ActivityIndicator animating={loading}/>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalBackground:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'#d6d6d6'
    },
    activityIndicatorWrapper:{
        backgroundColor:'#ffffff',
        height:100,
        width:100,
        borderRadius:10,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export {Loader}
