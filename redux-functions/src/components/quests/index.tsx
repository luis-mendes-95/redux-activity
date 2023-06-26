import { DivQuestsBase } from "./styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseStamina } from "../../store/modules/stamina/actions";

const Quests = () => {

  const currentStamina = useSelector((state: any) => state.stamina);
  const [stamina, setStamina] = useState(currentStamina);

  const dispatch = useDispatch();

  const handleSubtractStaminaFishing = () => {
    dispatch(decreaseStamina(25));
  }

  const handleSubtractStaminaHuntRabbits = () => {
    dispatch(decreaseStamina(35));
  }

  const handleSubtractStaminaHuntBoars = () => {
    dispatch(decreaseStamina(55));
  }

  return (
    <DivQuestsBase>
      <h2>QUESTS:</h2>
      <ul>
        <li>
          <button onClick={handleSubtractStaminaFishing}>Fishing</button>
          <span>Stamina Required: 25</span>
          <span>Strength Required: 5</span>
          <span>Sucess chance: 100%</span>
        </li>
        <li>
          <button onClick={handleSubtractStaminaHuntRabbits}>Hunt Rabbits</button>
          <span>Stamina Required: 35</span>
          <span>Strength Required: 10</span>
          <span>Sucess chance: 70%</span>
        </li>
        <li>
          <button onClick={handleSubtractStaminaHuntBoars}>Hunt Boars</button>
          <span>Stamina Required: 55</span>
          <span>Strength Required: 25</span>
          <span>Sucess chance: 45%</span>
        </li>
      </ul>
    </DivQuestsBase>
  );
};

export default Quests;
