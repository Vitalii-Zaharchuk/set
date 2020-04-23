import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store  from './Redux/state';
import { addPostActionCreator, updateNewPostTextActionCreator} from './Redux/profile-reducer'
import {addDialogActionCreator, updateNewDialogTextActionCreator} from './Redux/messages-reducer' 

export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App 
      state={state}
      dispatch={store.dispatch.bind(store)}
      addPostActionCreator={addPostActionCreator}
      updateNewPostTextActionCreato={updateNewPostTextActionCreator}
      addDialogActionCreator={addDialogActionCreator}
      updateNewDialogTextActionCreator={updateNewDialogTextActionCreator}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();




























