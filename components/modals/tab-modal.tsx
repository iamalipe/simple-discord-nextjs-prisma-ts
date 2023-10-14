"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Hash, X, Volume1 } from "lucide-react";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";

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

export const TabModal = () => {
  const { isOpen, onClose, type, data } = useModal();

  return (
    <Dialog.Root open={false}>
      {/* <Dialog.Root open={true} onOpenChange={handleClose}> */}
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 flex w-[calc(100%-50px)] translate-x-[-50%] translate-y-[-50%] flex-col rounded-daisy-box bg-base-300 p-6 text-base-content sm:w-[500px] lg:w-[800px]">
          <Dialog.Close className="absolute right-0 top-0 m-2 rounded-daisy-btn p-1 hover:bg-base-content hover:text-base-300">
            <X className="h-4 w-4" />
          </Dialog.Close>
          {/* <div>
            <Dialog.Title className="text-2xl font-bold">
              Create Channel
            </Dialog.Title>
            <span>in</span>
          </div> */}
          <Tabs.Root className="flex gap-2">
            <Tabs.List className="flex w-[180px] flex-none flex-col gap-1">
              <Tabs.Trigger
                value="h1"
                className="rounded-daisy-btn px-2 py-1 text-left hover:bg-base-content/5 data-[state=active]:bg-base-content/25"
              >
                hello 1
              </Tabs.Trigger>
              <Tabs.Trigger
                value="h2"
                className="rounded-daisy-btn px-2 py-1 text-left hover:bg-base-content/5 data-[state=active]:bg-base-content/25"
              >
                hello 2
              </Tabs.Trigger>
              <Tabs.Trigger
                value="h3"
                className="rounded-daisy-btn px-2 py-1 text-left hover:bg-base-content/5 data-[state=active]:bg-base-content/25"
              >
                hello 3
              </Tabs.Trigger>
              <Tabs.Trigger
                value="h4"
                className="rounded-daisy-btn px-2 py-1 text-left hover:bg-base-content/5 data-[state=active]:bg-base-content/25"
              >
                hello 4
              </Tabs.Trigger>
              <Tabs.Trigger
                value="h5"
                className="rounded-daisy-btn px-2 py-1 text-left hover:bg-base-content/5 data-[state=active]:bg-base-content/25"
              >
                hello 5
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="h1" className="flex-1 bg-base-100">
              hello 1 Content
            </Tabs.Content>
            <Tabs.Content value="h2" className="flex-1 bg-base-100">
              hello 2 Content
            </Tabs.Content>
            <Tabs.Content value="h3" className="flex-1 bg-base-100">
              hello 3 Content
            </Tabs.Content>
            <Tabs.Content value="h4" className="flex-1 bg-base-100">
              hello 4 Content
            </Tabs.Content>
            <Tabs.Content value="h5" className="flex-1 bg-base-100">
              hello 5 Content
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
