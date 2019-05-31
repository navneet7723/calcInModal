import React from 'react';
import {Text, View } from 'react-native';
import {observable, action} from 'mobx';

class Store {
  @observable id = 0;
  @observable inputs = ['','','',''];

  @action numPress(num){
    if(parseInt(this.inputs[this.id]) === 0 && !this.inputs[this.id].includes("."))
    {
      if(num === 0){
        this.inputs[this.id] += "";
      }
      else{
        this.inputs[this.id] = num.toString();
      }

    }
    else {
      this.inputs[this.id] += num;
    }
  }

  @action delPress(){
    var inp = this.inputs[this.id];
    this.inputs[this.id] = inp.substr(0, this.inputs[this.id].length-1);
  }
  @action dotPress(){
    if(this.inputs[this.id].includes("."))
      this.inputs[this.id] += "";
    else {
      if (this.inputs[this.id] === "")
        this.inputs[this.id] += "0";

      this.inputs[this.id] += ".";
    }
  }
}

export default new Store();
