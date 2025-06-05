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
import { closeEditSpeakerModal } from "@/lib/features/SpeakerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { z } from "zod";

const editFormSchema = z.object({
  name: z.string().min(2, "Name should not be less than 2 characters"),
  profession: z.string().min(3, "Enter a valid profession"),
  telNumber: z
    .string()
    .regex(/^\+?\d{10,15}$/, { message: "Invalid phone number" }),
  address: z.string().min(2, "Enter a valid address"),
  biography: z.string().min(10, "Enter a valid biography"),
});

const EditSpeaker = () => {
  const isEditSpeaker = useAppSelector(
    (state) => state.speakerslice.isEditSpeakerOpen
  );
  const speaker = useAppSelector((state) => state.speakerslice.speaker);

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeEditSpeakerModal());
  };

  const editForm = useForm<z.infer<typeof editFormSchema>>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      name: "",
      address: "",
      biography: "",
      profession: "",
      telNumber: "",
    },
  });

  return (
    <ModalContainer
      isOpen={!!isEditSpeaker}
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
                            value={value}
                            onChange={onChange}
                            defaultCountry="ng"
                            inputClassName="!font-open-Sans !h-auto w-full !py-3.5 !px-3 !bg-primary !text-foreground !border-white/20"
                            countrySelectorStyleProps={{
                              buttonClassName:
                                "!h-auto !py-3.5 !bg-secondary !border-white/20 !px-3",
                              dropdownStyleProps: {
                                className:
                                  "!w-[350px] !bg-secondary !text-foreground !hover:bg-secondary",
                                listItemClassName:
                                  "hover:!bg-white/10 selected:!bg-white/20 !transition-colors",
                              },
                            }}
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
