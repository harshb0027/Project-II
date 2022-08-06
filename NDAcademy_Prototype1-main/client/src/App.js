/*
*AUTHORS: Daniel Gribnov
*PURPOSE:
*VERSION:1.0
*DATE:
*/
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import footer from './components/NavMenu/FooterNavMenu';
import { Layout } from './components/NavMenu/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
      
    );
  }
}
