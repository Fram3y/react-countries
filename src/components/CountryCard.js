import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  return (
    <Card className="p-0 mt-4" style={{ width: '26rem' }}>
      <Link to={`/country/${props.name}`}>
        <Card.Img style={{ height: '14rem' }} src={props.flag} variant="top" />
        <Card.Body>
          <Card.Title className="text-secondary text-decoration-underline">{props.name}</Card.Title>
          <p className="text-secondary text-decoration-underline">{props.region}</p>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CountryCard;
