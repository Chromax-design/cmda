"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useRegisterUserMutation } from "@/lib/apis/userApiSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(5, { message: "Password should not be less than 5 characters long" }),
  isAdmin: z
    .boolean({ message: "Enter a valid value" })
    .default(false)
    .optional(),
});

const CreateNewUser = () => {
  const [registerUser, { isLoading, isSuccess, error }] =
    useRegisterUserMutation();
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      isAdmin: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // await registerUser(values);
    console.log(error);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Add User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription className="sr-only">
            Create user form
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4 mt-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="capitalize">username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-3 rounded-none block h-auto"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="capitalize">email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-3 rounded-none block h-auto"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="capitalize">password</FormLabel>
                  <FormControl>
                    <div className="flex justify-between items-center">
                      <Input
                        {...field}
                        className="p-3 rounded-none block h-auto"
                        type={showPwd ? "text" : "password"}
                      />
                      <Button
                        variant={"default"}
                        className="h-full rounded-none"
                        type="button"
                        onClick={() => setShowPwd(!showPwd)}
                      >
                        {showPwd ? <IoEyeOff /> : <IoEye />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isAdmin"
              render={({ field }) => (
                <FormItem className="space-y-2 flex gap-4 items-center">
                  <FormLabel className="capitalize">isAdmin?</FormLabel>
                  <FormControl>
                    <Switch
                      onCheckedChange={field.onChange}
                      checked={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="submit" className="p-3 capitalize">
                  save changes
                </Button>
              </DialogClose>

              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewUser;
