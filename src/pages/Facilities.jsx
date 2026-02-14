import {
  FacilitiesContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  InfoGrid,
  InfoCard,
  CardTitle,
  CardDesc
} from './styles/facilities.styles';

const Facilities = () => {
  const facilities = [
    { title: "High-Speed WiFi", desc: "Reliable internet connectivity throughout the premises for your academic needs." },
    { title: "Drinking Water", desc: "24/7 purified water available." },
    { title: "Book Library", desc: "A quiet, well-stocked books for engineering students. Both technical and non-technical books are available."}
  ];

  return (
    <FacilitiesContainer>
      <PageHeader>
        <PageTitle>Our Facilities</PageTitle>
        <PageSubtitle>We provide everything you need for a comfortable and productive student life.</PageSubtitle>
      </PageHeader>
      
      <InfoGrid>
        {facilities.map((f, i) => (
          <InfoCard key={i}>
            <CardTitle>{f.title}</CardTitle>
            <CardDesc>{f.desc}</CardDesc>
          </InfoCard>
        ))}
      </InfoGrid>
    </FacilitiesContainer>
  );
};

export default Facilities;
