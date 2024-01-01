"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function FormSubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { pending } = useFormStatus();

  return (
    <Button {...props} type="submit" disabled={props.disabled || pending}>
      <span className="flex items-center justify-center gap-1">
        {pending && <Loader2 size={16} className="animate-spin" />}
        {props.children}
      </span>
    </Button>
  );
}
