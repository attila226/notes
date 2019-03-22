import React from 'react';
import ReactDOM from 'react-dom';
import NoteList from './components/NotesList';

const domContainer = document.querySelector('#root');
ReactDOM.render(
  <NoteList/>, domContainer);