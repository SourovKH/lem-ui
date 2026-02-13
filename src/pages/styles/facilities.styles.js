import styled from 'styled-components';

export const FacilitiesContainer = styled.div``;

export const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeIn 0.8s ease-out;
`;

export const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

export const PageSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const InfoCard = styled.div`
  background-color: var(--white);
  border: 1px solid var(--glass-border);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

export const CardDesc = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;
