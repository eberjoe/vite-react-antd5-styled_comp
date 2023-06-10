import { BrowserRouter } from 'react-router-dom';
import * as S from './style';
import './style.css';

function App() {
  return (
    <S.StyledMainLayout>
      <BrowserRouter>
        <S.StyledInnerLayout>
          <S.StyledHeader>
            {"Eber's Vite React AntD v5 boilerplate"}
          </S.StyledHeader>
          <S.StyledContent></S.StyledContent>
        </S.StyledInnerLayout>
      </BrowserRouter>
    </S.StyledMainLayout>
  );
}

export default App;
