import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");

  useEffect(() => {

    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );

        if (!res.ok) throw new Error("Failed to fetch countries");

        const data = await res.json();

        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();

  }, []);

  useEffect(() => {

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filtered);

  }, [query, countries]);

  if (loading)
    return (
      <h1 className="text-center text-2xl mt-10 font-semibold">
        Loading Countries...
      </h1>
    );

  if (error)
    return (
      <h1 className="text-center text-red-500 text-2xl mt-10">{error}</h1>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6 text-center">
        Country Explorer
      </h1>

      <SearchBar onSearch={setQuery} />

      <CountryList countries={filteredCountries} />

    </div>
  );
}

export default App;