import { createContext, useContext, useState, ReactNode } from 'react'
import { nanoid } from 'nanoid'

export const TasksContext = createContext()

export const useTasks = () => useContext(TasksContext)

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    const newTask = {
      id: nanoid(),
      description,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTaskCompleted = () => {
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
