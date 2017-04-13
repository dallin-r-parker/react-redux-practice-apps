export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addItem(task) {
  console.log('task from action creator', task);
  return {
    type: ADD_ITEM,
    payload: task
  }
}
export function remove(task) {
  console.log('remove action', task);
  return {
    type: REMOVE_ITEM,
    payload: task
  }
}
