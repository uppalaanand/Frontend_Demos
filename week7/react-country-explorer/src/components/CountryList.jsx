import CountryCard from "./CountryCard";

function CountryList({ countries }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}

    </div>
  );
}

export default CountryList;