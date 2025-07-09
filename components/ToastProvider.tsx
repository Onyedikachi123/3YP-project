"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      pauseOnFocusLoss
      pauseOnHover
      closeOnClick
      draggable
      hideProgressBar={false}
      theme="light"
    />
  );
}
