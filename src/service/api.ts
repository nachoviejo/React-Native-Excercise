import { Platform } from "react-native"

const IP = Platform.OS === 'ios' ? '127.0.0.1' : '10.0.2.2'
export const tasksUrl = () => {
  return `http://${IP}:3001/tasks` 
}

export const taskUrl = (id: number) => {
  return `http://${IP}:3001/tasks/${id}` 
}
