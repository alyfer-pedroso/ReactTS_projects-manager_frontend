import { Link } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";
import { Button, Input, Label } from "@/components/ui";

export function Register() {
  return (
    <main className="bg-slate-200 w-full h-screen pt-[25%] landscape:pt-[10%] flex flex-col items-center gap-16">
      <h1 className="text-3xl font-bold flex items-center gap-4 [&>strong]:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
        Projects Manager <strong>{<FaProjectDiagram />}</strong>
      </h1>
      <form id="l_form" className="bg-white shadow-lg w-[80%] landscape:max-w-[350px] border-t-4 border-t-slate-700">
        <h2 className="text-center mt-4 text-2xl font-bold">Cadastrar-se</h2>
        <div className="p-6 flex flex-col gap-4">
          <Label htmlFor="username">
            <Input type="text" id="username" placeholder="Usuário" />
          </Label>
          <Label htmlFor="password">
            <Input type="password" id="password" placeholder="Senha" />
          </Label>
          <Label htmlFor="c_password">
            <Input type="password" id="c_password" placeholder="Confirmar senha" />
          </Label>
          <Link to="/Login" className="text-slate-800 text-xs">
            Já possui uma conta? <strong className="font-bold">Clique aqui</strong>
          </Link>
          <Button type="submit">Registrar</Button>
        </div>
      </form>
    </main>
  );
}
