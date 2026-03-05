function CountryCard({ country }) {

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">
        {country.name.common}
      </h2>

      <p className="text-sm text-gray-700">
        <span className="font-semibold">Capital:</span>{" "}
        {country.capital?.[0] || "N/A"}
      </p>

      <p className="text-sm text-gray-700">
        <span className="font-semibold">Population:</span>{" "}
        {country.population.toLocaleString()}
      </p>

      <p className="text-sm text-gray-700">
        <span className="font-semibold">Region:</span> {country.region}
      </p>

    </div>
  );
}

export default CountryCard;