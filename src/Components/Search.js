/** @jsx jsx */
import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jsx, css, ClassNames } from '@emotion/core';

import { addSearch } from '../redux/actions';
import { getSearch } from '../redux/selectors';

export default function SearchUser(){
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const [valid, setValid] = useState("valid");
    const user = useSelector(getSearch);
    const match = useRouteMatch();
    const name = user.userReducer.search

    return(
        <div css={css`
            text-align: center;
            margin-top: 20%;
        `}>
            <h1 css={css`color: #2a475e;`} >Yasaw</h1>
            <form>
                <p                 css={css`
                    color: #c7d5e0;   `}>Enter a valid steamID64</p>
                
                <input className={valid} type="text" value={value} onChange={event => setValue(event.target.value)}></input>
                <Link css={css`display: block;`}to={value?`/user/${value}`:"/"}><button type="submit"onClick={() => dispatch(addSearch(value)) }>Search</button></Link>
            </form>
            <p><a href="https://steamid.io/">Find steamID here</a></p>
        </div>
    );

}