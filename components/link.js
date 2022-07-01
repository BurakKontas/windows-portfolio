import React, { useEffect } from 'react';
import { Text,TouchableOpacity, Linking } from 'react-native';
import { Dimensions as RNDimensions } from 'react-native';

export const Link = ({link,text}) => {
    const [Dimensions, setDimensions] = React.useState({width:RNDimensions.get("window").width,height:RNDimensions.get("window").height,scale:RNDimensions.get("window").scale});
    useEffect(() => {
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
    return(
        <TouchableOpacity onPress={() => {(Linking.canOpenURL(link) ? Linking.openURL(link) : null)}}>
            <Text style={{color:'blue',fontSize:14/Dimensions.scale}}>{text}</Text>
        </TouchableOpacity>
    )
}