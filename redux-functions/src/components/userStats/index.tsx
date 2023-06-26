import { DivUserStatsBase } from "./styles";
import CharacterImage from "../../assets/level1character.jfif";
import { useSelector } from "react-redux";

const UserStats = () => {

  const items = useSelector((state: any) => state.items);
  const health = useSelector((state: any) => state.health)
  const stamina = useSelector((state: any) => state.stamina)

  return (
    <DivUserStatsBase>
      <img src={CharacterImage} alt="CharacterImage" />
      <ul>
        <li>
          <h2>Situation:</h2>
          <p>Newbie</p>
        </li>
        <li>
          <h2>Money:</h2>
          <p>$ 0,00</p>
        </li>
        <li>
          <h2>Level:</h2>
          <p>1</p>
        </li>
        <li>
          <h2>XP:</h2>
          <p>0</p>
        </li>
        <li>
          <h2>Health:</h2>
          <p>{health}</p>
        </li>
        <li>
          <h2>Stamina:</h2>
          <p>{stamina}</p>
        </li>
        <li>
          <h2>Strength:</h2>
          <p>5</p>
        </li>
        <li>
          <h2>Defense:</h2>
          <p>15</p>
        </li>
        <li className="liButtonItems">
          <button>Items</button>
        </li>
      </ul>
    </DivUserStatsBase>
  );
};

export default UserStats;
