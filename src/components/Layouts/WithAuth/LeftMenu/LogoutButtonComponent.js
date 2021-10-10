import React from "react";
import { useAuthContext } from "../../../../context/AuthContext";
import IconContainer from "../../../Iconcontainer/IconContainer";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2-react-content";

import "./leftmenu.css";

const LogoutButtonComponent = () => {
  const { signOut } = useAuthContext();
  const MySwal = swalWithBootstrapButtons(Swal);

  const displayLogoutAlert = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "that you want to logout from your account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      confirmButtonColor: "var(--danger)",
      cancelButtonColor: "var(--black)",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut();
      }
    });
  };

  return (
    <div
      className="my-3 align-items-center d-flex flex-column align-items-center"
      onClick={() => displayLogoutAlert()}
    >
      <div className="sm-block animated-hover bg-muted-custom">
        <IconContainer iconName={"FiLogOut"} color="var(--danger)" />
      </div>
      <div>
        <span className="text-x-x-sm-custom text-danger fw-bold">Logout</span>
      </div>
    </div>
  );
};

export default LogoutButtonComponent;
