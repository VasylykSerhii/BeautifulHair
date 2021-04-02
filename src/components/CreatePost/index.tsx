import React, { useState } from "react";
import Editor from "components/Editor";
import ReactHtmlParser from "react-html-parser";

const CreatePost = (): JSX.Element => {
  const [content, setcontent] = useState();

  return (
    <div className="editor">
      <h2>Using CKEditor 5 build in React</h2>
      <Editor onChange={setcontent} />
      <div>{ReactHtmlParser(content)}</div>
    </div>
  );
};

export default CreatePost;
