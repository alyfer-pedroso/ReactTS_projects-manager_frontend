import { Link } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";

import { Button, Input, Label } from "@/components/ui";

import * as S from "./styles";
import { useLogin } from "./hooks";

export function Login() {
  const { username, password, handleSubmit, setUsername, setPassword } = useLogin();
  return (
    <S.Main>
      <S.Title>
        Projects Manager <strong>{<FaProjectDiagram />}</strong>
      </S.Title>

      <S.Form id="l_form" onSubmit={handleSubmit}>
        <S.Subtitle>Bem-vindo(a)</S.Subtitle>

        <S.Container>
          <Label htmlFor="username">
            <Input type="text" id="username" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Label>
          <Label htmlFor="password">
            <Input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Label>

          <Link to="/Register" className="text-slate-800 text-xs">
            Não possui uma conta? <strong className="font-bold">Clique aqui</strong>
          </Link>

          <Button type="submit">Entrar</Button>
        </S.Container>
      </S.Form>
    </S.Main>
  );
}
