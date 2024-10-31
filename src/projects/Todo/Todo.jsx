import { useState } from "react"
import "./Todo.css"

import { useEffect } from "react";
import { Todoform } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { getLocalStorageTodoData, SetLocalStorageTodoData } from "./TodoLocalStorage";




export const Todo=()=>{

    const[dateTime,setdateTime]=useState([]);
    const [Task, setTask] = useState(() => getLocalStorageTodoData());

    
    const HandleFormSubmit=(InputValue)=>{
        const{Id,Content , Checked}=InputValue

        if(Content === "") {
            setInputValue("")
            return}

        const ifTodoMatched= Task.find((CurV)=> CurV.Content===Content)

        if(ifTodoMatched) return

        setTask((prevValue)=>[...prevValue, {Id,Content,Checked}])
       
    }

//ADD Data to Local Storage

SetLocalStorageTodoData(Task)

 //Todo HandleCheckTodo Function 
    const HandleCheckTodo=(value)=>{

        const UpdatedTask =Task.map((CurV)=>{
            if(value===CurV.Content)
            {
                return{...CurV,Checked:!CurV.Checked}
            }
            else{
                return CurV
            }
        });

        setTask(UpdatedTask);


    }

    //Todo HandleDeleteBtn Function 
    const HandleDeleteBtn=(VAL)=>{
        const UpdatedTask = Task.filter((FilVal)=>VAL !== FilVal.Content );
        setTask(UpdatedTask);



    } ;

    //Todo HandleClearButton Function 
const HandleClearButton=()=>{
    setTask([])
}


    return(<>
    
    <section className="todo-container">
        <header>
            <h1>Todo List</h1>
           <TodoDateTime/>
        </header>
        <Todoform onAddTodo={HandleFormSubmit}/>
            <section className="myUnOrdList">
                <ul>

                    {

                        Task.map((CurrVal,index)=>{
                            return(

                               <TodoList key={CurrVal.Id} data={CurrVal.Content} Checked={CurrVal.Checked}
                               onDeleteTodoData={HandleDeleteBtn}  onCheckTodoData ={HandleCheckTodo} />
                            )


                        })

                    }
                </ul>

            </section>
        
        <section>
            <button className="clear-btn" onClick={HandleClearButton}>Clear All</button>
        </section>
    </section>
    
    </>)
}