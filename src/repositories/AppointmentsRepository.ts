import Appointment from "../models/Appointments";
import { isEqual } from "date-fns";
class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointmentInSameDate = this.appointments.find((appointment) =>
      isEqual(date, appointment.date)
    );

    return findAppointmentInSameDate || null;
  }

  public create(provider: string, date: Date) {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
