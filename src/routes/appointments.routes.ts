import {Router} from 'express';
import {startOfHour } from 'date-fns'
import AppointmentRepository from '../repositories/AppointmentsRepository'
const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentRepository()

appointmentsRouter.post('/', (request, response)=> {
  const { provider, date } = request.body;
  const parsedDate = startOfHour(new Date(date *1000));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(parsedDate);

  if (findAppointmentInSameDate){
    return response.status(400).json({message: "This appointment is already booked"})
  }

  const appointment = appointmentsRepository.create(provider, parsedDate)

  return response.json({appointment});
})

export default appointmentsRouter
