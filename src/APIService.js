import axios from 'axios';
/*
const auth = {
  headers: {"Authorization" : `Bearer ${token64}`}
}
*/
const qs = require('querystring') //for FROM URLENCODED
const API_URL = 'https://localhost:44314/api';

export class APIService{

  constructor(){
  }

  /***************TOKEN */
  loginPractitioner(user){
    const url = `${API_URL}/Token/Practitioner?pseudo=${user.pseudo}&pwd=${user.pwd}`; //?pseudo=Perturbat0r&pwd=Funes pseudo=Machiavel&pwd=sun-tzu-ftw
    return axios.post(url);
  }

  loginPatient(user){
    const url = `${API_URL}/Token/Patient?pseudo=${user.pseudo}&pwd=${user.pwd}`;
    return axios.post(url);
  }

/***************PATIENTS */
getPatients(token64) {
  const url = `${API_URL}/patients`;
  return axios.get(url, {
    headers: {"Authorization" : `Bearer ${token64}`}
  }).then(response => response.data);
}

getPatient(id, token64) {
  const url = `${API_URL}/patients/${id}`;
  return axios.get(url, {
    headers: {"Authorization" : `Bearer ${token64}`}
  }).then(response => response.data);
}

postPatient(user){
  const url = `${API_URL}/patients`;
  return axios.post(url,qs.stringify(user));
}


/***************PRACTITIONER */
getPractitioners(token64) {
  const url = `${API_URL}/practitioners`;
  return axios.get(url, {
    headers: {"Authorization" : `Bearer ${token64}`}
  }).then(response => response.data);
}

getPractitioner(id, token64) {
  const url = `${API_URL}/practitioners/${id}`;
  return axios.get(url, {
    headers: {"Authorization" : `Bearer ${token64}`}
  }).then(response => response.data);
}

postPractitioners(user){
  const url = `${API_URL}/practitioners`;
  return axios.post(url,qs.stringify(user));
}

/********************POST ***************/
postFile(formData){
  const url = `${API_URL}/upload`;
  return axios.post(url, formData);
}

}