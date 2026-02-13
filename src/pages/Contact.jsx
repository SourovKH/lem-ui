import * as S from './styles/contact.styles';

const Contact = () => {
  return (
    <S.ContactContainer>
      <S.PageHeader>
        <S.PageTitle>Contact Us</S.PageTitle>
        <S.PageSubtitle>Reach out for inquiries or to visit the premises.</S.PageSubtitle>
      </S.PageHeader>

      <S.InfoGrid>
        <S.InfoCard>
          <S.CardTitle>Contact Details</S.CardTitle>
          <S.CardText><strong>Phone:</strong> +91 98765 43210</S.CardText>
          <S.CardText><strong>Alternative:</strong> +91 87654 32109</S.CardText>
          <S.CardText><strong>Email:</strong> contact@lempg.com</S.CardText>
        </S.InfoCard>

        <S.InfoCard>
          <S.CardTitle>Our Address</S.CardTitle>
          <S.AddressBox>
            <S.CardText><strong>LEM - Lokenath Engineering Mess</strong></S.CardText>
            <S.CardText>123 Student Avenue, Near Engineering College,</S.CardText>
            <S.CardText>Salt Lake, Sector V,</S.CardText>
            <S.CardText>Kolkata, West Bengal - 700091</S.CardText>
          </S.AddressBox>
        </S.InfoCard>
      </S.InfoGrid>
    </S.ContactContainer>
  );
};

export default Contact;
