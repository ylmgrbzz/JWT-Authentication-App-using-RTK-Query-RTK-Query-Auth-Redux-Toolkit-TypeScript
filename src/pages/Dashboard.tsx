import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { logout, selectAuth } from "../features/authSlice";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { name } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    toast.success("Logout successful");
    navigate("/auth");
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5 text-center">
                <h2 className="fw-bold">Welcome {name}</h2>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
