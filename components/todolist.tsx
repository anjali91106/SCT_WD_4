'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { addTodo, deleteTodo } from "@/lib/todoService";
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox"

const ToDoList = () => {
    const [todos, setTodos] = useState<string[]>([])
    const [task, setTask] = useState<string>("")
    const [editingIndex, setEditingIndex] = useState<number | null>(null)
    const [editedTask, setEditedTask] = useState<string>("")

    const handleAdd = (newTask: string) => {
        if (!newTask.trim()) return;
        if (!newTask.trim()) return;
        const updated = addTodo(todos, newTask);
        setTodos(updated);
        setTask("");
    }

    const handleDelete = (index: number) => {
        const updated = deleteTodo(todos, index)
        setTodos(updated)
    }

    const handleEdit = (index: number) => {
        setEditingIndex(index)
        setEditedTask(todos[index]);
    }

    const handleSave = (index: number, editedTask: string) => {
        if (!editedTask.trim()) return;
        const editedTodos = [...todos];
        editedTodos[index] = editedTask;
        setTodos(editedTodos);
        setEditingIndex(null);
        setEditedTask("");
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-[#F5F3F0] rounded-xl shadow-md">
            <div className="flex mt-4 space-x-2">
                <Input
                    placeholder="Add Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="flex-grow rounded-lg border-[#B8BDB0] focus:border-[#8A9A85] focus:ring-[#8A9A85]"
                />
                <Button
                    className="bg-[#8A9A85] text-white hover:bg-[#6F7C6B] rounded-lg px-4 py-2"
                    onClick={() => handleAdd(task)}
                >
                    Add
                </Button>
            </div>

            {todos.map((todo, i) => (
                <div
                    key={i}
                    className="flex items-center justify-between bg-[#E0E3DC] p-3 my-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    {editingIndex === i ? (
                        <>
                            <Input
                                placeholder="Enter New Task .."
                                className="w-full mr-2 rounded-lg border-[#B8BDB0] focus:border-[#8A9A85] focus:ring-[#8A9A85]"
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                            />
                            <Button
                                className="bg-[#8A9A85] text-white hover:bg-[#6F7C6B] rounded-lg px-3 py-1"
                                onClick={() => handleSave(i, editedTask)}
                            >
                                Save
                            </Button>
                        </>
                    ) : (
                        <>
                            <span className="text-[#4B4F47] font-medium">{todo}</span>
                            <div className="flex space-x-2">
                                <Button
                                    className="bg-[#C4C7C0] text-[#333] hover:bg-[#B1B5AD] rounded-lg px-3 py-1"
                                    onClick={() => handleEdit(i)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className="bg-[#D6D8D3] text-[#4B4F47] hover:bg-[#B1B5AD] rounded-lg px-3 py-1"
                                    onClick={() => handleDelete(i)}
                                >
                                    ❌
                                </Button>
                                <div className="bg-[#A4C3A2] hover:bg-[#8A9A85] rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out">
                                    <Checkbox className="accent-[#4B4F47]" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>


    )
}

export default ToDoList;