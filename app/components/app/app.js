import React from 'react';
import { Router, Link } from 'react-router';
import MyContentBox from '../contentbox/contentbox';
import contentJSON from './content';

export default class App extends React.Component {
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <MyContentBox data={contentJSON}></MyContentBox>
    );
  }
}