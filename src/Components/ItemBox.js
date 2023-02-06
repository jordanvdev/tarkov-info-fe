import { ItemInfoModal } from "./Modals/ItemInfo"
import { useState } from "react";

export const ItemBox = (props) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="itemBox">
        {props.item.Name}
        <button onClick={() => setOpen(true)}> View More </button>
        <ItemInfoModal isOpen={open} onClose = {() => setOpen(false)}/>
    </div>
    )
  }