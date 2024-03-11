import { v4 as uuidv4 } from "uuid";

export const resumeInfo = [
  {
    id: "Personal Data",
    data: [
      {
        id: uuidv4(),
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "+51999999999",
        country: "Peru",
      },
    ],
  },

  {
    id: "Education",
    data: [
      {
        id: uuidv4(),
        degree: "Bachelor",
        school: "PUCP",
        country: "Peru",
        startDate: "March 2019",
        endDate: "July 2015",
      },

      {
        id: uuidv4(),
        degree: "Technical",
        school: "ISIL",
        country: "Peru",
        startDate: "March 2023",
        endDate: "Present",
      },
    ],
  },

  {
    id: "Experience",
    data: [
      {
        id: uuidv4(),
        position: "Technical",
        company: "Interamsa",
        startDate: "January 2023",
        endDate: "December 2023",
      },
    ],
  },
];
