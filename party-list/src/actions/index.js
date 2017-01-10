export const FETCH_PARTY_LIST = 'FETCH_PARTY_LIST';
export const REMOVE_PARTY_GOER = 'REMOVE_PARTY_GOER';

export function fetchPartyList(name) {
  const nameArr = [name]
  console.log('name from action:', nameArr);
  return {
    type: FETCH_PARTY_LIST,
    payload: nameArr
  }
}

export function removePartyGoer(name) {
  alert('hi');
  return {
    type: REMOVE_PARTY_GOER,
    payload: name
  }
}
