import { Ammo } from "../Model/Ammo";

export const getAmmoByName = (props) => {
    fetch("http://localhost:51572/api/v1/ammo/" + props.name)
      .then(res => res.json())
      .then(
        (result) => {
          result.forEach(element => {
            var ammo = new Ammo(element.id,element.name, element.caliber, element.damage, element.weight, element.stackMaxSize, element.tracer, element.tracerColor, element.ammoType,
              element.projectileCount, element.armorDamage, element.fragmentationChance, element.ricochetChance, element.penetrationChance, element.penetrationPower,
              element.accuracy, element.recoil, element.initialSpeed);
            props.setItems(oldItems => [...oldItems, ammo]);
          });
        },
        
        (error) => {
        }
      )
  }