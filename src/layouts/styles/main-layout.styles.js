import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--glass-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const AppLogo = styled.img`
  height: 48px;
  width: auto;
`;

export const TitleContainer = styled.div`
  text-align: center;
`;

export const PGName = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-primary);
  opacity: 0.9;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 900px) {
    gap: 1.5rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  padding: 0.5rem 0.25rem;
  border-bottom: 2px solid transparent;

  &:hover, &.active {
    color: var(--accent-primary);
    border-bottom-color: var(--accent-primary);
  }
`;

export const ContentArea = styled.main`
  flex: 1;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const EnquireButton = styled.button`
  background-color: var(--accent-primary);
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--accent-hover);
    box-shadow: 0 8px 20px -5px rgba(79, 70, 229, 0.4);
  }
`;
