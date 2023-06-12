import { useState } from "react"
import { getQuestsByTrader } from "../../Http/QuestRequests";
import { Quest } from "../../Model/Quest";

export const QuestPage = () => {

    const [traderName, setTraderName] = useState("");
    const [quests, setQuests] = useState([]);

    const _onSelectChange = (event) => {
        if(event.target.value === '')
            return;
        setTraderName(event.target.value);
        getQuestsByTrader({trader: traderName, setQuests: setQuests});
    }

    return (
        <div className="questPageContainer">
            <h1>View Quests By Trader</h1>
            <select onChange={_onSelectChange}>
                <option value='' selected> Select a Trader </option>
                <option value="prapor">Prapor</option>
                <option value="therapist">Therapist</option>
                <option value="mechanic">Mechanic</option>
                <option value="jager">Jager</option>
                <option value="ragman">Ragman</option>
                <option value="fence">Fence</option>
                <option value="peacekeeper">Peacekeeper</option>
                <option value="skier">Skier</option>
            </select>

            <ul>
                {quests.map(item => {
                    return "hello";
                })}
            </ul>

        </div>

        
    )
}