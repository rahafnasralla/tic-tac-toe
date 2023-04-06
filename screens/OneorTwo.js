import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Svg, Path } from "react-native-svg";


//const windowWidth = Dimensions.get('window').width;

function One_OR_Two({ navigation }) {


    return (
        <View style={stylesheet.style_choosescreen}>
            <View style={[stylesheet.style_SINGLEPLAYER, { marginTop: 280 }]}>
                <View style={[stylesheet.style_Rectangle_2, { backgroundColor: "rgba(30, 106, 255, 1)", padding: 25 }]}>
                    <Button
                        title=" One Player"
                        color={'white'}
                        textAlignVertical={50}
                        onPress={() => navigation.navigate('Levels')}


                    />
                </View>
            </View>
            <View style={stylesheet.style_SINGLEPLAYER}>
                <View style={[stylesheet.style_Rectangle_2, { backgroundColor: "rgba(255, 18, 18, 1)", padding: 25 }]}>
                    <Button
                        title="Two Players"
                        color={'white'}
                        textAlignVertical={50}
                        onPress={() => navigation.navigate('TwoPlayers')}

                    />
                </View>
            </View>

     
        </View>
    )
}

const stylesheet = StyleSheet.create({
    style_choosescreen: {
        height: 852,
        borderRadius: 20,
        marginTop: -120,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    style_chooseGame: {
        position: "absolute",
        width: 215,
        height: 49,
        transform: [
            { translateX: 103 },
            { translateY: 167 },
            { rotate: "0deg" },
        ],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)",
    },
    style_Line: {
        position: "absolute",
        width: 170,
        height: 9.,
        borderRadius: 20,
        opacity: 1,
        top: 39.39208984375,

        backgroundColor: "rgba(255, 18, 18, 1)",
    },
    style_Choose_Level: {
        width: 215,
        alignSelf: 'center',
        fontWeight: 400,
        textDecorationLine: "none",
        fontSize: 24,
        color: "rgba(0, 0, 0, 1)",
        textAlignVertical: "top",
        letterSpacing: 0.1,
    },
    style_SINGLEPLAYER: {
        width: 160,
        height: 100,
        alignSelf: 'center',
        marginBottom: 80,
        backgroundColor: "rgba(0,0,0,0)",
    },
    style_Rectangle_2: {
        width: 160,
        height: 100,
        borderRadius: 20,
        opacity: 1,

    },

    style_CHALLENGES: {
        position: "absolute",
        width: 160,
        height: 100,
        transform: [
            { translateX: 114 },
            { translateY: 413 },
            { rotate: "0deg" },
        ],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)",
    },


});
export default One_OR_Two;

