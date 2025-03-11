import { useContext } from "react"
import { TasksContext } from "."

export const useTaskContext = () => {

    return useContext(TasksContext)
}