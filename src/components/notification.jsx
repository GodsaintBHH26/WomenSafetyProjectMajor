import React from "react";
import { toast, Bounce } from "react-toastify";

const Notify = ({ message, option }) => {
  if (option == "success") {
    toast.success(message, {
      position: "top-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  } else if (option == "error") {
    toast.error(message, {
      position: "top-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  } else if (option == "details") {
    toast.info(message, {
      position: "top-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  } else if (option == "warning") {
    toast.warning(message, {
      position: "top-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
};

export default Notify;
