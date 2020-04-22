import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './Redux/state';


export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App 
      updateNewDialogText={store.updateNewDialogText.bind(store)}
      updateNewPostText={store.updateNewPostText.bind(store)}
      addDialog={store.addDialog.bind(store)}
      state={state}
      addPost={store.addPost.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();




























