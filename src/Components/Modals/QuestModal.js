import ReactDOM from "react-dom";
import './QuestModal.css';
import './Modals.css';

export const QuestInfoModal = (props) => {
    if(!props.isOpen){
        document.getElementById('root').style.filter = '';
        return null;
    }

    document.getElementById('root').style.filter = 'blur(5px)';

    return ReactDOM.createPortal(
        <div className="questModal">
            <h1> {props.selectedItem.Title} </h1>
            <button className="closeButton" onClick={() => props.onClose()}></button>
            <hr></hr>

            <div className="questContainer">
                <div className="questInfo">
                    <h2>Information</h2>
                    <h3>Title : {props.selectedItem.Title}</h3>
                    <h3>Trader : {props.selectedItem.Trader}</h3>
                    <h3>Experience Reward : {props.selectedItem.ExperienceReward}</h3>
                    <h3>Wiki Link : {props.selectedItem.Wiki}</h3>
                </div>
            </div>
        </div>,
        document.body
    )
}