import { useEffect ,useState } from "react";


export const Todoform = ({onAddTodo,}) => {
    const[InputValue,setInputValue]=useState({});


    const handleInputValue=(value)=>{
        setInputValue({Id:value,Content:value,Checked:false})
    };
  
  const HandleFormSubmit=(event)=>{
    event.preventDefault()
    onAddTodo(InputValue);
    setInputValue({Id:"",Content:"",Checked:""});
  }
    
  
    return (
        <section className="form">
            <form  onSubmit={HandleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" value={InputValue.Content}
                    autoComplete="off" onChange={(event)=>handleInputValue(event.target.value)}/>
                </div>
                <button type="submit " className="todo-btn">Add Task</button>
            </form>
            </section>
  );
};
