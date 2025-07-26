import { memo, useEffect, useRef } from "react";
import "./Todos.css"

const Todos = ({ todos }) => {
    const count = useRef(0);

    useEffect(() => {
        count.current += 1;
        console.log(`Todos component render count: ${count.current}`);
    })

    const handleDelete = (e) => {
        if(e.target.tagName === 'BUTTON') e.target.parentElement.parentElement.remove();
    }

    return(
            <ul>
            {todos && todos.map((todo, index) => 
                <li key={index}>
                    <span className="todo-text">{todo}</span>
                    <span className="todo-button"><button className='deleteButton' onClick={handleDelete} /></span>
                </li>
            )}
        </ul>
    )
}

export default memo(Todos);