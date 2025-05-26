export type Speaker = {
  id: number;
  name: string;
  image: string;
  dob: string;
  profession: string;
  mobile: string;
  address: string;
  biography: string;
  gender: "Male" | "Female";
  nationality: string;
  affiliation: string;
  hobbies: string[];
};

export type Tab = {
  id: number;
  day: string;
  date: string;
};

export type EventDay = "day 1" | "day 2" | "day 3" | "day 4";

export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  speakers: { name: string; profession: string; images: string[] };
  day: EventDay;
  picture: string;
};
