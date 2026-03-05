import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {

  const { register, watch } = useForm();

  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  const searchValue = watch("search");

  // Autofocus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Debounce search
  useEffect(() => {

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onSearch(searchValue || "");
    }, 500);

  }, [searchValue]);

  return (
    <div className="flex justify-center mb-8">

      <input
        {...register("search")}
        ref={(e) => {
          register("search").ref(e);
          inputRef.current = e;
        }}
        placeholder="Search country..."
        className="border rounded-lg px-4 py-2 w-80 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

    </div>
  );
}

export default SearchBar;