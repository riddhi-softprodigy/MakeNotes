import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AppText from '../../Components/AppText/AppText';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/login';
import AppButton from '../../Components/AppButton';


const Home = () => {
    const dispatch = useDispatch<any>();
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <AppButton title="Logout" onPress={() => {
                console.log("pressed");
                dispatch(logoutUser({ showToast: true }));
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
    preview: { flex: 1, width: '100%' },
    predictions: { position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10 },
    predictionText: { color: 'white' },
});

export default Home;
