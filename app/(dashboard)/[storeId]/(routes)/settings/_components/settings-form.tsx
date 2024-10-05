"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

export const SettingsForm = ({ initialData }: { initialData: Store }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store preference" />

        <Button variant="destructive" size="icon" onClick={() => {}}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
    </>
  );
};
