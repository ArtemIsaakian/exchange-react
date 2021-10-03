import React, {useState,useEffect} from 'react';
import axios from 'axios';
import * as Mui from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import './HistoryTransaction.scss';



export default function HistoryTransaction() {
    const [historyInfo, setHistoryInfo] = useState(null);

    useEffect(()=> {
            axios
            .get(`http://localhost:3002/transactions`)
            .then(({data}) => setHistoryInfo(data));
    },[])


    const columns = [
        { field: 'id', headerName: '№', minWidth: 60},
        { field: 'currencyFrom', headerName: 'Валюта продажи', minWidth: 200 },
        { field: 'currencyTo', headerName: 'Валюта покупки', minWidth: 200 },
        { field: 'value', headerName: 'Было', minWidth: 160 },
        { field: 'result', headerName: 'Стало', minWidth: 160 },
        { field: 'timeOperation', headerName: 'Дата и время', minWidth: 200 },
    ];

    return(
        <>
            <h2>Сохраненные конвертации</h2>
            { historyInfo ? 
                <div className="tableHisotory" style={{height: 400}}>
                    <DataGrid
                    rows={historyInfo}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    />        
                </div> 
                
        
                :   <div className="tableHisotory"><Mui.Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Mui.CircularProgress />
                    </Mui.Box></div>
            }
        </>
    )
}


 
  
