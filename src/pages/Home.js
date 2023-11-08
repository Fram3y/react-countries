import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

//Importing Components
import CountryCard from "../components/CountryCard.js";

//Setting Global Variables
const COUNTRIES_URL = "https://restcountries.com/v3.1/all";

const Home = (props) => {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${COUNTRIES_URL}`)
      .then((response) => {
        setCountriesList(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  useEffect(() => {
    if (props.searchTerm <= 2) {
      setFilteredCountries(countriesList);
    } else {
      let filter = countriesList.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(props.searchTerm.toLowerCase());
      });

      setFilteredCountries(filter);
    }
  }, [countriesList, props.searchTerm]);

  let countryCards = filteredCountries.map((country, i) => {
    return (
      <CountryCard
        key={i}
        flag={country.flags.png}
        name={country.name.official}
        region={country.region}
      />
    );
  });

  return (
    <Row className="g-3 justify-content-between" md={3} xs={1}>
      {countryCards}
    </Row>
  );
};

export default Home;
