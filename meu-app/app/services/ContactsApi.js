import axios from 'axios';
 
const contactsApi = axios.create({
  baseURL: 'https://6abf020ac4d5ac548302df38.mockapi.io/contacts',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
 
contactsApi.interceptors.request.use(
  (config) => {
    console.log('Enviando requisição:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
contactsApi.interceptors.response.use(
  (response) => {
    console.log('Resposta recebida:', response.status);
    return response;
  },
  (error) => {
    console.error('Erro na requisição:', error.message);
    return Promise.reject(error);
  }
);
 
export default contactsApi;