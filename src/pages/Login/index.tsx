import { Link } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";
import { Button, Input, Label } from "@/components/ui";

export function Login() {
  return (
    <main className="bg-slate-200 w-full h-screen pt-[25%] landscape:pt-[10%] flex flex-col items-center gap-16">
      <h1 className="text-3xl font-bold flex items-center gap-4 [&>strong]:text-5xl">
        Projects Manager <strong>{<FaProjectDiagram />}</strong>
      </h1>
      <form id="l_form" className="bg-white shadow-lg w-[80%] landscape:max-w-[350px] border-t-4 border-t-slate-700">
        <h2 className="text-center mt-4 text-2xl font-bold">Bem-vindo(a)</h2>
        <div className="p-6 flex flex-col gap-4">
          <Label htmlFor="username">
            <Input type="text" id="username" placeholder="Usuário" />
          </Label>
          <Label htmlFor="password">
            <Input type="password" id="password" placeholder="Senha" />
          </Label>
          <Link to="/Register" className="text-slate-800 text-xs">
            Não possui uma conta? <strong className="font-bold">Clique aqui</strong>
          </Link>
          <Button type="submit">Entrar</Button>
        </div>
      </form>
    </main>
  );
}
