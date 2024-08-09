import React from 'react';
import { ImageBackground, View, ViewStyle } from 'react-native';
import styles from './style';

interface Props {
    children: React.ReactNode;
}

const CommonBackground = ({ children }: Props) => {
    return (
        <ImageBackground
            source={require('../../Assets/images/background.jpg')}
            style={styles.background}
        >
            <View >
                {children}
            </View>
        </ImageBackground>
    );
};

export default CommonBackground;
