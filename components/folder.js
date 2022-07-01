import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-web';
import { Dimensions as RNDimensions } from 'react-native';


const folder = {uri:'https://www.resimupload.org/images/2022/07/01/folder.png'};


export default function Folder({style,name}) {
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
        container: {
            flex: 1,
            flexDirection:'column-reverse',
            alignItems: 'center',
            justifyContent: 'center',
          },
          image: {
            flex: 1,
            justifyContent: "center",
            height:75/Dimensions.scale,
            width:75/Dimensions.scale,
          },
          text:{
            alignSelf:'flex-start',
            color:'white',
            fontWeight:475/Dimensions.scale,
            marginLeft:5/Dimensions.scale,
            marginTop:80/Dimensions.scale,
            fontSize:15/Dimensions.scale,
          }
    });

    return (
            <View style={[styles.container,style]}>
            <View style={{flexDirection:'row-reverse',justifyContent:'flex-start',flex:1}}>
                <ImageBackground source={folder} style={styles.image}>
                    <TextInput 
                        style={[style,styles.text]}
                        editable={false} 
                        selectTextOnFocus={false}
                        value={name}
                    />
                </ImageBackground>
                </View>
            </View>
        );
}
