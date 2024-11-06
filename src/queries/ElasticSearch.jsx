import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import { simpleQuery } from "../elastic_search_api_helper";

function ElasticSearch() {
  const [searchResults, setSearchResults] = useState({});
  const [queryString, setQueryString] = useState({});
  const [queryIndex, setQueryIndex] = useState("text-index");
  const onChange = (e) => {
    const queryString = e.target.value;
    if (queryString.length > 2) {
      setQueryString(queryString);
      simpleQuery(queryIndex, queryString).then((result) => setSearchResults(result));
    }
  };

  const onChangeIndex = (e) => {
      setQueryIndex(e.target.value);
  };

  console.log(searchResults);

  return (
    <>
      <Stack spacing={2} m={5}>
        <TextField value={queryIndex} label="Identifiant de l'index (resources ou text-index)" onChange={onChangeIndex} />
      </Stack>
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
              <pre>{JSON.stringify(hit, null, 2)}</pre>

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
