import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateNewPostText, addDialog, updateNewDialogText} from './Redux/state'
import state from './Redux/state';

export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App 
      updateNewDialogText={updateNewDialogText}
      updateNewPostText={updateNewPostText}
      addDialog={addDialog}
      state={state}
      addPost={addPost}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );

}



serviceWorker.unregister();