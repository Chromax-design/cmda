"use client";

import ModalContainer from "@/components/ModalContainer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { editSpeakerFormSchema } from "@/data/types";
import { closeEditSpeakerModal } from "@/lib/features/SpeakerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const EditSpeaker = () => {
  const { speaker, isEditSpeakerOpen } = useAppSelector(
    (state) => state.speakerslice
  );

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeEditSpeakerModal());
  };

  const editForm = useForm<z.infer<typeof editSpeakerFormSchema>>({
    resolver: zodResolver(editSpeakerFormSchema),
    defaultValues: {
      name: "",
      address: "",
      biography: "",
      profession: "",
      telNumber: "",
    },
  });

  useEffect(() => {
    if (speaker) {
      editForm.reset({
        name: speaker.name,
        profession: speaker.profession,
        telNumber: speaker.mobile,
        address: speaker.address,
        biography: speaker.biography,
      });
    }
  }, [speaker, editForm]);

  return (
    <ModalContainer
      isOpen={!!isEditSpeakerOpen}
      onClose={handleCloseModal}
      className="max-w-2xl lg:max-w-4xl"
    >
      {speaker && (
        <div className="h-full p-6 rounded-2xl space-y-5">
          <h2 className="text-left font-poppins text-2xl capitalize font-medium">
            edit speaker
          </h2>
          <Form {...editForm}>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={editForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="tracking-wide">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Dr Jeff" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="profession"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="tracking-wide">profession</FormLabel>
                    <FormControl>
                      <Input placeholder="chief registrar" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="telNumber"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="tracking-wide">
                      phone number
                    </FormLabel>
                    <FormControl>
                      <Controller
                        name="telNumber"
                        control={editForm.control}
                        render={({ field: { value, onChange } }) => (
                          <PhoneInput
                            defaultCountry="NG"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="tracking-wide">address</FormLabel>
                    <FormControl>
                      <Input placeholder="no 13, detroit lane..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="biography"
                render={({ field }) => (
                  <FormItem className="space-y-2 md:col-span-2">
                    <FormLabel className="tracking-wide">biography</FormLabel>
                    <FormControl>
                      <Textarea className="min-h-50 " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <div className="flex justify-end">
            <button
              className="font-open-Sans capitalize py-2 px-4 rounded-sm text-white font-medium cursor-pointer bg-secondary border-foreground hover:bg-secondary/80"
              onClick={() => handleCloseModal()}
            >
              close
            </button>
          </div>
        </div>
      )}
    </ModalContainer>
  );
};

export default EditSpeaker;
