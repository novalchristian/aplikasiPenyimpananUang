import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Pages
import {Splash, Home} from '../pages';
import Drawer from './drawer.router';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} 
                options={{
                    headerShown: false,
                }}
            / >
            <Stack.Screen name='Main' component={Drawer} />
        </Stack.Navigator>
    )
}

export default Router;