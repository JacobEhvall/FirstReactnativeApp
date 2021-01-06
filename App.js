import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';

const image = require("./assets/icon.png")

export default function App() {
  return (
    <View style= {{width:"100%", height: "100%"}}>

    <View style = {{ width: "100%", height:50, backgroundColor:"darkblue"}}/>
    <View style = {{ width: "100%", height:150, backgroundColor:"lightblue"}}>
        
      <Text style = {{color: "black", fontWeight: "bold", fontSize: 40,}}>Hello World!</Text>
      <Text style = {{color: "black", fontSize: 20 }}>First React Native App</Text>
      <Text>{"This is a paragrah explaining what  this app is all about. As you can see there are already many components including text, images and buttons" }</Text>
      </View>
      <Text style = {{color: "black", fontWeight: "bold", fontSize: 20 }}>{"\n What would you get out of this course?"}</Text>
      <TextInput backgroundColor="lightgray" width = "86%" height= "20%%" placeholder="Enter some text..." multiline = {true}></TextInput>
    <Text style = {{color: "black", fontWeight: "bold", fontSize: 20 }}>{"\n \n \n An emoji decribing how you are feeling about this course! \n"}</Text>
    <Image source={("./assets/icon.png")}
    source={image}
    style={{width: 100, height: 100 }} 
    />
    <Button
      title="Submit!!"
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }
});


