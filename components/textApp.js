import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-web';
import { Dimensions as RNDimensions } from 'react-native';

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
