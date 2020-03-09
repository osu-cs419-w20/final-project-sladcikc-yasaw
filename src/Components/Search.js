import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../redux/actions';
import { getSearch } from '../redux/selectors'

function HandleChange(value){
    const dispatch = useDispatch();
    const thing = useSelector(getSearch)
   return  thing;
}

export default function SearchUser(){
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const user = useSelector(getSearch);
    return(
        <div>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}></input>
            <button onClick={() => dispatch(addSearch(value))}>Search</button>
        </div>
    )
}