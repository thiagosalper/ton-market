import { useDispatch } from "react-redux";
import { FeedbackInterface } from "../../reducer/app.reducer";

export enum APP_ACTIONS {
  PUSH_FEEDBACK = 'PUSH_FEEDBACK',
  CLEAR_FEEDBACK = 'CLEAR_FEEDBACK',
}

interface actionPushFeedback {
  type: APP_ACTIONS.PUSH_FEEDBACK;
  payload: FeedbackInterface;
}

interface actionClearFeedback {
  type: APP_ACTIONS.CLEAR_FEEDBACK;
}

export type ActionAppReducer = actionPushFeedback | actionClearFeedback;

interface AppActionsInterface {
  showFeedback(payload: FeedbackInterface): void;
  clearFeedback(): void;
}

const useAppActions: () => AppActionsInterface = () => {
  const dispatch = useDispatch();

  function showFeedback(payload: FeedbackInterface) {
    dispatch({ type: APP_ACTIONS.PUSH_FEEDBACK, payload: payload });
  }

  function clearFeedback() {
    dispatch({ type: APP_ACTIONS.CLEAR_FEEDBACK });
  }

  return {
    showFeedback,
    clearFeedback,
  }
}

export default useAppActions;
