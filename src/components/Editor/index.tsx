import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import tinymce from "tinymce";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

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
        init={{
          apiKey: "ex866wuf9fx07ucxeh5xxr0f04o4uoboke19e7744rtchiis",
          height: 500,
          menubar: true,
          plugins: [
            "advlist image autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            // eslint-disable-next-line no-multi-str
            "undo redo | formatselect | bold italic strikethrough blockquote forecolor backcolor| \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | link image  insertfile ",
          file_picker_callback(cb, value, meta) {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = function (e?: HTMLInputEvent) {
              const file: any = e.target.files[0];

              const reader = new FileReader();
              reader.onload = function () {
                const id = `blobid${new Date().getTime()}`;
                const { blobCache } = tinyMCE.activeEditor.editorUpload;
                const base64 = reader.result.split(",")[1];
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                cb(blobInfo.blobUri(), { title: file.name });
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
