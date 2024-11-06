import { toaster } from "@/components/ui/toaster"
import { useCallback } from "react";

type Props = {
  title: string;
  description: string;
  type: 'info' | 'warning' | 'success' | 'error';
}

export const useMessage = () => {
  const showMessage = useCallback((props:Props) => {
    const {title, description, type} = props
    toaster.create({
      title,
      description,
      type,
    });
  }, []);
  return {showMessage}
}

