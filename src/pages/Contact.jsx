import {
  ContactContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  InfoGrid,
  InfoCard,
  CardTitle,
  CardText,
  AddressBox
} from './styles/contact.styles';

const Contact = () => {
  return (
    <ContactContainer>
      <PageHeader>
        <PageTitle>Contact Us</PageTitle>
        <PageSubtitle>Reach out for inquiries or to visit the premises.</PageSubtitle>
      </PageHeader>

      <InfoGrid>
        <InfoCard>
          <CardTitle>Contact Details</CardTitle>
          <CardText><strong>Phone:</strong> +91 98765 43210</CardText>
          <CardText><strong>Alternative:</strong> +91 87654 32109</CardText>
          <CardText><strong>Email:</strong> contact@lempg.com</CardText>
        </InfoCard>

        <InfoCard>
          <CardTitle>Our Address</CardTitle>
          <AddressBox>
            <CardText><strong>LEM - Lokenath Engineering Mess</strong></CardText>
            <CardText>123 Student Avenue, Near Engineering College,</CardText>
            <CardText>Salt Lake, Sector V,</CardText>
            <CardText>Kolkata, West Bengal - 700091</CardText>
          </AddressBox>
        </InfoCard>
      </InfoGrid>
    </ContactContainer>
  );
};

export default Contact;
