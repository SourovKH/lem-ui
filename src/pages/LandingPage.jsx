import { Link } from 'react-router-dom';
import {
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  HighlightsBar,
  HighlightItem,
  HighlightLabel,
  CtaGroup,
  PrimaryButton,
  SecondaryButton
} from './styles/landing-page.styles';

const LandingPage = () => {
  const highlights = [
    { label: "5 mins to station" },
    { label: "Senior guidance" },
  ];

  return (
    <HeroSection>
      <HeroTitle>A Home Away from Home for Students</HeroTitle>
      <HeroSubtitle>
        Focus on your studies while we take care of your living. Lokenath Engineering Mess (LEM) provides premium accommodation with all essential student facilities.
      </HeroSubtitle>
      
      <HighlightsBar>
        {highlights.map((h, i) => (
          <HighlightItem key={i}>
            <HighlightLabel>{h.label}</HighlightLabel>
          </HighlightItem>
        ))}
      </HighlightsBar>

      <CtaGroup>
        <Link to="/facilities">
          <PrimaryButton>View Facilities</PrimaryButton>
        </Link>
        <Link to="/contact">
          <SecondaryButton>Get Directions</SecondaryButton>
        </Link>
      </CtaGroup>
    </HeroSection>
  );
};

export default LandingPage;
