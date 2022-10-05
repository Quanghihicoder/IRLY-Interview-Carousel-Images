import React, { useState, useRef } from 'react';
import {
    Text,
    View,
    FlatList,
    Animated,
} from 'react-native';

import { TouchableOpacity } from 'react-native';

const cards = [
    { id: 0, imgSrc: require("../assets/blue.png") },
    { id: 1, imgSrc: require("../assets/pink.png") },
    { id: 2, imgSrc: require("../assets/yellow.png") },
]

const Cards = () => {
    const [currentIndex, setCurrentIndex] = useState(1)

    const opacity = useRef(new Animated.Value(1))

    const animate = () => {
        opacity.current = new Animated.Value(0)

        Animated.timing(opacity.current, {
            toValue: new Animated.Value(1),
            duration: 1000,
            useNativeDriver: false,
        }).start()
    }

    const sizeWSide = opacity.current.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 170]
    })

    const sizeHSide = opacity.current.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200]
    })

    const sizeWMid = opacity.current.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 207]
    })

    const sizeHMid = opacity.current.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 262]
    })

    const setIndexNext = () => {
        animate()
        let temp = cards[0]
        cards.splice(0, 1)
        cards.splice(2, 0, temp)
        if (currentIndex == 2) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }
    const setIndexBack = () => {
        animate()
        let temp = cards[2]
        cards.splice(2, 1)
        cards.splice(0, 0, temp)
        if (currentIndex == 0) {
            setCurrentIndex(2)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const renderCards = ({ index, item }) => {
        return (
            <View>
                {index == 0 && <Animated.Image source={item.imgSrc}
                    style={{
                        transform: [{ rotate: "-8deg" }],
                        marginTop: 50,
                        marginRight: 20,
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: "rgba(111, 14, 236, 0.31)",
                        opacity: opacity.current,
                        width: sizeWSide,
                        height: sizeHSide,
                    }}

                />
                }

                {index == 1 && <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>

                    <TouchableOpacity
                        style={{
                            marginRight: 20,
                        }}
                        onPress={setIndexNext}
                    >
                        <Text
                            style={{
                                fontSize: 70,
                                color: "rgba(70, 67, 210, 1)"

                            }}
                        >{'<'}</Text>
                    </TouchableOpacity>

                    <Animated.Image
                        source={item.imgSrc}
                        style={{
                            borderRadius: 10,
                            borderWidth: 3,
                            borderColor: "rgba(111, 14, 236, 0.31)",
                            opacity: opacity.current,
                            width: sizeWMid,
                            height: sizeHMid,
                        }}

                    />

                    <TouchableOpacity
                        style={{
                            marginLeft: 20,
                        }}
                        onPress={setIndexBack}
                    >
                        <Text
                            style={{
                                fontSize: 70,
                                color: "rgba(70, 67, 210, 1)"
                            }}
                        >{'>'}</Text>
                    </TouchableOpacity>
                </View>}
                {index == 2 && <Animated.Image source={item.imgSrc}
                    style={{
                        transform: [{ rotate: "8deg" }],
                        marginTop: 50,
                        marginLeft: 20,
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: "rgba(111, 14, 236, 0.31)",
                        opacity: opacity.current,
                        width: sizeWSide,
                        height: sizeHSide,
                    }}

                />}
            </View>
        )
    }


    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <FlatList
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
                data={cards}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderCards}
                keyExtractor={item => item.id}
            />

        </View>
    );
};

export default Cards;

