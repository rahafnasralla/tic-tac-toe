import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Svg, Path } from "react-native-svg";

function Levels({ navigation }) {


    return (
        <View style={stylesheet.style_choosescreen}>
            <View style={stylesheet.style_chooseGame}>
                <View style={stylesheet.style_Line}>
                </View>
                <View style={[stylesheet.style_Choose_Level, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                    <Text style={[stylesheet.style_Choose_Level]}>
                        Choose a Level
                    </Text>
                </View>
            </View>
            <View style={[stylesheet.style_SINGLEPLAYER, { marginTop: 260 }]}>
                <View style={[stylesheet.style_Rectangle_2, { backgroundColor: "rgba(30, 106, 255, 1)", padding: 25 }]}>
                    <Button
                        title=" Hard"
                        color={'white'}
                        textAlignVertical={50}
                        onPress={() => navigation.navigate('Level1')}


                    />
                </View>
            </View>
            <View style={stylesheet.style_SINGLEPLAYER}>
                <View style={[stylesheet.style_Rectangle_2, { backgroundColor: "rgba(255, 18, 18, 1)", padding: 25 }]}>
                    <Button
                        title="Medium"
                        color={'white'}
                        textAlignVertical={50}
                        onPress={() => navigation.navigate('Level2')}


                    />
                </View>
            </View>
            <View style={stylesheet.style_SINGLEPLAYER}>
                <View style={[stylesheet.style_Rectangle_2, { backgroundColor: "rgba(255, 111, 7, 1)", padding: 25 }]}>
                    <Button
                        title="Easy"
                        color={'white'}
                        textAlignVertical={50}
                        onPress={() => navigation.navigate('Level3')}


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
        marginBottom: 40,
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
export default Levels;

