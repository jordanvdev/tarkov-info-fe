import { Ammo } from "../Model/Ammo";

export const getAmmoByName = (props) => {
    fetch("http://localhost:51572/api/v1/ammo/" + props.name)
      .then(res => res.json())
      .then(
        (result) => {
          result.forEach(element => {
            var ammo = new Ammo(element.id,element.name, element.caliber, element.damage);
            props.setItems(oldItems => [...oldItems, ammo]);
          });
        },
        
        (error) => {
        }
      )
  }