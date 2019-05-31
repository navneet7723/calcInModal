import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Keyboard } from 'react-native';
import Keys from "./KeyPad.js";
import Store from "./Store.js";
import {observer} from "mobx-react";

@observer class App extends React.Component {

  addToInput = (value) =>{
    Store.numPress(value);
  }
  deleteFromInput = () => {
    Store.delPress();
  }
  addDot = () => {
    Store.dotPress();
  }

  onFocusText = (id) =>{
    Keyboard.dismiss();
    Store.id = id;
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={[styles.row, styles.centerAll]}>
          <View>
            <Text>PA</Text>
            <TextInput
              onFocus = {() => this.onFocusText(0)}
              style = {styles.textBox}
              value={Store.inputs[0]}
              />

            <Text>Qmax</Text>
            <TextInput
              onFocus = {() => this.onFocusText(1)}
              style = {styles.textBox}
              value={Store.inputs[1]}/>

            <Text>MA</Text>
            <TextInput
              onFocus = {() => this.onFocusText(2)}
              style = {styles.textBox}
              value={Store.inputs[2]}/>

            <Text>0.2 Qmax</Text>
            <TextInput
              onFocus = {() => this.onFocusText(3)}
              style = {styles.textBox}
              value={Store.inputs[3]}/>

          </View>

          <View>
            <Keys
              onValueChange = {(item) => this.addToInput(item)}
              onBackSpace = {() => this.deleteFromInput()}
              onDotPress = {() => this.addDot()}
              />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row:{
    flexDirection:"row"
  },
  centerAll:{
    alignItems: "center",
    justifyContent: "center"
  },
  textBox:{
    padding: 8,
    color: 'black',
    borderWidth: 3,
    borderRadius: 2,
    width: 100,
    height: 40,
    borderBottomColor: 'white',
  },
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
