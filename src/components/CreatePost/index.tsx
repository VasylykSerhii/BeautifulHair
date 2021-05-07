import React, { useState } from "react";
import Editor from "components/Editor";
import ReactHtmlParser from "react-html-parser";

import { Input } from "Styles";

const CreatePost = (): JSX.Element => {
  const [content, setcontent] = useState();
  return (
    <div className="editor">
      <Input type="text" label="Назва поста" />
      <Input type="text" label="Автор" />
      <Editor onChange={setcontent} />
      <div>{ReactHtmlParser(content)}</div>
    </div>
  );
};

export default CreatePost;
