import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Importing Bootstrap Elements
import {
  Container,
  Row,
  Col,
  Spinner,
  Image,
  Card,
} from "react-bootstrap";

// Import Components

const WEATHER_URL = "http://api.weatherapi.com/v1/current.json";
const API_KEY = "cab1bb6537e0416383c151819230611";

const SingleCountry = () => {
  let { name } = useParams();

  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  // Set Country
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  // Set Weather
  useEffect(() => {
    axios
      .get(`${WEATHER_URL}?key=${API_KEY}&q=${name}&aqi=no`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  if (!country) {
    return <Spinner animation="grow" />;
  }

  if (!weather) {
    return <Spinner animation="grow" />;
  }

  return (
    <Container className="p-0">
      <Card className="my-3">
        <Row>
          {/* Flag */}
          <Col>
            <Image className="m-4" src={country.flags.png} />
          </Col>

          {/* Information */}
          <Col className="mt-4">
            <Card.Title>{country.name.official}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {country.region}
            </Card.Subtitle>
            <Card.Text>
              <p className="m-0 py-1">
                <b>Capital City: {country.capital}</b>
              </p>
              <p className="m-0 py-1">
                <b>Population: {country.population} People</b>
              </p>
              <p className="m-0 py-1">
                <b>Currency: {Object.keys(country.currencies)[0]}</b>
              </p>
            </Card.Text>
          </Col>

          {/* Weather Info */}
          <Col className="mt-4">
            <Card.Title>Current Weather</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Real Time Information
            </Card.Subtitle>
            <Card.Text>
              <p className="m-0">
                <b>Current Conditions: {weather.current.condition.text}</b>
                <img
                  src={weather.current.condition.icon}
                  style={{ width: "30px" }}
                />
              </p>
              <p className="mt-1">
                <b>Current Temp: {weather.current.temp_c}°C</b>
              </p>
              <p className="mt-1">
                <b>Current Temp: {weather.current.temp_f}°F</b>
              </p>
            </Card.Text>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SingleCountry;
