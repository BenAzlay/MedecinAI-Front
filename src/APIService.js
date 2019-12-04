import axios from 'axios';
const qs = require('querystring') //for FROM URLENCODED
const API_URL = 'http://localhost:8080/XML-App/rest';
export class APIService{

  constructor(){
  }
  /***************USERS */
  getUsers() {
    const url = `${API_URL}/user`;
    return axios.get(url).then(response => response.data);
  }

  getUser(id) {
    const url = `${API_URL}/user/${id}`;
    return axios.get(url).then(response => response.data);
  }

  loginUser(username, password) {
    const url = `${API_URL}/user/${username}/${password}`;
    return axios.get(url).then(response => response.data);
  }
  
  createUser(user){
    const url = `${API_URL}/user`;
    return axios.post(url,qs.stringify(user));
  }

/***************MEDIA */
getMedias() {
  const url = `${API_URL}/media`;
  return axios.get(url).then(response => response.data);
}

searchMedia(keyword) {
  const url = `${API_URL}/search/${keyword}`;
  return axios.get(url).then(response => response.data);
}

getMedia(id) {
  const url = `${API_URL}/media/${id}`;
  return axios.get(url).then(response => response.data);
}

createMedia(media){
  const url = `${API_URL}/media`;
  return axios.post(url,qs.stringify(media));
}

deleteMedia(media){
  const url = `${API_URL}/media/${media.id}`;
  return axios.delete(url);
}



/***************COMMENT */
getComments() {
  const url = `${API_URL}/comment`;
  return axios.get(url).then(response => response.data);
}

getCommentsByMedia(id) {
  const url = `${API_URL}/media/${id}/comment`;
  return axios.get(url).then(response => response.data);
}

getComment(id) {
  const url = `${API_URL}/comment/${id}`;
  return axios.get(url).then(response => response.data);
}

createComment(comment){
  const url = `${API_URL}/comment`;
  return axios.post(url,qs.stringify(comment));
}

}