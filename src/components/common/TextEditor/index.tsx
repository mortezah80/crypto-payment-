"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = ({ content, setContent }: any) => {
  return (
    <div className="h-[560px] overflow-y-auto w-full rounded-[18px] bg-grayLight py-6 px-9 flex flex-col gap-5 text-sm text-grayText font-bold max-md:max-w-none">
      <div className="w-full h-14 rounded-[12px] bg-white">
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
