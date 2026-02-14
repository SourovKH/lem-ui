import * as S from './styles/facilities.styles';

const Facilities = () => {
  const facilities = [
    { title: "High-Speed WiFi", desc: "Reliable internet connectivity throughout the premises for your academic needs." },
    { title: "Drinking Water", desc: "24/7 purified water available." },
    { title: "Book Library", desc: "A quiet, well-stocked books for engineering students. Both technical and non-technical books are available."}
  ];

  return (
    <S.FacilitiesContainer>
      <S.PageHeader>
        <S.PageTitle>Our Facilities</S.PageTitle>
        <S.PageSubtitle>We provide everything you need for a comfortable and productive student life.</S.PageSubtitle>
      </S.PageHeader>
      
      <S.InfoGrid>
        {facilities.map((f, i) => (
          <S.InfoCard key={i}>
            <S.CardTitle>{f.title}</S.CardTitle>
            <S.CardDesc>{f.desc}</S.CardDesc>
          </S.InfoCard>
        ))}
      </S.InfoGrid>
    </S.FacilitiesContainer>
  );
};

export default Facilities;
