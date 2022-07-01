// <Image source={textIcon} style={styles.image2}/>
/*
image2: {
    height:27/Dimensions.scale,
    width:617/Dimensions.scale,
    alignSelf:'flex-start'
}
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-web';
import { Dimensions as RNDimensions } from 'react-native';
import DragAndDrop from './dragAndDrop';

const textIcon = {uri:'https://www.resimupload.org/images/2022/07/01/textIcon.png'};


export default function TextApp({style,name,items}) {
    const [Dimensions, setDimensions] = React.useState({width:RNDimensions.get("window").width,height:RNDimensions.get("window").height,scale:RNDimensions.get("window").scale});
    React.useEffect(() => {
        const subscription = RNDimensions.addEventListener(
        "change",
        ({ window, screen }) => {
            setDimensions({
                width: window.width,
                heigth: window.height,
                scale: window.scale,
            });
        }
        );
        return () => subscription?.remove();
    });
    const styles = StyleSheet.create({
        image: {
            height:27/Dimensions.scale,
            width:617/Dimensions.scale,
            alignSelf:'flex-start'
        },
        text:{
            color:'white',
            marginLeft:30/Dimensions.scale,
            marginTop:3/Dimensions.scale,
            fontSize:14/Dimensions.scale
        }
    });
    //<Image source={textIcon} style={styles.image2}/>
    return (
            <ImageBackground source={textIcon} style={styles.image}>
                <TextInput 
                    style={styles.text}
                    editable={false} 
                    selectTextOnFocus={false}
                    value={name+'.txt'}
                />
            </ImageBackground>
    );
}
