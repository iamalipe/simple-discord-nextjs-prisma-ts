"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Hash, X } from "lucide-react";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";

import { ChannelType } from "@prisma/client";

import { Input } from "@/components/ui/input";
import { useModal } from "@/hooks/use-modal-store";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useOrigin } from "@/hooks/use-origin";

const formSchema = z.object({
  email: z.string().email(),
});
type formSchemaType = z.infer<typeof formSchema>;

export const InviteModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const origin = useOrigin();

  const [copied, setCopied] = useState(false);

  const isModalOpen = isOpen && type === "invite";
  const inviteLink = `${origin}/invite/${data?.server?.inviteCode}`;

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // await axios.post("/api/channels", {
      //   name: values.name,
      //   type: values.type,
      //   categoryId: data?.category?.id,
      //   serverId: data?.category?.serverId,
      // });
      toast.success("Invite created.");
      // form.reset();
      // router.refresh();
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setCopied(false);
    form.reset();
    onClose();
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 flex w-[calc(100%-50px)] translate-x-[-50%] translate-y-[-50%] flex-col rounded-daisy-box bg-base-300 p-6 text-base-content sm:w-[500px]">
          <Dialog.Close className="absolute right-0 top-0 m-2 rounded-daisy-btn p-1 hover:bg-base-content hover:text-base-300">
            <X className="h-4 w-4" />
          </Dialog.Close>
          <div>
            <Dialog.Title className="text-lg font-bold">
              Invite People
            </Dialog.Title>
            <span>in {data?.server?.name}</span>
          </div>
          <div className="mt-4 flex flex-col">
            <label className="px-1 font-medium sm:text-lg">
              Send a server invite link to a friend
            </label>
            <div className="daisy-input daisy-input-bordered daisy-input-sm flex items-center !p-0 sm:daisy-input-md">
              <p className="ml-2 flex-1 overflow-hidden text-ellipsis whitespace-nowrap pl-2">
                {inviteLink}
              </p>
              <button
                onClick={onCopy}
                className="daisy-btn daisy-btn-primary daisy-btn-xs mx-2 flex-none sm:daisy-btn-sm"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          <Form {...form}>
            <form
              className="mt-4 flex flex-col"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Or, Enter there email address</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="daisy-input-sm sm:daisy-input-md"
                        placeholder="Enter server name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                disabled={isLoading}
                type="submit"
                className="daisy-btn daisy-btn-primary daisy-btn-xs ml-auto mt-6 sm:daisy-btn-sm"
              >
                Send invitation
              </button>
            </form>
          </Form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
