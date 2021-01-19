import React, { FC, SyntheticEvent, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');

const Chat: FC = () => {
  const [state, setState] = useState({message: '', name: ''});
  const [chat, setChat] = useState([]);

  const onTextChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = (e: React.DOMAttributes<HTMLFormElement>) => {
    e.pre
  }

  const renderChat = () => {
    return chat.map(({name, message}, index) => (
      <div key={index}>
        <h3>{name}: <span>{message}</span></h3>
      </div>
    ))
  }

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <label>Name:</label>
          <input name="name" onChange={e => onTextChange(e)} value={state.name} />
        </div>
        <div className="text-field">
          <label>Name:</label>
          <input name="name" onChange={e => onTextChange(e)} value={state.message} />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  )
}

export default Chat;
