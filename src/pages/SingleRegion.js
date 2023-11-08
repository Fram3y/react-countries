import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

//Importing Bootstrap Elements
import { Row } from "react-bootstrap";

const SingleRegion = () => {
  let { name } = useParams();

  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${name}`)
      .then((response) => {
        setCountriesList(response.data);
        console.log(response.data[0].name.common)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  let countryCards = countriesList.map((country, i) => {
    return <CountryCard key={i} flag={country.flags.png} name={country.name.official} region={country.region} />;
  });

  return(
    <Row className="g-3 justify-content-between" md={3} xs={1}>
      {countryCards}
    </Row>
  );

};

export default SingleRegion;