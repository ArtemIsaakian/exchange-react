import React, {useState,useEffect} from 'react'

import axios from 'axios';
import Rate from './components/Rate';
import './App.scss';
import DB from './assets/db.json';

function App() {

  const [rateList, setRateList] = useState(null);

  useEffect(()=> {
    axios
    .get('http://localhost:3001/rates')
    .then(({data}) => setRateList(data))
  },[])


  return (
    <div className="wrapper">
      <div className="header">
      {/* <div className="logo"><a href="#">Money Exchange</a></div> */}
        <div className="nav">
          <ul>
            {/* <li><a href="#">Главная</a></li>
            <li><a href="#">Мои транзакции</a></li> */}
          </ul>
        </div>
      </div>
      <div className="content">
        {rateList ? <Rate items={{rateList}}/> : 'Загрузка...'}
      <section className="calculate">
        <h2>Калькулятор валюты</h2>
        <div className="calculator">
            <div className="left">
            <p>У меня есть:</p>
              <div className="calc-switcher">
                <div className="calc-switcher-item">USD</div>
                <div className="calc-switcher-item">EUR</div>
                <div className="calc-switcher-item">GBP</div>
                <div className="calc-switcher-item">CHF</div>
              </div>
              <div className="inputBox">
                <input className="entered-value" type="text" placeholder="Введите сумму" />
              </div>
            </div>
            <div className="right">
            <p>Хочу приобрести:</p>
              <div className="calc-switcher">
                <div className="calc-switcher-item">USD</div>
                <div className="calc-switcher-item">EUR</div>
                <div className="calc-switcher-item">GBP</div>
                <div className="calc-switcher-item">CHF</div>
              </div>
              <div className="inputBox">
                <input className="result-value" type="text" placeholder="Введите сумму"/>
              </div>
            </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default App;
