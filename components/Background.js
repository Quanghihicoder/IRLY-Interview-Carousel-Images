import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import Cards from './Cards';


const Background = () => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} locations={[0.1, 0.45, 0.5, 0.75]} colors={['rgba(241, 13, 13, 0.32)', 'rgba(15, 80, 245, 0.33)', 'rgba(246, 16, 155, 0.36)', 'rgba(111, 14, 236, 0.31)']}
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            <Cards />
        </LinearGradient>
    );
};


export default Background;
