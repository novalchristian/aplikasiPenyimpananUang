import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 2000);
    });
    return(
        <View style={styles.container}>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
})
