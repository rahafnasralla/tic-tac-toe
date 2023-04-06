import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Svg, Path } from "react-native-svg";
import Level from './Levels';

import {
    useFonts,
    Roboto_400Regular
} from "@expo-google-fonts/dev";

function Start({ navigation }) {

    let [fontsLoaded] = useFonts({
        'Roboto': Roboto_400Regular,
    });

    return (
        <View style={stylesheet.style_startscreen}>
            <View style={[stylesheet.style_Tic_Tac_Toe, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_Tic_Tac_Toe, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                    Tic
                    Tac
                    Toe
                </Text>
            </View>
            <View style={stylesheet.style_Group_45}>
                <View style={stylesheet.style_X}>
                    <View style={stylesheet.style_Rectangle_23}>
                    </View>
                    <View style={stylesheet.style_Rectangle_24}>
                    </View>
                </View>
                <View style={stylesheet.style_o}>
                    <View style={stylesheet.style_Ellipse_4}>
                    </View>
                    <View style={stylesheet.style_Ellipse_5}>
                    </View>
                </View>
            </View>
            <View style={stylesheet.style_Group_46}>
                <View style={stylesheet.style_Rectangle_60}>
                </View>
                <View style={[stylesheet.style_Let_s_play, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                    <Button
                        title=" Let’s play"
                        color={'black'}
                        onPress={() => navigation.navigate('One_OR_Two')}
                    />
                </View>
            </View>
        </View>
    )
}

const stylesheet = StyleSheet.create({
    style_startscreen: {
        height: 844,

        backgroundColor: "rgba(255, 255, 255, 1)",

    },
    style_Tic_Tac_Toe: {
        width: 98,
        height: 200,
        left: 157,
        right: "auto",
        top: 114,
        bottom: "auto",
        fontWeight: 700,
        textDecorationLine: "none",
        fontSize: 48,
        color: "rgb(1,1,1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
    },
    style_Group_45: {
        position: "absolute",
        width: 300,
        height: 250,
        transform: [
            { translateX: 80 },
            { translateY: 365 },
            { rotate: "0deg" },
        ],
        backgroundColor: "rgba(0,0,0,0)",
    },
    style_X: {
        position: "absolute",
        width: 80,
        height: 80,

        backgroundColor: "rgba(0,0,0,0)",
    },
    style_Rectangle_23: {
        position: "absolute",
        width: 20,
        height: 90,
        borderRadius: 0,
        opacity: 1,
        left: 60.150146484375,
        right: "auto",
        top: -1.0260009765625,
        bottom: "auto",
        transform: [
            { translateX: 0 },
            { translateY: 0 },
            { rotate: "36.32559860636006deg" },
        ],
        backgroundColor: "rgba(255, 0, 0, 1)",
    },
    style_Rectangle_24: {
        position: "absolute",
        width: 20,
        height: 90.3527603149414,
        borderRadius: 0,
        opacity: 1,
        left: 7.3302001953125,
        right: "auto",
        top: 2.96337890625,
        bottom: "auto",
        transform: [
            { translateX: 50 },
            { translateY: 0 },
            { rotate: "-32.32763655577397deg" },
        ],
        backgroundColor: "rgba(255, 0, 0, 1)",
    },
    style_o: {
        position: "absolute",
        width: 82,
        height: 76.6229476928711,
        transform: [
            { translateX: 109 },
            { translateY: 15 },
            { rotate: "0deg" },
        ],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)",
    },
    style_Ellipse_4: {
        position: "absolute",
        width: 82,
        height: 76.6229476928711,
        borderRadius: 1000,
        backgroundColor: "rgba(0, 117, 255, 1)",
        left: 0,
        right: "auto",
        top: 0,
        bottom: "auto",
        transform: [
            { translateX: 0 },
            { translateY: 0 },
            { rotate: "0deg" },
        ],
    },
    style_Ellipse_5: {
        position: "absolute",
        width: 64.4285659790039,
        height: 62.43351745605469,
        borderRadius: 1000,
        backgroundColor: "rgba(255, 255, 255, 1)",
        left: 8.78570556640625,
        right: "auto",
        top: 7.56781005859375,
        bottom: "auto",
        transform: [
            { translateX: 0 },
            { translateY: 0 },
            { rotate: "0deg" },
        ],
    },
    style_Group_46: {
        position: "absolute",
        width: 204,
        height: 49,
        transform: [
            { translateX: 84 },
            { translateY: 541 },
            { rotate: "0deg" },
        ],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)",
    },
    style_Rectangle_60: {
        position: "absolute",
        width: 204,
        height: 49,
        borderRadius: 20,
        opacity: 1,
        backgroundColor: "rgba(255, 10, 10,0.4)",
    },
    style_Let_s_play: {
        position: "absolute",
        width: 100,
        height: 50,
        fontWeight: 400,
        alignSelf: 'center',
        textDecorationLine: "none",
        fontSize: 16,
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
    },
});
export default Start;
