import React from 'react';
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ListCard= ({onPress,item, text,imageLeftSource}) => {
    const {cardWrapper,textStyle} = styles
    return(
            <TouchableOpacity style={cardWrapper} key={item} onPress={onPress}>
                <View style={{paddingLeft:5}}>
                    <Ionicons name = {imageLeftSource} size={25} color='blue'/>
                </View>
                <View>
                    <Text style={textStyle} > {text}</Text>
                </View>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        height:50,
        marginTop:4,
        borderRadius:7,
        backgroundColor:'#ffffff',
        elevation:1,
        shadowColor:'#737373',
        shadowOffset:{width:0,height: 2},
        shadowOpacity:0.3
    },
    textStyle:{
        paddingLeft:10,
        textAlign:'left',
        color:'#000000',
        fontSize:13
    }
});

export {ListCard}
