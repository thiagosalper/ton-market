import { Reducer } from "redux"
import { ActionAppReducer, APP_ACTIONS } from "../actions/appActions";

export interface FeedbackInterface {
  type: 'success' | 'error' | 'info';
  text: string;
}

export interface AppReducerInterface {
  feedback: FeedbackInterface | undefined;
}

const initialAppState: AppReducerInterface = {
  feedback: undefined,
}

export const AppReducer: Reducer<AppReducerInterface> = (
  state: AppReducerInterface = initialAppState,
  action: ActionAppReducer
) => {
  switch (action.type) {
    case APP_ACTIONS.PUSH_FEEDBACK: 
      return { ...state, feedback: action.payload };
    case APP_ACTIONS.CLEAR_FEEDBACK: 
      return { ...initialAppState };
    default:
      return state;
  }
}


