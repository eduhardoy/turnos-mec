import axios from 'axios';

const urlGetTurnos = "asdasda"
const getTurnos = (params) => {
    return axios({
        method: 'GET',
        url: urlGetTurnos,
        crossdomain: true,
        data: params,    
        headers: { 
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        } 
    })
}

const urlSaveTurnos = "dfdfdsfsd"
const saveTurnos = (params) => {
    return axios({
        method: 'POST',
        url: urlSaveTurnos,
        data: params,    
        headers: { 
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        } 
    })
}


export { getTurnos, saveTurnos };