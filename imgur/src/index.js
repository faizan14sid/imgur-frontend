import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';


class Index extends Component {
  render(){
  return (
    <div> 
      <App/>

    </div>
  );
}};
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>
,document.getElementById('root')
);

export default Index;