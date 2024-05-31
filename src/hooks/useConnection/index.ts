import { apiQAS } from "@/lib/api";
import { useToast } from "@/components/ui";
import { getErrorMessage } from "@/functions";

export const useConnection = () => {
  const { toast } = useToast();

  const onLogin = async ({ ...props }: { username: string; password: string }) => {
    try {
      const { data } = await apiQAS.post(`users/login`, props);
      if (data?.error) {
        toast({ title: data?.message, description: data?.error?.txt, variant: "destructive" });
        return;
      }
      toast({ title: "Sucesso!", description: data?.message, variant: "successful" });
      return data?.data;
    } catch (error) {
      toast({ description: getErrorMessage(error), variant: "destructive" });
    }
  };

  const onRegister = async ({ ...props }: { username: string; password: string }) => {
    try {
      const { data } = await apiQAS.post(`users/register`, props);
      if (data?.error) {
        toast({ title: data?.message, description: data?.error?.txt, variant: "destructive" });
        return;
      }
      toast({ title: "Sucesso!", description: data?.message, variant: "successful" });
      return data?.data;
    } catch (error) {
      toast({ description: getErrorMessage(error), variant: "destructive" });
    }
  };

  return { onLogin, onRegister };
};
