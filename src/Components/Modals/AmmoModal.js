import ReactDOM from "react-dom";
import './AmmoModal.css'
import './Modals.css';

export const AmmoInfoModal = (props) => {
    if(!props.isOpen){
        document.getElementById('root').style.filter = '';
        return null;
    }

    document.getElementById('root').style.filter = 'blur(5px)';

    return ReactDOM.createPortal(
        <div className="itemModal">
            <h1> {props.selectedItem.Name} </h1>
            <button className="closeButton" onClick={() => props.onClose()}></button>
            <hr></hr>

            <div className="ammoContainer">
                <div className="ammoInfo">
                    <h2>Information</h2>
                    <h3>Caliber : {props.selectedItem.Caliber.substring(7)}</h3>
                    <h3>Weight : {props.selectedItem.Weight}kg</h3>
                    <h3>Max Stack Size : {props.selectedItem.StackMaxSize}</h3>
                    <h3>Tracer : {props.selectedItem.Tracer ? "true" : "false"}</h3>
                </div>

                <div className="ballisticsInfo">
                    <h2>Ballistics</h2>
                    <h3>Armor Damage : {props.selectedItem.ArmorDamage}</h3>
                    <h3>Fragmentation Chance : {props.selectedItem.FragmentationChance}</h3>
                    <h3>Ricochet Chance : {props.selectedItem.RicochetChance}</h3>
                    <h3>Penetration Power : {props.selectedItem.PenetrationPower}</h3>
                </div>
            </div>
        </div>,
        document.body
    )
}