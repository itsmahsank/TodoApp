
import { MdCheck,MdDeleteForever } from "react-icons/md";
export const TodoList=({data,Checked,onDeleteTodoData,onCheckTodoData})=>{

    return(
        <li  className="todo-item">
        <span className={Checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className="check-btn"   onClick={()=>onCheckTodoData(data)}><MdCheck /></button>
        <button className="delete-btn" onClick={()=>onDeleteTodoData(data)}><MdDeleteForever /></button>

    </li>
    )
}