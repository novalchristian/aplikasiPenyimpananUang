import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home, Profile} from '../pages';


const Tab = createBottomTabNavigator();

const drawer = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
};

export default drawer;