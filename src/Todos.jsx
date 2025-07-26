import { memo, useEffect, useRef } from "react";
import "./Todos.css"

const Todos = ({ todos }) => {
    const count = useRef(0);

    useEffect(() => {
        count.current += 1;
        console.log(`Todos component render count: ${count.current}`);
    })

    const handleDelete = (e) => {
        if(e.target.tagName === 'BUTTON') e.target.parentElement.remove();
    }

    return(
            <ul>
            {todos && todos.map((todo, index) => 
                <li key={index}>
                    <span className="todo-text">{todo}</span>
                    <button className='deleteButton' onClick={handleDelete} />
                </li>
            )}
        </ul>
    )
}

export default memo(Todos);