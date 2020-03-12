/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useDispatch, connect } from 'react-redux';

import { jsx, css, ClassNames } from '@emotion/core';

import Navbar from './Nav';
import { addUser } from '../redux/actions';
import { getSearch, getUser } from '../redux/selectors';

function SetState(state){
    switch(state){
        case 0:
            return("Offline");
            
        case 1:
            return("Online");
            
        case 2:
            return("Busy");
            
        case 3:
            return("Away");
            
        case 4:
            return("Snooze");
            
        case 5:
            return("looking to trade");
            
        case 6:
            return("looking to play");

        default:
            return('');
    }
}

function UserContainer(props){
    const dispatch = useDispatch();
    const d = new Date(0);
    const u = props.user;
    //dispatch(addUser(props.user));
    d.setUTCSeconds(u.lastlogoff);
    const userState = SetState(u.personastate);

    return(
        <div css={css`
        text-align: center;
        z-index: 99;
    `} >
            <div className="UserBox"  
                css={css`
                    color: #c7d5e0;   `}>
                <h3>{u.personaname}</h3>
                <div>
                    <img src={u.avatarfull} />
                </div>
                <a href={u.profileurl}>Steam Profile</a>
                <p>Last Logoff: {d.toLocaleDateString()}</p>
                <p className="currentStatus">Current Status: {userState}</p>
                <p></p>

            </div>
        </div>
    );
}

const cssThing = css`
    text-align: center;
    z-index: 99;
`;


export default function UserInfo(props){

    const [user, setUser] = useState();
    const pathArray = window.location.pathname.split('/');
    const search = props.id.userReducer.search;


    useEffect(() =>{
        Axios.get(`/api/getUserInfo/${pathArray[2]}`)
            .then(res => {
                console.log(res.data.response.players[0]);
                setUser(res.data.response.players[0])
            })}, []);

    if(user){
        return(
            <div>
                <Navbar id={user.steamid} active={"user"}/>
                <UserContainer user={user} />
            </div>
        )
    }
    else{
        return(
            <div>
                No user found
            </div>
        )
    }
}