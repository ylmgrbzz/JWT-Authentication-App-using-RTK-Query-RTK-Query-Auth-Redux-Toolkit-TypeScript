import React from "react";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "../features/authSlice";

const Dashboard = () => {
  const { name } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

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
                  onClick={() => navigate("/auth")}
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
