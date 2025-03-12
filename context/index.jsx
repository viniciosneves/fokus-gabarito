import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { customAlphabet } from 'nanoid/non-secure';
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

export const TasksContext = createContext()

export const useTasks = () => useContext(TasksContext)

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('fokus-tasks', JSON.stringify(value));
      } catch (e) {
        // saving error
      }
    };
    if (isLoaded) {
      storeData(tasks)
    }
  }, [tasks])

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('fokus-tasks');
        setTasks(value ? JSON.parse(value) : [])
        setIsLoaded(true)
      } catch (e) {
        // error reading value
      }
    };
    getData()
  }, [])

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
