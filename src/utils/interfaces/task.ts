import moment from "moment";

export interface ITask {
  id: number,
  name: string,
  description: string,
  estimate: number,
  state: number,
  creationTimeStamp: moment.Moment,
  inProgressTimeStamp: moment.Moment,
  completedTimeStamp: moment.Moment
}
