import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import { simpleQuery } from "../elastic_search_api_helper";

function ElasticSearch() {
  const [searchResults, setSearchResults] = useState({});
  const [queryString, setQueryString] = useState({});
  const onChange = (e) => {
    const queryString = e.target.value;
    if (queryString.length > 2) {
      setQueryString(queryString);
      simpleQuery(queryString).then((result) => setSearchResults(result));
    }
  };

  console.log(searchResults);

  return (
    <>
      <Stack spacing={2} m={5}>
        <TextField label="Recherchez n'importe quoi 🔎" onChange={onChange} />
      </Stack>
      {searchResults && (
        <>
          {searchResults.hits?.hits?.length} Résultats <br />
          {searchResults.hits?.hits?.map((hit) => (
            <>
              {hit._id}
              <br />
              {hit._source.identity.map((identity) => (
                <>
                  {identity.p?.value ===
                  "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
                    ? identity.r.value
                    : ""}
                </>
              ))}
              <br />
              {hit._source.identity.map((identity) => (
                <>
                  {identity.label?.value.toUpperCase().includes(queryString.toUpperCase()) ? identity.label?.value : ""}
                </>
              ))}
              <br />
              <br />
            </>
          ))}
          
          <JSONPretty data={searchResults} space="4"></JSONPretty>
        </>
      )}
    </>
  );
}

export default ElasticSearch;
