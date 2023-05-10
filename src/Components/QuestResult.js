import { QuestInfoModal } from "./Modals/QuestModal"
import { useState } from "react";

export const QuestResult = (props) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="itemBox">
        {props.item.Title}
        <button onClick={() => setOpen(true)}> View More </button>
        <QuestInfoModal isOpen={open} onClose = {() => setOpen(false)} selectedItem={props.item}/>

    </div>
    )
  }