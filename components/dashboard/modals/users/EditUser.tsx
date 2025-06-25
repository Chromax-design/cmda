"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
  isAdmin: z.boolean(),
});

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isAdmin: false,
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-4 mt-4">
        <FormField
          control={form.control}
          name="isAdmin"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormControl>
                <Switch onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default EditUser;
