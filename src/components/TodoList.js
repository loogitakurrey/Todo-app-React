import Item from "./Item"
import styles from "../style.module.css"
const TodoList = ({todoList, setTodoList}) => {
    return (
        <div className={styles.todoItemList}>
                {
                    todoList.length > 0 && todoList.map((todo) => (
                        <Item key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} />
                    ))
                }
        </div>
    )
}
export default TodoList;