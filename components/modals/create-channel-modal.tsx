"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Hash, X, Volume1 } from "lucide-react";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";

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
import { ChannelType } from "@prisma/client";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Channel name is required.",
  }),
  type: z.nativeEnum(ChannelType),
});
type formSchemaType = z.infer<typeof formSchema>;

export const CreateChannelModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "createChannel";

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "TEXT",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/channels", {
        name: values.name,
        type: values.type,
        categoryId: data?.category?.id,
        serverId: data?.category?.serverId,
      });
      toast.success("Channel created.");
      form.reset();
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
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
            <Dialog.Title className="text-2xl font-bold">
              Create Channel
            </Dialog.Title>
            <span>in {data?.category?.name}</span>
          </div>
          <Form {...form}>
            <form
              className="mt-4 flex flex-col"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Channel Type</FormLabel>
                    <FormControl>
                      <>
                        <label
                          htmlFor={field.name + ChannelType.TEXT}
                          className={cn([
                            "mt-1 flex items-center gap-2 rounded-daisy-btn bg-base-content/5 px-2 py-1 hover:bg-base-100",
                            field.value === ChannelType.TEXT &&
                              "bg-base-content/20 hover:bg-base-content/20",
                          ])}
                        >
                          <Hash size={28} className="flex-none" />
                          <div className="flex flex-1 select-none flex-col">
                            <span className="text-lg font-bold">Text</span>
                            <span className="text-xs">
                              Send messages, images, GIFs, emoji, opinions, puns
                            </span>
                          </div>
                          <input
                            id={field.name + ChannelType.TEXT}
                            disabled={isLoading}
                            type="radio"
                            className="daisy-radio flex-none"
                            value={ChannelType.TEXT}
                            checked={field.value === ChannelType.TEXT}
                            onChange={(e) => field.onChange(e.target.value)}
                            name={field.name}
                          />
                        </label>
                        <label
                          htmlFor={field.name + ChannelType.AUDIO_VIDEO}
                          className={cn([
                            "mt-2 flex items-center gap-2 rounded-daisy-btn bg-base-content/5 px-2 py-1 hover:bg-base-100",
                            field.value === ChannelType.AUDIO_VIDEO &&
                              "bg-base-content/20 hover:bg-base-content/20",
                          ])}
                        >
                          <Volume1 size={28} className="flex-none" />
                          <div className="flex flex-1 select-none flex-col">
                            <span className="text-lg font-bold">Voice</span>
                            <span className="text-xs">
                              Hang out together with voice, video and screen
                              share
                            </span>
                          </div>
                          <input
                            id={field.name + ChannelType.AUDIO_VIDEO}
                            disabled={isLoading}
                            type="radio"
                            className="daisy-radio flex-none"
                            value={ChannelType.AUDIO_VIDEO}
                            checked={field.value === ChannelType.AUDIO_VIDEO}
                            onChange={(e) => field.onChange(e.target.value)}
                            name={field.name}
                          />
                        </label>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Server name</FormLabel>
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
                className="daisy-btn daisy-btn-primary daisy-btn-sm ml-auto mt-6 w-40 sm:daisy-btn-md"
              >
                Create
              </button>
            </form>
          </Form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
