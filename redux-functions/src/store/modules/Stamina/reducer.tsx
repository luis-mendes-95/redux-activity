import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = 100; 

const staminaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_STAMINA":
      return state + action.stamina;

    case "DECREASE_STAMINA":

      if (state - action.stamina <= 0) {
        toast.error("Not enough stamina, go rest!")
        break
      }

      return state - action.stamina;

    default:
      return state;
  }
};

export default staminaReducer;