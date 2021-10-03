import React, {useState,useEffect} from 'react';
import classNames from 'classnames';
import axios from 'axios';
import * as Mui from '@material-ui/core';
import ContentLoader from "react-content-loader";
import Notification  from './Notification';
import './Calculator.scss';

export default function Calculator({currency}) {
  const [activeFrom, setActiveFrom] = useState(1);
  const [activeTo, setActiveTo] = useState(4);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [notify, setNotify] = useState({isOpen: false, meassage: '', type: ''})


  const selectActiveBtnFrom = (name) => {
    const currencyClickFrom = currency.find((item)=> {return item.idFrom === name})
    setActiveFrom(currencyClickFrom.idFrom)
  }

  const selectActiveBtnTo = (name) => {
    const currencyClickTo = currency.find((item)=> {return item.idTo === name})
    setActiveTo(currencyClickTo.idTo)
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    let valueFrom = currency.filter(item => {return item.idFrom === activeFrom})
    let valueTo = currency.filter(item => {return item.idTo === activeTo})
    setResult((value*(valueFrom[0].sell/valueTo[0].sell)).toFixed(2))
  },[value, activeFrom, activeTo])


  const saveTransaction = () => {
    if (value > 0) {
      let valueFrom = currency.filter(item => {return item.idFrom === activeFrom})
      let valueTo = currency.filter(item => {return item.idTo === activeTo})
    axios
    .post('http://localhost:3002/transactions',{
      timeOperation: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      rateSellFrom: valueFrom[0].sell, 
      rateSellTo: valueTo[0].sell, 
      currencyFrom: valueFrom[0].currency, 
      currencyTo: valueTo[0].currency,
      iconFrom: valueFrom[0].icon,
      iconTo: valueTo[0].icon,
      value: value, 
      result: (value*(valueFrom[0].sell/valueTo[0].sell)).toFixed(2)
    })
    .then(setNotify({isOpen: true, message: 'Транзакция сохранена', type: 'success'}))
      
    } else {
      alert('Ошибка: введите число больше 0')
    }
  }

    return(
        <section className="calculate">
          <h2>Калькулятор валюты</h2>
          <div className="calculator">
            <div className="left">
            <p>У меня есть:</p>
              <div className="calc-switcher">
                {
                  currency.map((item,index) => 
                    <div key={index} className="calc-switcher-item">
                      <Mui.Tooltip title={item.label} placement="bottom">
                        <Mui.Button variant="outlined"
                          onClick={selectActiveBtnFrom.bind(this,item.idFrom)} 
                          className={classNames(item.idFrom === activeFrom ? 'active' : '')}>
                          {item.currency}
                        </Mui.Button>
                      </Mui.Tooltip>    
                    </div>
                  )
                }
              </div>
              <div className="inputBox">
              <Mui.Tooltip title="Ввести" placement="right-start">
                <Mui.TextField label="Введите сумму" variant="standard" className="entered-value" type="text" onChange={handleChange}/>
              </Mui.Tooltip>
              </div>
            </div>
            <div className="center">
              <Mui.Tooltip title="Сохранить" placement="bottom">
                <Mui.Button variant="contained" onClick={saveTransaction} className="saveConvertation">Сохранить конвертацию</Mui.Button> 
              </Mui.Tooltip>
            </div>
            <div className="right">
            <p>Хочу приобрести:</p>
              <div className="calc-switcher">
                {
                  currency.map((item,index) => 
                    <div key={index} className="calc-switcher-item">
                      <Mui.Tooltip title={item.label} placement="bottom">
                        <Mui.Button variant="outlined"
                          onClick={selectActiveBtnTo.bind(this,item.idTo)} 
                          className={classNames(item.idTo === activeTo ? 'active' : '')}>
                          {item.currency}
                        </Mui.Button>
                      </Mui.Tooltip>    
                    </div>
                    )
                }
              </div>
              <div className="inputBox">
              <Mui.Tooltip title="Результат" placement="left-start">
                <Mui.TextField className="result-value" label="Read Only" value={result} InputProps={{readOnly: true,}}/>
              </Mui.Tooltip>
              </div>
            </div>
        </div>         
        <Notification
          notify={notify}
          setNotify={setNotify}
        />       
      </section>
    )
}