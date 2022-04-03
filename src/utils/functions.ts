import moment from "moment";
import { STATES } from "./constants/states";
import { TEXTS } from "./constants/texts";

export function timeDifference(startTime: moment.Moment, endTime: moment.Moment){
  const hours = moment(endTime).diff(moment(startTime), 'hours')
  const mins = moment.utc(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))).format("mm")
  return `${hours}hs ${mins}mins`
}

export function nextState(state: number) {
  switch(state){
    case STATES.PLANNED: return { text: TEXTS.NEXT_TASK_IN_PROGRESS, icon: 'hammer-outline' }
    case STATES.IN_PROGRESS: return { text: TEXTS.NEXT_TASK_COMPLETED, icon: 'checkmark-outline' }
    default: return { text: '', icon: ''}
  }
}