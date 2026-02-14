import styled from 'styled-components';

export const HeroSection = styled.section`
  padding-top: 2rem;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 0.8s ease-out;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    letter-spacing: -0.02em;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 3.5rem;
  animation: fadeIn 0.8s ease-out 0.1s both;
`;

export const HighlightsBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;
  animation: fadeIn 1s ease-out 0.2s both;
`;

export const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--white);
  border: 1px solid var(--glass-border);
  border-radius: 50px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--accent-primary);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const HighlightLabel = styled.span`
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
`;

export const CtaGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background-color: var(--accent-primary);
  color: white;
  border: none;
  padding: 1rem 3rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--accent-hover);
    box-shadow: 0 8px 20px -5px rgba(79, 70, 229, 0.4);
  }
`;

export const SecondaryButton = styled.button`
  background-color: var(--white);
  color: var(--text-primary);
  border: 1px solid var(--glass-border);
  padding: 1rem 3rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent-primary);
    background-color: #f1f5f9;
  }
`;
