import React, { useState } from "react";
import Editor from "components/Editor";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const CreatePost = (): JSX.Element => {
  const [content, setcontent] = useState();

  console.log(content);

  return (
    <div className="editor">
      <h2>Using CKEditor 5 build in React</h2>
      <Editor onChange={setcontent} />
      <div>{ReactHtmlParser(content)}</div>
    </div>
  );
};

export default CreatePost;
