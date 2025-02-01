import { useRef } from "react";
import { Toast } from "primereact/toast";

export const useToast = () => {
  const toast = useRef<Toast>(null);

  const showToast = (
    severity: "success" | "info" | "warn" | "error" | "secondary" | "contrast" | undefined,
    summary: string,
    detail: string
  ) => {
    toast.current?.show({ severity, summary, detail });
  };

  return { toast, showToast };
};
