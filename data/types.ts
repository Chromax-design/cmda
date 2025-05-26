export type Speaker = {
  id: string;
  name?: string;
  images: string[];
  dob?: string;
  profession?: string;
  mobile?: string;
  address?: string;
  biography?: string;
  gender?: "Male" | "Female";
  nationality?: string;
  affiliation?: string;
  hobbies?: string[];
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
  speakers: Speaker;
  day: EventDay;
  picture: string;
};
