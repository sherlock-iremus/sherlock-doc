import { TEIHTMLRenderer } from "tei-html-renderer";
import QueryParamPicker from "../QueryParamPicker";
import { useState } from "react";

export const example = [["URL du document TEI", 'MG-1672-01_165.json']];

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
