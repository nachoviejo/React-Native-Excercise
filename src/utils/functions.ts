import moment from "moment";

export function timeDifference(startTime: moment.Moment, endTime: moment.Moment){
  const hours = moment(endTime).diff(moment(startTime), 'hours')
  const mins = moment.utc(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))).format("mm")
  return `${hours}hs ${mins}mins`
}