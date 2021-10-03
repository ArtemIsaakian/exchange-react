import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ContentLoader from "react-content-loader"
import Rate from '../Rate';
import Calculator from '../Calculator';

export default function Home() {
  const [rateList, setRateList] = useState(null);

  useEffect(()=> {
    axios
    .get('http://localhost:3002/rates')
    .then(({data}) => setRateList(data))
  },[])
    return(
        <div className="content">
          <Rate rateInfo={rateList}/> 
          {
            rateList ? <Calculator currency={rateList}/> : 
            <>
              <h2>
                <ContentLoader 
                  speed={2}
                  width={266}
                  height={29}
                  viewBox="0 0 266 29"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="0" y="0" rx="10" ry="10" width="266" height="29" />
                </ContentLoader>
              </h2>
            </>
          }
        </div>
    )
}

