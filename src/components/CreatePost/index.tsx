import React, { useState } from "react";
import Editor from "components/Editor";
import ReactHtmlParser from "react-html-parser";

const CreatePost = (): JSX.Element => {
  const [content, setcontent] = useState();
  console.log(content);
  return (
    <div className="editor">
      <Editor onChange={setcontent} />
      <div>{ReactHtmlParser(content)}</div>
    </div>
  );
};

export default CreatePost;
