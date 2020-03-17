/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';
import { jsx, css, ClassNames } from '@emotion/core';

import UserInfo from './Components/User';
import UserFriends from './Components/Friends';
import SearchUser from './Components/Search';
import { getSearch, getGames } from './redux/selectors';
import Navbar from './Components/Nav';
import UserGames from './Components/Games';
import UserAchieve from './Components/Achieve';
import './App.css';



function App() {
  const pathArray = window.location.pathname.split('/');
  const thing = useSelector(getSearch);
  console.log(thing)
  return( 
    <div >
      <Switch>
        <Route path="/user/friends/:id">
          <Navbar id={pathArray[pathArray.length - 1]} active={"friends"}/>
          <UserFriends id={thing}/>
        </Route>
        <Route path="/user/games/:id">
          <Navbar id={pathArray[pathArray.length - 1]} active={"games"}/>
          <UserGames id={thing}/>
        </Route>
        <Route path="/user/achievements/:id">
          <Navbar id={pathArray[pathArray.length - 1]} active={"achieve"}/>
          <UserAchieve id={thing} games={thing.userReducer.games}/>
        </Route>
        <Route path="/user/:id">
          <Navbar id={pathArray[pathArray.length - 1]} active={"user"}/>
          <UserInfo id={thing}/>
        </Route>
        <Route exact path="/">
          <SearchUser />
        </Route>
      </Switch>
     
    </div>
  )
}
export default App;
