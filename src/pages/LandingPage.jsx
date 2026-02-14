import { Link } from 'react-router-dom';
import * as S from './styles/landing-page.styles';

const LandingPage = () => {
  const highlights = [
    { label: "5 mins to station" },
    { label: "Senior guidance" },
  ];

  return (
    <S.HeroSection>
      <S.HeroTitle>A Home Away from Home for Students</S.HeroTitle>
      <S.HeroSubtitle>
        Focus on your studies while we take care of your living. Lokenath Engineering Mess (LEM) provides premium accommodation with all essential student facilities.
      </S.HeroSubtitle>
      
      <S.HighlightsBar>
        {highlights.map((h, i) => (
          <S.HighlightItem key={i}>
            <S.HighlightLabel>{h.label}</S.HighlightLabel>
          </S.HighlightItem>
        ))}
      </S.HighlightsBar>

      <S.CtaGroup>
        <Link to="/facilities">
          <S.PrimaryButton>View Facilities</S.PrimaryButton>
        </Link>
        <Link to="/contact">
          <S.SecondaryButton>Get Directions</S.SecondaryButton>
        </Link>
      </S.CtaGroup>
    </S.HeroSection>
  );
};

export default LandingPage;
