class Appointment {
  constructor(patientName, startTime, endTime, priority, specialty) {
    this.patientName = patientName;
    this.startTime = startTime;
    this.endTime = endTime;
    this.priority = priority; 
    this.specialty = specialty;
  }
}
class Scheduler {
  constructor() {
    this.doctorSchedules = {}; 
    this.emergencyQueue = []; 
  }
  addDoctor(name) {
    this.doctorSchedules[name] = [];
  }
  scheduleAppointment(doctorName, appointment) {
    if (!this.doctorSchedules[doctorName]) return "Doctor not found";
    this.doctorSchedules[doctorName].push(appointment);
   
    this.doctorSchedules[doctorName].sort((a, b) => a.startTime - b.startTime);
  }
  addEmergency(appointment) {
    this.emergencyQueue.push(appointment);
    this.emergencyQueue.sort((a, b) => a.priority - b.priority); 
  }
}

let scheduler = new Scheduler();
scheduler.addDoctor("Dr.Fana");
let appt = new Appointment("Hellen", new Date("2025-06-01T10:00"), new Date("2025-06-01T10:30"), 3, "Dermatology");
scheduler.scheduleAppointment("Dr.Fana", appt);
let emergency = new Appointment("EmergencyPatient", new Date(), new Date(Date.now() + 30 * 60000), 1, "Cardiology");
scheduler.addEmergency(emergency);









