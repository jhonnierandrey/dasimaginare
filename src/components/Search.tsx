import React from "react";

type SearchProps = {
  searchParameters: () => void,
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
}

export const Search = ({ searchParameters, query, setQuery }: SearchProps) => {
  const getData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchParameters();
  };

  return (
    <form onSubmit={getData}>
      <div className="form-row">
        <input
          className="form-control col-9"
          type="text"
          name="search"
          placeholder="Type your search here"
          maxLength={30}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-secondary btn-lg col-3">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
