import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";
const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.2rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;
const StyledDiv = styled.div`
  margin-left: 1rem;
`;
const Guest = styled.div`
  font-weight: 500;
`;

const TodayItem = ({ activity }) => {
  const { id, status, guests } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">неподтв..</Tag>}
      {status === "checked-in" && <Tag type="blue">Зарегист..</Tag>}
      <Flag src={guests.countryFlag} alt={`flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <StyledDiv>
        {status === "unconfirmed" && (
          <Button
            size="small"
            variation="primary"
            as={Link}
            to={`/checkin/${id}`}
          >
            зарегистрировать
          </Button>
        )}
        {status === "checked-in" && <CheckoutButton bookingId={id} />}
      </StyledDiv>
    </StyledTodayItem>
  );
};

export default TodayItem;
