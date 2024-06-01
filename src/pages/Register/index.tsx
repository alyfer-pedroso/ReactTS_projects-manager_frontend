import { Link } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";

import { Button, Input, Label } from "@/components/ui";

import * as S from "./styles";
import { useRegister } from "./hooks";

export function Register() {
  const { username, password, confirmPassword, setConfirmPassword, handleSubmit, setUsername, setPassword } = useRegister();

  return (
    <S.Main>
      <S.Title>
        Projects Manager <strong>{<FaProjectDiagram />}</strong>
      </S.Title>

      <S.Form id="l_form" onSubmit={handleSubmit}>
        <S.Subtitle>Cadastrar-se</S.Subtitle>

        <S.Container>
          <Label htmlFor="username">
            <Input type="text" id="username" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Label>
          <Label htmlFor="password">
            <Input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Label>
          <Label htmlFor="c_password">
            <Input
              type="password"
              id="c_password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Label>
          <Link to="/Login" className="text-slate-800 text-xs">
            Já possui uma conta? <strong className="font-bold">Clique aqui</strong>
          </Link>
          <Button type="submit">Registrar</Button>
        </S.Container>
      </S.Form>
    </S.Main>
  );
}
