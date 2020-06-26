import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListPark from '../scenes/main/listPark'
import MapPark from '../scenes/main/mapPark'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const RouterComp = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName = 'Listeleme'
            screenOptions ={({route}) => ({
                tabBarIcon:({focused, color , size}) => {
                    let iconName;

                    if(route.name === 'Listeleme'){
                        iconName = focused ? 'ios-list':'ios-list'
                    }else if (route.name === 'Harita'){
                        iconName = focused ? 'ios-map':'ios-map'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                }

            })}

            tabBarOptions = {{
                activeTintColor: 'orange',
                inactiveTintColor : 'gray'
            }}
            >
                <Tab.Screen name="Listeleme" component={ListPark}/>
                <Tab.Screen name="Harita" component={MapPark}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
};

export default RouterComp
