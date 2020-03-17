/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import Img from 'react-image';

import { jsx, css } from '@emotion/core';

import { addGames } from '../redux/actions';




function GamesContainer(props){

    const u = props.games;

    const list = u.map((game) =>
        <div css={css` contain: content;`}>
            <a href={"https://store.steampowered.com/app/"+game.appid}><Img src={['https://steamcdn-a.akamaihd.net/steam/apps/'+game.appid+'/header.jpg', "https://i.imgur.com/jjgQU6E.png"]} /></a>
            <p>Playtime: {game.playtime_forever > 60 ? `${Math.floor(game.playtime_forever / 60)} hours` : `${game.playtime_forever} minutes`}</p>
        </div> 
        );
    return(
        <div css={css`
        text-align: center;
        display: block;
        z-index: 99;
    `} >
            <div className="GamesBox"  
                css={css`
                    color: #c7d5e0;   `}>

                <ul css={css`
                    column-count: 7;
                    column-rule: dotted 1px #333;
                    @media (max-width: 1230px) {
                        column-count: 4;
                      } 
                    @media (max-width: 768px) {
                        column-count: 2;
                      }          
                    `
                }>
                    {list}
                </ul>
            </div>
        </div>
    );
}


export default function UserGames(props){

    const [games, setGames] = useState();
    const pathArray = window.location.pathname.split('/');
    const dispatch = useDispatch();



    useEffect(() =>{
        Axios.get(`/api/getUserGames/${pathArray[3]}`)
            .then(res => {
                console.log(res.data.response.games);
                setGames(res.data.response);
                dispatch(addGames(res.data.response.games));
            })
            }, []);
    
    if(games){
        return(
            <div>
                <div>
                    <p                css={css`
                    color: #c7d5e0; text-align: center;   `}>Game Count: {games.game_count}</p>    
                </div>              
                <GamesContainer css={css` margin-right: 5px;`} games={games.games} />
            </div>
        )
    }
    else{
        return(
            <div css={css`
            color: #c7d5e0; text-align: center;   `}>
                Profile does not have any games.
            </div>
        )
    }
}