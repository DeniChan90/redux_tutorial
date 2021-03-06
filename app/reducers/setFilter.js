import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/constants';

const { SHOW_ALL } = VisibilityFilters;

export function setFilter(state = SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER :
      return action.filter;

    default : return state
  }
};
