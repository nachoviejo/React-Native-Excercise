import axios from "axios"
import moment from "moment"
import { STATES } from "~/utils/constants/states"
import { ITask } from "~/utils/interfaces/task"
import { tasksUrl, taskUrl } from "./api"


export const getTasks = async() => {
  try {
    const response = await axios.get(tasksUrl())
    const data: ITask[] = response.data
    let plannedTasks: ITask[] = []
    let inProgressTasks: ITask[] = []
    let completedTasks: ITask[] = []
    Object.keys(data).map((value: string, index: number) => {
      const task = data[index]
      switch (task.state) {
        case 0: {
          plannedTasks.push(task)
          break
        }
        case 1: {
          inProgressTasks.push(task)
          break
        }
        case 2: {
          completedTasks.push(task)
          break
        }
      }
    })
    return ({ plannedTasks, inProgressTasks, completedTasks })
  }
  catch(e) {
    console.error(e)
  }
}

export const nextStateTask = async (id: number, state: number) => {
  try {
    let body
    if(state!==STATES.COMPLETED){
      switch(state) {
        case STATES.PLANNED: {
          body =
            {
              state: STATES.IN_PROGRESS,
              inProgressTimeStamp: moment()
            }
          break
        }
        case STATES.IN_PROGRESS: {
          body =
            {
              state: STATES.COMPLETED,
              completedTimeStamp: moment()
            }
        }
      }
      await axios.patch(taskUrl(id), body)
    }
  }
  catch(e) {
    console.error(e)
  }
}

export const prevStateTask = async (id: number, state: number) => {
  try {
    let body
    if(state!==STATES.PLANNED){
      switch(state) {
        case STATES.IN_PROGRESS: {
          body =
            {
              state: STATES.PLANNED,
              inProgressTimeStamp: null
            }
          break
        }
        case STATES.COMPLETED: {
          body =
            {
              state: STATES.IN_PROGRESS,
              completedTimeStamp: null
            }
        }
      }
      await axios.patch(taskUrl(id), body)
    }
  }
  catch(e) {
    console.error(e)
  }
}

export const addTask = async ( { name, description, estimate }: ITask) => {
  try {
    await axios.post(tasksUrl(), {
      name,
      description,
      estimate,
      state: STATES.PLANNED,
      creationTimeStamp: moment()
    })
  }
  catch(e) {
    console.error(e)
  }
}

export const deleteTask = async (id: number) => {
  try {
    await axios.delete(taskUrl(id))
  }
  catch(e) {
    console.error(e)
  }
}