import { AmmoInfoModal } from "./Modals/AmmoModal"
import { useState } from "react";

export const ItemBox = (props) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="itemBox">
        {props.item.Name}
        <button onClick={() => setOpen(true)}> View More </button>
        <AmmoInfoModal isOpen={open} onClose = {() => setOpen(false)} selectedItem={props.item}/>
    </div>
    )
  }