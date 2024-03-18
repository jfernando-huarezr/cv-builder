import { v4 as uuidv4 } from "uuid";

export const resumeInfo = {
  personalData: {
    id: uuidv4(),
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "+51999999999",
    country: "Peru",
  },

  education: [
    {
      id: uuidv4(),
      degree: "Bachelor",
      school: "PUCP",
      country: "Peru",
      startDate: "2019-03",
      endDate: "2023-07",
    },
  ],

  work: [
    {
      id: uuidv4(),
      position: "Technical",
      company: "Interamsa",
      location: "Lima, Peru",
      startDate: "2019-03",
      endDate: "2023-03",
    },
  ],
};
