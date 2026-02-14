import { Outlet, Link } from 'react-router-dom';
import {
  LayoutContainer,
  Header,
  LogoLink,
  AppLogo,
  TitleContainer,
  PGName,
  NavMenu,
  StyledNavLink,
  EnquireButton,
  ContentArea
} from './styles/main-layout.styles';

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Header>
        <LogoLink to="/">
          <AppLogo src="/logo.png" alt="LEM Logo" />
        </LogoLink>
        
        <TitleContainer>
          <PGName>LEM - Lokenath Engineering Mess</PGName>
        </TitleContainer>
        
        <NavMenu>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/facilities">Facilities</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavMenu>

        <Link to="/contact">
          <EnquireButton>Enquire Now</EnquireButton>
        </Link>
      </Header>
      
      <ContentArea>
        <Outlet />
      </ContentArea>
    </LayoutContainer>
  );
};

export default MainLayout;
