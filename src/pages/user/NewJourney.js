import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useMutation, useQuery } from "react-query";
import { API, getDetailUser } from "../../config/api";
import uploadFileImage from "../../assets/img/upload.png";

const NewJourney = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [namePath, setNamePath] = useState("Photo Journey");
  const [fileUpload, setFileUpload] = useState(uploadFileImage);
  const [form, setForm] = useState({
    title: "",
    image: "",
  });

  const { title, image } = form;

  const { data: detailUser } = useQuery("detailUserCache", getDetailUser);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const description = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  const handlerInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerFile = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
    const path = e.target.value;
    const format = path.replace(/^.*\\/, "");
    setNamePath(format);
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setFileUpload(url);
    }
  };

  const handlerSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      // const formData = new FormData()
      // formData.set('image', image)
      // formData.set('title', title)
      // formData.set('description', title)
      // formData.set('writer', detailUser?.fullname)
      console.log(description);
      console.log(title);
      console.log(image);

      //   const config = {
      //       method: 'POST',
      //       headers: {
      //           Authorization: 'Bearer '+ localStorage.token
      //       }
      //   }

      //   const response = await API().post('/journey', config)

      //   logresponse.data
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="page-newjourney">
      <div className="title-newjourney">
        <h3>New Journey</h3>
      </div>
      <div className="container form-input-newjourney">
        <form onSubmit={(e) => handlerSubmit.mutate(e)}>
          <input
            type="file"
            className="d-none"
            id="image"
            name="image"
            onChange={handlerFile}
            required
          />
          <br />
          <div className="d-flex align-items-center">
            <img
              src={fileUpload}
              alt="icon-upload"
              className="fileupload-image"
            />
            <p className="ms-2 m-0">{namePath}</p>
          </div>
          <label for="image" className="label-image mb-4 mt-2">
            <p className="m-0">SELECT A NEW PHOTO</p>
          </label>
          <br />
          <label for="#title">Title</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            onChange={handlerInput}
            required
          />

          <br />
          <label for="description" className="mt-4">
            Description
          </label>
          <br />
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
          <button type="submit" className="btn-post">
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>{" "}
            Post...
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewJourney;
