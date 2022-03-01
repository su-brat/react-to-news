import React, { useState } from "react";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const [countryCode, setCountryCode] = useState("in");
  const genres = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const countryCodes = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];
  return (
    <Router>
      <div className="container">
        <Navbar
          updateCountryCode={setCountryCode}
          genres={genres}
          countryCodes={countryCodes}
          curCountry={countryCode}
        />
        <Routes>
          <Route exact path="/" element={<Navigate to="/general" />} />
          {genres.map((genre) => (
            <Route
              exact
              path={`/${genre}`}
              element={<News countryCode={countryCode} genre={genre} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
