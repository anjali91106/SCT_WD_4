export const addTodo = (todos: string[], newTask: string) => {
    return [...todos, newTask]
}

export const deleteTodo = (todos: string[], index: number) => {
    return todos.filter((_, i) => i !== index );
}