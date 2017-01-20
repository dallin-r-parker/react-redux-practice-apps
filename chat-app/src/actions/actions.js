export const GET_CHATS = 'GET_CHATS';
import axios from 'axios';



export function getChats() {

  const response = axios.get('https://practiceapi.devmounta.in/api/chats')

  return {
    type: GET_CHATS,
    payload: response
  }
}
