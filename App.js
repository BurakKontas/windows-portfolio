import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import { Dimensions as RNDimensions } from 'react-native';
import Folder from './components/folder';
import FolderOpened from './components/folderOpened';
import { Notebook } from './components/notebook';
import { Link } from './components/link';

var dt = new Date();

export default function App() {
    const [Dimensions, setDimensions] = React.useState({width:RNDimensions.get("window").width,height:RNDimensions.get("window").height,scale:RNDimensions.get("window").scale});
    const [openFolder,setOpenFolder] = React.useState(false)
    const [openAboutMe, setOpenAboutMe] = React.useState(false)
    const [openReadMe, setOpenReadMe] = React.useState(false)
    const [openMyWorks, setOpenMyWorks] = React.useState(false)
    const [openMySkills, setOpenMySkills] = React.useState(false)
    const [openMyLinks, setOpenMyLinks] = React.useState(false)
    const [openContactMe, setOpenContactMe] = React.useState(false)

    const data = [
      {
        name:'README',
        content:[
          'When switching to other text files, you must close the open file.',
          'Also you can move folder and text files by holding.',
          'Close files by pressing X button.',
          ' ',
          'This folder contains information about developer.',
          'Feel free to contact with him.',
          'You can find contact info in Contact With.txt'
        ],
        open: () => {setOpenReadMe(true)},
        close: () => {setOpenReadMe(false)},
        opened:openReadMe,
      },
      {
          name:'About Developer',
          content:[
            'Developers name is "Arda Burak Kontaş"',
            'He is living in Turkey',
            'He born in 2002 and currently ' + String(dt.getFullYear() - 2002) + ' years old.',
            'He is currently studying in Trakya University.',
            'He is '  + String(dt.getFullYear() - 2019) + '. Grade.',
            <Text>He does coding, solving problems on <Link text={'LeetCode'} link={'https://leetcode.com/BurakKontas/'} /> and playing video games in his spare time.</Text>,
            <Text>You can check his some of projects in his <Link text={'GitHub'} link={'https://github.com/BurakKontas/'}/> profile.</Text>
          ],
          open: () => {setOpenAboutMe(true)},
          close: () => {setOpenAboutMe(false)},
          opened:openAboutMe,
      },
      {
          name:'Works',
          content:[
            <Text>His first React Native App that he developed for class subject <Link text={'react-muhasebe'} link={'https://github.com/BurakKontas/react-muhasebe'} />.</Text>,
            'Its some kind of accounting website for greengrocers.',
            <Text>Website Link: <Link text={'https://muhasebe-trakya.web.app/'} link={'https://muhasebe-trakya.web.app/'} /></Text>,
            'Its using Firebase features.',
            'Test Email: test123@gmail.com',
            'Password: test123',
            ' ',
            'After that he started to work on some kind of blog website like twitter,',
            'People sharing their blogs instead of tweets.',
            <Text>Its currently not done just a template <Link text={'react-blog'} link={'https://github.com/BurakKontas/react-blog'} /></Text>,
            <Text>Website Link: <Link text={'https://blogging-0.web.app/'} link={'https://blogging-0.web.app/'} /></Text>,
            ' ',
            <Text>This Website: <Link text={'windows-portfolio'} link={'https://github.com/BurakKontas/windows-portfolio'} /></Text>,
            
          ],
          open: () => {setOpenMyWorks(true)},
          close: () => {setOpenMyWorks(false)},
          opened:openMyWorks,
      },
      {
          name:'Skills',
          content:[
            'C 7/10',
            'JavaScript 8/10',
            'Python 8/10',
            'Java 4/10',
            'React Navite 6/10',
            'Flutter 4/10',
            'HTML CSS 5/10',
            'TASM 4/10',
            'Algorithms and Data Structures 6.5/10 (Still developing)'
            
          ],
          open: () => {setOpenMySkills(true)},
          close: () => {setOpenMySkills(false)},
          opened:openMySkills,
      },
      {
        name:'Links',
        content:[
          <Text>GitHub: <Link text={'https://github.com/BurakKontas'} link={'https://github.com/BurakKontas'}/></Text>,
          <Text>LeetCode: <Link text={'https://leetcode.com/BurakKontas/'} link={'https://leetcode.com/BurakKontas/'} /></Text>
        ],
        open: () => {setOpenMyLinks(true)},
        close: () => {setOpenMyLinks(false)},
        opened:openMyLinks,
      },
      {
          name:'Contact With',
          content:[
            'Discord = Heraeth 🕊#5514',
            'Discord ID = 332964081436721154',
            'Mail = kontas2233@hotmail.com',
          ],
          open: () => {setOpenContactMe(true)},
          close: () => {setOpenContactMe(false)},
          opened:openContactMe,
      },
  ]

    const bgi = {uri:'https://www.resimupload.org/images/2022/06/30/windows-10-gradient-background-minimal-aesthetic-5k-5120x2880-2218.png'};

    // Dimensions listener
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
    return (
    <ImageBackground  source={bgi} resizeMode="cover" style={[styles.image,styles.container]} maxScale = {1}>
      <ScrollView
      style={{width:Dimensions.width,height:Dimensions.height}}
      scrollEnabled={false}
      nestedScrollEnabled={false}>
        <StatusBar style="auto" />
        <View style={{position:'absolute',top:0,left:0,margin:(Dimensions.height/46.85)/Dimensions.scale}}>
          <TouchableOpacity
          style={styles.folderTouchable}
          onPress = {() => {
              setOpenFolder(true)
          }}
          disabled= {openFolder}
          >
              <Folder style={styles.folder} name={'Open Me'}/>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',flex:1,marginTop:Dimensions.height/5.5028}}>
          {(openFolder ? <FolderOpened data = {data} close={() => {setOpenFolder(false)}}/> : null)}
        </View>
          {data.map(({name,content,close,opened}) => {
            return(
              <View style={{position:'absolute',alignSelf:'center',marginTop:150/Dimensions.scale}}>
                {(opened) ? <Notebook close={close} content={content} name={name}/> : null}
              </View>
            )
          })}
      </ScrollView>
    </ImageBackground>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignSelf:'center',
    width:'auto'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  folder: {
    position:'absolute',
  },
});
