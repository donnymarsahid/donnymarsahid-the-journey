import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import leaf from "../../img/leaf.png";
import atlas from "../../img/atlas.png";
import { useMutation, useQuery } from "react-query";
import { API, getDetailUser } from "../../../config/api";
import AlertSettingProfile from "./AlertSettingProfile";

const Register = ({ show, handleClose, refetch }) => {
  const [namePath, setNamePath] = useState("select your photo");
  const [loadUpdate, setLoadUpdate] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
    handleClose();
  };
  const { data: detailUser } = useQuery("detailUserCache", getDetailUser);
  const [form, setForm] = useState({
    fullname: "",
    address: "",
    image: "",
  });
  const { fullname, address, image } = form;

  const handlerInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerFile = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
    const path = e.target.value;
    const format = path.replace(/^.*\\/, "");
    setNamePath(format);
  };

  const handlerSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.set("fullname", fullname);
      formData.set("address", address);
      formData.set("image", image);
      const config = {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
        body: formData,
      };

      const response = await API().put("/profile", config);

      if (response.status === "success") {
        setLoadUpdate(true);
        setTimeout(() => {
          setLoadUpdate(false);
        }, 3000);
        setTimeout(() => {
          handleShowAlert();
        }, 3200);
      }

      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="modal-access">
          <div className="modal-title">
            <h3>Setting Profile</h3>
          </div>
          <img src={atlas} alt="atlas" className="img-atlas" />
          <img src={leaf} alt="leaf" className="img-leaf" />
          <form
            className="form-input-modal register mt-4"
            onSubmit={(e) => handlerSubmit.mutate(e)}
          >
            <label for="fullname">Fullname</label>
            <br />
            <input
              type="text"
              name="fullname"
              defaultValue={detailUser?.fullname}
              onChange={handlerInput}
            />
            <input
              type="file"
              name="image"
              className="d-none"
              id="image"
              onChange={handlerFile}
            />
            <br />
            <label for="fullname" className="mt-2">
              Upload Photo
            </label>
            <br />
            <label
              for="image"
              className="photo-setting d-flex justify-content-between align-items-center"
            >
              <p className="m-0">{namePath}</p>
              <i class="fas fa-camera-retro"></i>
            </label>
            <br />
            <label for="address">Address</label>
            <br />
            <textarea
              name="address"
              className="input-textarea"
              defaultValue={detailUser?.address}
              onChange={handlerInput}
            />
            <br />
            {loadUpdate ? (
              <button type="submit" className="btn-access mt-4">
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                Updating...
              </button>
            ) : (
              <button type="submit" className="btn-access mt-4">
                Save Change
              </button>
            )}
            <p className="text-center text-close" onClick={handleClose}>
              close
            </p>
          </form>
        </Modal.Body>
      </Modal>
      <AlertSettingProfile show={showAlert} handleClose={handleCloseAlert} />
    </>
  );
};

export default Register;
