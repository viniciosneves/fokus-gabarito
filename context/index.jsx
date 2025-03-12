import { createContext, useContext, useState, ReactNode } from 'react'
import { customAlphabet } from 'nanoid/non-secure';
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

export const TasksContext = createContext()

export const useTasks = () => useContext(TasksContext)

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([])

  const addTask = (description) => {
    const newTask = {
      id: nanoid(),
      description,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTaskCompleted = (id) => {
    setTasks((prev) =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const updateTask = () => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, description } : task)),
    )
  }

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, deleteTask: deleteTask, toggleTaskCompleted, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}
