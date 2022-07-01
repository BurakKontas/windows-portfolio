import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-web';
import { Dimensions as RNDimensions } from 'react-native';
import DragAndDrop from './dragAndDrop';

const notebook = {uri:'https://www.resimupload.org/images/2022/07/01/notebookf0c33e8a5b630ac5.png'};


//TODO: Burada close fonksiyonlarını ve contenti alıcaz contenti sayı sınırını bulup bölücez yada array olarak döndürüp sırayla yazıcaz 

export const Notebook = ({name,close,content,style}) => {
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
          height:588/Dimensions.scale,
          width:1136/Dimensions.scale,
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
    const cont = (
      <ImageBackground source={notebook} style={styles.image}>    
        <TouchableOpacity style={{position:'absolute',top:0,right:0,height:30,width:50}} onPress={close}/>       
        <Text style={{position:'absolute',top:0,left:0,marginTop:6/Dimensions.scale,marginLeft:30,fontSize:12/Dimensions.scale}}>{name + '.txt - Notepad'}</Text>
        <ScrollView style={{height:499/Dimensions.scale,width:1135/Dimensions.scale,marginTop:50/Dimensions.scale,paddingHorizontal:5/Dimensions.scale}}>
          {content.map(text => {
            return(<Text style={{fontSize:14/Dimensions.scale}}>{text}</Text>)
          })}
        </ScrollView>
      </ImageBackground>
    )

    return(
      <View style={[styles.container,style]}>
        <DragAndDrop content={cont}/>
      </View>
    )
}