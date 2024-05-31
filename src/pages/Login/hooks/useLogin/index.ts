import { useState } from "react";
import { useConnection } from "@/hooks";
import Cookies from "universal-cookie";

export function useLogin() {
  const { onLogin } = useConnection();
  const cookies = new Cookies();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await onLogin({ username, password });
    if (data) return cookies.set("user", data?.user, { path: "/" });
    setUsername("");
    setPassword("");
  };

  return { username, password, handleSubmit, setUsername, setPassword };
}
