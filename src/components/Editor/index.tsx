import React from "react";
import { Editor } from "@tinymce/tinymce-react";
// import tinymce from "tinymce";

const EditorPost = ({
  onChange,
}: {
  onChange: React.Dispatch<(prevState: undefined) => undefined>;
}): JSX.Element => {
  const handleEditorChange = (e) => {
    onChange(e.target.getContent());
  };
  return (
    <div className="editor">
      <Editor
        initialValue="<p>Initial content</p>"
        apiKey="ex866wuf9fx07ucxeh5xxr0f04o4uoboke19e7744rtchiis"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist image autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code emoticons",
            "insertdatetime media table paste wordcount",
          ],
          emoticons_append: {
            custom_mind_explode: {
              keywords: ["brain", "mind", "explode", "blown"],
              char: "🤯",
            },
          },
          toolbar:
            // eslint-disable-next-line no-multi-str
            "undo redo | \
            formatselect | \
            bold italic strikethrough blockquote forecolor backcolor emoticons| \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | \
            link image  insertfile'",
          file_picker_callback(cb) {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = () => {
              const file = input.files[0];
              const reader = new FileReader();
              reader.onload = (e?: ProgressEvent<FileReader>) => {
                cb(e.target.result, {
                  alt: file.name,
                });
              };
              reader.readAsDataURL(file);
            };

            input.click();
          },
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditorPost;
