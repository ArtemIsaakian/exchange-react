import React from 'react';
// import axios from 'axios';

import './Rate.scss'

export default function Rate({ items }) {
    return(
        <section className="rate">
        <h2>Информация о курсе валют</h2>
            <div className="table-rate">
              <table>
                <thead>
                <tr>
                    <th>Валюта</th>
                    <th>Покупка</th>
                    <th>Продажа</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items.rateList.map((obj,index) => <tr key={index}><td>{obj.currency}</td><td>{obj.buy}</td><td>{obj.sell}</td></tr>)
                  }
                </tbody>
              </table>
            </div>
      </section>
    )
}