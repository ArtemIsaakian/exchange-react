import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss'

export default function Header() {
    return(
        <div className="header">
        <div className="logo"><Link to="/home">Money Exchange</Link></div>
          <div className="nav">
            <ul>
              <li><Link to="/home">Главная</Link></li>
              <li><Link to="/history">История конвертаций</Link></li>
            </ul>
          </div>
        </div>
    )
}