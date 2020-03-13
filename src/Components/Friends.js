/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useDispatch, connect } from 'react-redux';

import { jsx, css, ClassNames } from '@emotion/core';

import UserInfo from './User';
import { addUser } from '../redux/actions';
import { getSearch, getUser } from '../redux/selectors';



function FriendsContainer(props){
    const d = new Date(0);
    const u = props.friends;
    //dispatch(addUser(props.user));
    //d.setUTCSeconds(u.lastlogoff);
    //const userState = SetState(u.personastate);
    const list = u.map((friend) =>
        <UserInfo friend={friend}/>
        );
    return(
        <div css={css`
        text-align: center;
        display: block;
        z-index: 99;
    `} >
            <div className="FriendsBox"  
                css={css`
                    color: #c7d5e0;   `}>

                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
}
/* <div>
<img src={u.avatarfull} />
</div>
<a href={u.profileurl}>Steam Profile</a>
<p>Last Logoff: {d.toLocaleDateString()}</p>
<p className="currentStatus">Current Status: {userState}</p>
<p></p> */

const cssThing = css`
    text-align: center;
    z-index: 99;
`;


export default function UserFriends(props){

    const [friends, setFriends] = useState();
    const pathArray = window.location.pathname.split('/');
    const search = props.id.userReducer.search;


    useEffect(() =>{
        Axios.get(`/api/getUserFriends/${pathArray[3]}`)
            .then(res => {
                console.log(res.data.friendslist.friends);
                setFriends(res.data.friendslist.friends)
            })}, []);

    if(friends){
        return(
            <div>              
                <FriendsContainer friends={friends} />
            </div>
        )
    }
    else{
        return(
            <div>
                Profile does not allow friends to be viewed.
            </div>
        )
    }
}