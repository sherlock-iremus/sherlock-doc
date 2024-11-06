export const simpleQuery = async (index, query) => {
  return fetch(
    `https://data-iremus.huma-num.fr/sherlock/es/${index}/_search`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        type: "application/json",
        Authorization: "ApiKey LTN4aUg0c0JGN1ZockRnXy1jajc6cEZBUVFjekpRV2FiWDgybmI5anN1Zw==",
      },
      body: JSON.stringify({
        size: 10,
        query: { simple_query_string: { query: query + "~" } },
      }),
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
