import { useState } from "react";

import { useConnection } from "@/hooks";
import { useToast } from "@/components/ui";

export function useRegister() {
  const { onRegister } = useConnection();
  const { toast } = useToast();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) return toast({ title: "Error!", description: "As senhas devem ser iguais!", variant: "destructive" });

    const data = await onRegister({ username, password });
    if (data) {
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return { username, password, confirmPassword, setConfirmPassword, handleSubmit, setUsername, setPassword };
}
