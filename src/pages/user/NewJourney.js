import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useMutation, useQuery } from "react-query";
import { API, getDetailUser } from "../../config/api";
import uploadFileImage from "../../assets/img/upload.png";
import AlertNewJourney from "../../assets/components/modals/AlertNewJourney";

const NewJourney = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [namePath, setNamePath] = useState("no files uploaded !");
  const [fileUpload, setFileUpload] = useState(uploadFileImage);
  const [loadPost, setLoadPost] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

      if (image === "" || title === "" || !description) {
        setMessage("please upload image title and description !");
        setTimeout(() => {
          setMessage("");
        }, 3000);
        return false;
      }

      const formData = new FormData();
      formData.set("image", image);
      formData.set("title", title);
      formData.set("description", description);
      formData.set("writer", detailUser?.fullname);

      const config = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
        body: formData,
      };

      const response = await API().post("/journey", config);

      if (response) {
        setLoadPost(true);
        setTimeout(() => {
          setLoadPost(false);
        }, 3000);
        setTimeout(() => {
          handleShow();
        }, 3200);
      }
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
          <input type="text" id="title" name="title" onChange={handlerInput} />
          <br />
          <label for="description" className="mt-4">
            Description
          </label>
          <br />
          <Editor
            editorState={editorState}
            toolbarclassName="toolbarclassName"
            wrapperclassName="wrapperclassName"
            editorclassName="editorclassName"
            onEditorStateChange={onEditorStateChange}
          />
          <div className="d-flex justify-content-between mt-4">
            <div></div>
            <div className="d-flex align-items-center">
              {loadPost ? (
                <button type="submit" className="btn-post">
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Post...
                </button>
              ) : (
                <>
                  {message && (
                    <div className="alert alert-danger post me-3" role="alert">
                      {message}
                    </div>
                  )}
                  <button type="submit" className="btn-post">
                    Post
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
      <AlertNewJourney show={show} handleClose={handleClose} />
    </div>
  );
};

export default NewJourney;
