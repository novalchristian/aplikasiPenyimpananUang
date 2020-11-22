import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeDetail = () => {
    return(
        <View style={styles.container}>
            <Text>Detail Screen</Text>
        </View>
    )
}

export default HomeDetail;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
})
