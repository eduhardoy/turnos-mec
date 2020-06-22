import { axiosRequest } from "../Utils/AxiosRequest";

const urlSaveTurnos = "http://mapa.mec.gob.ar:3030/turnos"
export function saveTurnos(dataTurno){
    console.log("DADASDSDSDSAD", dataTurno)
    return axiosRequest(urlSaveTurnos, {
        method: 'POST',
        body: JSON.stringify(dataTurno),    
        headers: { 
            "Content-Type": "application/json",
        } 
    }).
    then(response => response.data)
}

const urlGetTurnosClient = "http://mapa.mec.gob.ar:3030/turnos/mes"
export function getTurnosClient(dataTurno){
    console.log("TURNOS API CLIENT REQUEST", dataTurno)
    return axiosRequest(urlGetTurnosClient, {
        method: 'POST',
        body: JSON.stringify(dataTurno),    
        headers: { 
            "Content-Type": "application/json",
        } 
    }).
    then(response => response.data)
}

const urlGetTurnosAdmin = "http://mapa.mec.gob.ar:3030/turnos"
export function getTurnosAdmin(mes){
    console.log("MES",mes, sessionStorage.getItem("token"))
    return axiosRequest(urlGetTurnosAdmin + "/" + mes, {
        method: 'GET',
        headers: { 
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        } 
    }).
    then(response => response.data)
}

const urlGetTurnosSuperAdmin = "http://mapa.mec.gob.ar:3030/turnos/all"
export function getTurnosSuperAdmin(mes, tipo){
    console.log("TOKEN MES TIPO", mes, sessionStorage.getItem("token"), tipo)
    console.log("MES",mes, sessionStorage.getItem("token"))
    return axiosRequest(urlGetTurnosSuperAdmin + "/" + mes.toString(), {
        method: 'POST',
        body: tipo,
        headers: { 
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        } 
    }).
    then(response => response.data)
}
