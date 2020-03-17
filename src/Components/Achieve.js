/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import Img from 'react-image';

import { jsx, css, ClassNames } from '@emotion/core';

import UserInfo from './User';
import { addGames } from '../redux/actions';
import { getSearch, getUser } from '../redux/selectors';


function AchieveContainer(props){
    const d = new Date(0);
    const u = props.games;

    const list = u.map((game) =>
        <div css={css` contain: content;`}>

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

                </ul>
            </div>
        </div>
    );
}


export default function UserAchieve(props){

    const pathArray = window.location.pathname.split('/');
    const id = pathArray[3]

    if(props.games){
        return(
            <div>          
                <AchieveContainer games={props.games} id={id}/>
            </div>
        )
    }
    else{
        return(
            <div css={css`
            color: #c7d5e0; text-align: center;   `}>
                Profile has not earned achievements.
            </div>
        )
    }
}