"use client";

import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";

import { Avatar } from "@/components/ui/avatar";
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
import { imageKitUpload } from "@/lib/image-kit-upload";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required.",
  }),
  images: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
});
type formSchemaType = z.infer<typeof formSchema>;

export const CreateServerModal = () => {
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isModalOpen = isOpen && type === "createServer";

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      images: undefined,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const fileUploadRes = await imageKitUpload({
        file: values.images,
        fileName: "server1234",
        folder: "server",
      });
      const serverRes = await axios.post("/api/servers", {
        name: values.name,
        imageUrl: fileUploadRes.url,
      });
      console.log("serverRes", serverRes);
      form.reset();
      if (fileInputRef.current) fileInputRef.current.value = "";
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
          <div className="text-center">
            <Dialog.Title className="text-2xl font-bold">
              Customize your server
            </Dialog.Title>
            <Dialog.Description className="mt-4">
              Give your server a personality with a name and an image. You can
              always change it later.
            </Dialog.Description>
          </div>
          <Form {...form}>
            <form
              className="mt-4 flex flex-col"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Avatar className="mx-auto mb-4 h-24 w-24 sm:h-32 sm:w-32" />
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Server Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        disabled={isLoading}
                        className="daisy-file-input-sm sm:daisy-file-input-md"
                        placeholder="Select server image"
                        onChange={(e) =>
                          field.onChange(e.target.files && e.target.files[0])
                        }
                        ref={fileInputRef}
                      />
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
