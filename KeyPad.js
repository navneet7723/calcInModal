import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import { Constants } from 'expo';
import Store from "./Store.js";

const numColumns = 3;

const nums = [1,2,3,4,5,6,7,8,9,".",0,"←"];


class Keys extends React.Component{

  constructor(props){
    super(props)
    this.handlePress.bind(this);
  }

  handlePress = (item) => {
    if(item !== "." && isNaN(item)){
      this.props.onBackSpace()
    }
    else {
      if(item === "."){
        this.props.onDotPress()
      }
      else {
        this.props.onValueChange(item)
      }
    }
  }


  renderItem = (item) => {
    return (
      <View>
      <TouchableOpacity
        style = {[styles.numButtons, styles.centerAll]}
        onPress = {() => this.handlePress(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
      </View>
    )
  }

  render(){
    return(
      <View style = {{marginTop: 20, width:200, height: 240, backgroundColor:'#fcc'}}>
        <FlatList
          data={nums}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item ,index) => index.toString()}
          numColumns = {numColumns}
          >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row:{
    flexDirection:"row"
  },
  numButtons:{
    margin: 10,
    borderRadius: 4,
    width: 40,
    height: 40,
    elevation: 1,

  },
  centerAll:{
    alignItems: "center",
    justifyContent: "center"
  },
});

export default Keys;
