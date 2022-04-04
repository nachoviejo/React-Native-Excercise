import { Platform } from "react-native"

const IP = Platform.OS === 'ios' ? '127.0.0.1' : '10.0.2.2'
const PORT = '3001'

export const tasksUrl = () => {
  return `http://${IP}:${PORT}/tasks` 
}

export const taskUrl = (id: number) => {
  return `http://${IP}:${PORT}/tasks/${id}` 
}
