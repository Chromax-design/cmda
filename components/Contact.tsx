import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Btn from "./Btn";
import { useForm } from "react-hook-form";
import { FormData, formSchema } from "@/data/types";
import { zodResolver } from "@hookform/resolvers/zod"; //npm i @hookform/resolvers
import FormField from "./FormField";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <section
      className="max-w-5xl mx-auto py-20 space-y-10 px-3"
      id="contact us"
    >
      <div className="flex flex-col gap-4 items-center">
        <Subheading subheading="contact us" />
        <Heading heading="you can write to us here" />
      </div>
      <div className="bg-[#0E0A17] p-4 md:p-10 rounded-3xl shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <FormField
              register={register("name")}
              placeholder="your name"
              type="text"
              error={errors.name}
            />
            <FormField
              register={register("email")}
              placeholder="your email"
              type="text"
              error={errors.email}
            />
          </div>
          <FormField
            placeholder="your message"
            error={errors.textArea}
            register={register("textArea")}
          />
          <Btn type="submit">submit now</Btn>
        </form>
      </div>
    </section>
  );
};

export default Contact;
