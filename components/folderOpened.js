import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { Dimensions as RNDimensions } from 'react-native';
import DragAndDrop from './dragAndDrop';
import TextApp from './textApp';


const folder = {uri:'https://www.resimupload.org/images/2022/07/01/folderOpenedae7ce4a40fd115b4.png'};

export default function FolderOpened({style,close,open,data}) {
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
            height:633/Dimensions.scale,
            width:1125/Dimensions.scale,
          },
          text:{
            alignSelf:'flex-start',
            color:'white',
            fontWeight:475/Dimensions.scale,
            marginLeft:5/Dimensions.scale,
            marginTop:80/Dimensions.scale,
            fontSize:15/Dimensions.scale,
          },
    });

    const content = (
    <ImageBackground source={folder} style={styles.image}>
    <TouchableOpacity style={{position:'absolute',top:0,right:0,height:30,width:50}} onPress={close}/>
        <View style={{width:950/Dimensions.scale,height:485/Dimensions.scale,marginTop:125/Dimensions.scale,marginLeft:168/Dimensions.scale}}>
            {data.map(({name,open}) => {
                return(
                    <TouchableOpacity onPress={open}>
                        <TextApp name={name}/>
                    </TouchableOpacity>
                )
            })}
        </View>
    </ImageBackground>
    )
    return (
            <View style={[styles.container,style]}>
                <DragAndDrop content={content}/>
            </View>
        );
}
