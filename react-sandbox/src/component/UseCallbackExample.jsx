import  React, { useState, useCallback } from "react"



function UseCallbackExample() {
    const [tasks, setTasks] = useState([])

    const addTasks = useCallback(() =>  {
        setTasks((prevState) => [...prevState, 'Some Tasks'])
    }, [setTasks]) 
    return (
        <div>
            <Button addTasks={addTasks} />
            {tasks.map((tasks, index) => (
                <p key={index}>{ tasks}</p>
            ))}
        </div>
    )
}
const Button = React.memo(({ addTasks })=> {
    console.log("Button Rendered")
    return (<div>
        <button className="btn btn-primary" onClick={addTasks}>
            Add Tasks
        </button>
    </div>
    )     
})


export default UseCallbackExample