import { TEIHTMLRenderer } from "tei-html-renderer";
import QueryParamPicker from "../QueryParamPicker";
import { useState } from "react";

export const example = [["URL du document TEI", 'https://data-iremus.huma-num.fr/files/mercure-galant/articles/1678-09_162.xml']];

function TEIRenderer() {
  const [args, setArgs] = useState(example);
  return (
    <>
      <QueryParamPicker args={args} setArgs={setArgs} loading={false} />
      <TEIHTMLRenderer
        TEIDocumentURL={args[0][1]}
        setNote={(e) => alert(e)}
      />
    </>
  );
}

export default TEIRenderer;
