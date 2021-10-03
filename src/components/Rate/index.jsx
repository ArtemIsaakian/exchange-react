import React from 'react';
import ContentLoader from "react-content-loader"
import './Rate.scss'

export default function Rate({ rateInfo }) {
    return(
      
        <section className="rate">
          {
          rateInfo ? 
          <>
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
                      rateInfo.map((obj,index) => <tr key={index}><td>{obj.currency}</td><td>{obj.buy}</td><td>{obj.sell}</td></tr>)
                    }
                  </tbody>
                </table>
              </div>
            </> : 
              <> 
                <h2>  
                  <ContentLoader 
                    speed={2}
                    width={350}
                    height={25}
                    viewBox="0 0 350 25"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    >
                    <rect x="0" y="0" rx="10" ry="10" width="350" height="24" />
                  </ContentLoader>
                </h2>
                <div className="table-rate">
                  <ContentLoader 
                    speed={2}
                    width={280}
                    height={209}
                    viewBox="0 0 280 209"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="10" ry="10" width="83" height="39" /> 
                    <rect x="98" y="0" rx="10" ry="10" width="83" height="39" /> 
                    <rect x="196" y="0" rx="10" ry="10" width="83" height="39" /> 
                    <rect x="0" y="54" rx="10" ry="10" width="83" height="39" /> 
                    <rect x="99" y="54" rx="10" ry="10" width="83" height="39" /> 
                    <rect x="197" y="56" rx="10" ry="10" width="83" height="39" /> 
                    <rect x="0" y="112" rx="10" ry="10" width="83" height="39" /> 
                    <rect x="99" y="111" rx="10" ry="10" width="83" height="39" /> 
                    <rect x="196" y="109" rx="10" ry="10" width="83" height="39" />
                  </ContentLoader>
                </div>  
              </>
          }
        </section>
    )
}