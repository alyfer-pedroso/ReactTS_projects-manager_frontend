import { FaProjectDiagram } from "react-icons/fa";
import * as S from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <S.Header>
      <S.SloganContainer>
        {<FaProjectDiagram />}
        <h1>Projects Manager</h1>
      </S.SloganContainer>

      <S.PagesContainer>
        <S.Pages>
          <S.Page>
            <Link to="/Home">Home</Link>
          </S.Page>
          <S.Page>
            <Link to="/Projects">Projects</Link>
          </S.Page>
        </S.Pages>
      </S.PagesContainer>
    </S.Header>
  );
}
