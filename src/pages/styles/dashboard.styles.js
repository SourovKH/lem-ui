import styled from 'styled-components';

export const DashboardContainer = styled.div``;

export const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--text-primary);
  text-align: center;
  animation: fadeIn 0.8s ease-out;
`;

export const ContentBox = styled.div`
  background-color: var(--white);
  border: 1px solid var(--glass-border);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
  text-align: center;
`;
