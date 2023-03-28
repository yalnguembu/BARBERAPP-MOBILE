import { date } from "../utils/common";

export class Reservation {
  reservation;
  constructor(data) {
    data ? (this.reservation = data) : "";
  }

  get id() {
    return this.reservation?._id;
  }

  get date() {
    return {
      date: date().dateToDayOfMonth(this.reservation?.date),
      day: date().dateToDayOfWeek(this.reservation?.date),
    };
  }

  get fullDate() {
    return this.reservation?.date;
  }

  get time() {
    return this.reservation?.time ?? "";
  }

  get serviceName() {
    return this.reservation?.service?.name ?? "";
  }

  get serviceDuration() {
    return this.reservation?.service?.duration ?? "";
  }

  get serviceDescription() {
    return this.reservation?.service?.description ?? "";
  }

  get servicePrice() {
    return this.reservation?.service?.price ?? "";
  }

  get isCanceled() {
    return this.reservation?.isCanceled ?? "";
  }
}
