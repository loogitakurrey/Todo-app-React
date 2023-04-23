import styles from "../style.module.css"
const Item = (props) => {
    const {todo, todoList, setTodoList} = props;
    const deletItem = () => {
        setTodoList(todoList.filter((item) => 
            item.id !== todo.id
        ))
    }
    return (
        <div className={styles.itemListDiv}>
            <div className={styles.todoItems}>
                <div className={styles.item}>
                    {todo.name}
                </div>
                <button 
                    className={styles.deleteTodoItem}
                    onClick={deletItem} >
                    Done
                </button>
            </div>
        </div>
    )
}

export default Item;