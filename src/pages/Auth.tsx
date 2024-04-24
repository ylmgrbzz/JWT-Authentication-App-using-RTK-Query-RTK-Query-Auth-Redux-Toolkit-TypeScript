import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  confirmPassword: "",
};

const Auth = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [showRegister, setShowRegister] = useState(false);
  const { email, password, firstName, lastName, confirmPassword } = formValues;
  const navigate = useNavigate();

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    {showRegister ? "Register" : "Login"}
                  </h2>
                  <p className="text-white-50 mb-5">
                    {showRegister
                      ? "Register to access your dashboard"
                      : "Login to access your dashboard"}
                  </p>
                  {showRegister && (
                    <div className="form-outline form-white mb-4">
                      <MDBInput
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            firstName: e.target.value,
                          })
                        }
                        className="form-control form-control-lg"
                      />
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                          label="Last Name"
                          type="text"
                          name="lastName"
                          value={lastName}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              lastName: e.target.value,
                            })
                          }
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>
                  )}

                  <div className="form-outline form-white mb-4">
                    <MDBInput
                      label="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          email: e.target.value,
                        })
                      }
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <MDBInput
                      label="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          password: e.target.value,
                        })
                      }
                      className="form-control form-control-lg"
                    />
                  </div>
                  {showRegister && (
                    <div className="form-outline form-white mb-4">
                      <MDBInput
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="form-control form-control-lg"
                      />
                    </div>
                  )}
                  {!showRegister ? (
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      onClick={() => navigate("/dashboard")}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      onClick={() => navigate("/dashboard")}
                    >
                      Register
                    </button>
                  )}
                </div>

                <div>
                  <p className="mb-0">
                    {!showRegister ? (
                      <>
                        Not registered?{" "}
                        <button
                          className="btn btn-link"
                          onClick={() => setShowRegister(true)}
                        >
                          Register
                        </button>
                      </>
                    ) : (
                      <>
                        Already registered?{" "}
                        <button
                          className="btn btn-link"
                          onClick={() => setShowRegister(false)}
                        >
                          Login
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
