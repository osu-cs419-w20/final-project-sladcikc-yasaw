import React from 'react';
import Axios from 'axios';

import { useDispatch } from 'react-redux';

import { addUser } from '../redux/actions';


export function UserContainer(user){
    const dispatch = useDispatch();
    dispatch(addUser(user));
    return(
        <div>
            p
        </div>
    )
}

export default class UserInfo extends React.Component{
    state = {
        user: {},
    }

    componentDidMount(){
        Axios.get('/api/getUserInfo')
            .then(res => {
                console.log(res.data.response.players);
                this.setState({user: res.data.response.players[0]})
            })
    }

    render(){
        return(
            <ul>
                <li>{this.state.user.personaname}</li>
                <img src={this.state.user.avatarfull} />
                <userContainer />
            </ul>
        )
    }
}