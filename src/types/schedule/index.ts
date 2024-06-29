export type ISchedule = {
   [x: string]: any;
   id?: string;
   startDate: string;
   endDate: string;
};

export type IScheduleFrom = {
   startDate: Date;
   endDate: Date;
   startTime: string;
   endTime: string;
};
