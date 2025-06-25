import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";

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

export type User = {
  id: string;
  username: string;
  email: string;
  imageUrl: string;
};

export type Tab = {
  id: number;
  day: string;
  date: string;
};

export type NavLink = {
  id: number;
  link: string;
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

export type BtnProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "submit" | "button";
};

export const formSchema = z.object({
  name: z.string().min(2, "Name should not be less than 2 characters"),
  email: z.string().email("Invalid email address"),
  textArea: z
    .string()
    .min(5, "Message should not be less than 5 characters long"),
});

export const editSpeakerFormSchema = z.object({
  name: z.string().min(2, "Name should not be less than 2 characters"),
  profession: z.string().min(3, "Enter a valid profession"),
  telNumber: z
    .string()
    .regex(/^\+?\d{10,15}$/, { message: "Invalid phone number" }),
  address: z.string().min(2, "Enter a valid address"),
  biography: z.string().min(10, "Enter a valid biography"),
});

export type FormData = z.infer<typeof formSchema>;

export type FormFieldType = {
  type?: "text";
  placeholder: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
};

export const subscriptionSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export type subscriptionData = z.infer<typeof subscriptionSchema>;

export type DashboardLinkTypes = {
  id: number;
  link: string;
  title: string;
};

export type userTypes = {
  id: string;
  username: string;
  email: string;
  imageUrl: string;
  role: "user" | "admin";
};
