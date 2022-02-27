import React, { Component, useState } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

class MessageApp extends Component {
  state = {
    messages: []
  };

  addMessage = content => {
    const newMessage = {
      id: Date.now() + '',
      content
    };

    this.setState({
      messages: [
        ...this.state.messages,
        newMessage
      ]
    });
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="container">
        <div className="panel">
          <div className="panel-heading">
            <h1 style={{ textAlign: 'center' }}>留言板</h1>
          </div>
          <div className="panel-body">
            <MessageList messages={messages} />
          </div>
          <div className="panel-footer">
            <MessageForm addMessage={this.addMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default MessageApp;
