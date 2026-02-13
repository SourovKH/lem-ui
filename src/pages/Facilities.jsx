import * as S from './styles/facilities.styles';

const Facilities = () => {
  const facilities = [
    { title: "Nutritious Food", desc: "Pure veg and non-veg meals served three times a day with high hygiene standards." },
    { title: "High-Speed WiFi", desc: "Reliable internet connectivity throughout the premises for your academic needs." },
    { title: "Laundry Service", desc: "Regular laundry and cleaning services to keep your focus on studies." },
    { title: "24/7 Security", desc: "CCTV surveillance and secure entry points for your peace of mind." },
    { title: "Power Backup", desc: "Uninterrupted power supply for late-night study sessions." },
    { title: "Clean Drinking Water", desc: "RO purified water available around the clock." }
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
