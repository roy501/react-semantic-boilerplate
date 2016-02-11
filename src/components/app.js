import React, { Component } from 'react';
import Sidebar from './side_bar';
// import SearchBar from '../containers/search_bar';
// import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
		<h1>Hello From React</h1>
		<Sidebar />
      </div>
    );
  }
}
