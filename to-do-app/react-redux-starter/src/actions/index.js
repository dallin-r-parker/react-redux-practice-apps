import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const ADD_COMPLETED = 'ADD_COMPLETED';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export function removeTask(task) {
  return {
    type: REMOVE_TASK,
    payload: task
  };
}

export function addCompleted(task) {
  return {
    type: ADD_COMPLETED,
    payload: task
  };
}

export function removeCompleted(task) {
  return {
    type: REMOVE_COMPLETED,
    payload: task
  };
}
