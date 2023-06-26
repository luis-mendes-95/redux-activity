import Quests from "../../components/quests";
import UserStats from "../../components/userStats";
import { DivHomeBase } from "./styles";

const HomePage = () => {
  return (
    <DivHomeBase>
      <h1>Redux Adventures</h1>
      <UserStats/>
      <Quests/>
    </DivHomeBase>
  );
};

export default HomePage;
