import styles from "../style.module.css"
import shortid from "shortid";
const Form = (props) => {
    let {todoList} = props;
    const {todo, setTodo, setTodoList} = props;
    const addTodoList = (e) =>{
        e.preventDefault();
        setTodoList([...todoList, {name: todo, id: shortid.generate()}]);
        setTodo('')
    }
    return (
        <div className={styles.todoForm}>
            <form className={styles.form}>
                <input 
                    className={styles.todoInput} 
                    type="text" 
                    value={todo} 
                    onChange={ev => setTodo(ev.target.value)}
                    placeholder="Add todo Item" />
                <button className={styles.todoButton} onClick={addTodoList}>Add Item</button>
            </form>
            
        </div>
    )
}

export default Form;