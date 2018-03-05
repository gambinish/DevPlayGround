import React, { Component } from 'react';
import * as C from './Components';
import { Widget, addResponseMessage } from 'react-chat-widget';
import axios from 'axios';
import {data} from './data';
import {chatUrl} from '../config';




class Home extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
    this.handleNewUserMessage=this.handleNewUserMessage.bind(this);
  }

  handleNewUserMessage(newMessage){
    console.log(newMessage)
    axios.post(chatUrl,{msg:newMessage})
    .then((msg) => {
      addResponseMessage(msg.data);
    })

  }


  render(){
    return (
      <div>
        <C.Header />
        <Widget
            handleNewUserMessage={this.handleNewUserMessage}
            title="Welcome to API PlayGround!"
            subtitle="this chatbot is here to help you"
          />
        <C.RenderDemos src={data}/>
      </div>
    );
  }
} 


export default Home;
