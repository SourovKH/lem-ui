import { Outlet, Link } from 'react-router-dom';
import * as S from './styles/main-layout.styles';

const MainLayout = () => {
  return (
    <S.LayoutContainer>
      <S.Header>
        <S.LogoLink to="/">
          <S.AppLogo src="/logo.png" alt="LEM Logo" />
        </S.LogoLink>
        
        <S.TitleContainer>
          <S.PGName>LEM - Lokenath Engineering Mess</S.PGName>
        </S.TitleContainer>
        
        <S.NavMenu>
          <S.StyledNavLink to="/">Home</S.StyledNavLink>
          <S.StyledNavLink to="/facilities">Facilities</S.StyledNavLink>
          <S.StyledNavLink to="/contact">Contact</S.StyledNavLink>
        </S.NavMenu>

        <Link to="/contact">
          <S.EnquireButton>Enquire Now</S.EnquireButton>
        </Link>
      </S.Header>
      
      <S.ContentArea>
        <Outlet />
      </S.ContentArea>
    </S.LayoutContainer>
  );
};

export default MainLayout;
