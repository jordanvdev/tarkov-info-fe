import { Quest } from "../Model/Quest";

export const getQuestsByName = (props) => {
    fetch("http://localhost:51572/api/v1/quests/" + props.name)
      .then(res => res.json())
      .then(
        (result) => {
          result.forEach(element => {
            var quest = new Quest(element.id,element.title, element.wiki, element.experienceReward, element.reputationReward, element.trader);
            props.setItems(oldItems => [...oldItems, quest]);
          });
        },
        
        (error) => {
        }
      )
  };

  export const getQuestsByTrader = (props) => {
    fetch("http://localhost:51572/api/v1/quests/trader/" + props.trader)
      .then(res => res.json())
      .then(
        (result) => {
          result.forEach(element => {
            var quest = new Quest(element.id,element.title, element.wiki, element.experienceReward, element.reputationReward, element.trader);
            props.setQuests(oldQuests => [...oldQuests, quest]);
          });
        },
        
        (error) => {
        }
      )
  }
  