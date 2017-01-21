export const GET_CHATS = 'GET_CHATS';
import axios from 'axios';



export function getChats() {

  const response = axios.get('http://localhost:8000/api/get-chats');

  return {
    type: GET_CHATS,
    payload: response
  }
}
