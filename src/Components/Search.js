import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../redux/actions';
import { getSearch } from '../redux/selectors';

function HandleChange(value){
    const dispatch = useDispatch();
    const thing = useSelector(getSearch)
}

export default function SearchUser(){
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const user = useSelector(getSearch);
    const match = useRouteMatch();
    const name = user.userReducer.search
    console.log(user.userReducer.search)
    if(!name){
        return(
            <div>
                <input type="text" value={value} onChange={event => setValue(event.target.value)}></input>
                <button  onClick={() => dispatch(addSearch(value)) }>Search</button>
            </div>
        )
    }
    else{
        return(
        <Redirect push to={`/user/${name}`} />
        );
    }
}