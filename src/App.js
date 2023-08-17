import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header className="bg-dark header fixed-header">
        <nav
          className="navbar navbar-expand-md sticky-top py-3 navbar-dark"
          id="mainNav"
          style={{ background: "#025F5F", color: "#00544D" }}
        >
          <div className="container">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#navcol-2"
              className="navbar-toggler"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <img
              src="assets/img/Screenshot%202023-08-02%20at%204.11.46%20PM.png"
              width={347}
              height={129}
            />
            <div
              className="collapse navbar-collapse"
              id="navcol-1"
              style={{
                borderStyle: "none",
                color: "rgba(0,84,77,0)",
                marginRight: "-475px",
                paddingRight: 170,
              }}
            >
              <button
                className="btn btn-primary"
                data-bss-hover-animate="flash"
                type="button"
                style={{
                  background: 'url("assets/img/logo.png") no-repeat, #00000000',
                  backgroundSize: "cover, auto",
                  width: 292,
                  height: 102,
                  transform: "perspective(0px)",
                  color: "rgba(0,0,0,0)",
                  marginRight: 23,
                  paddingRight: 0,
                  paddingBottom: 0,
                  marginBottom: 21,
                  borderColor: "#025F5F",
                }}
              />
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  background:
                    'url("assets/img/logo1.png") no-repeat, #00000000',
                  backgroundSize: "cover, auto",
                  width: 341,
                  height: 104,
                  transform: "perspective(0px)",
                  color: "rgba(0,0,0,0)",
                  paddingBottom: 0,
                  marginBottom: 3,
                  marginRight: 12,
                  paddingRight: 0,
                  marginTop: 34,
                  borderColor: "#025F5F",
                }}
              />
              <small>
                Tex
                <i
                  className="fa fa-user"
                  style={{
                    fontSize: 26,
                    marginRight: 9,
                    color: "#ffffff",
                    paddingLeft: 52,
                    marginTop: 119,
                    marginLeft: 89,
                    marginBottom: "-14px",
                  }}
                />
                t
              </small>
              <small
                style={{
                  fontFamily: "Raleway, sans-serif",
                  color: "var(--bs-primary-bg-subtle)",
                  fontSize: 18,
                  marginTop: 120,
                  fontWeight: "bold",
                  marginRight: "-2px",
                  marginLeft: "-8px",
                }}
              >
                Firnas Aero
              </small>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item" />
              </ul>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navcol-2"
              style={{
                borderStyle: "none",
                color: "rgba(0,84,77,0)",
                marginRight: "-475px",
                paddingRight: 170,
              }}
            />
          </div>
        </nav>
      </header>
      <div id="content">
      <section
        className="py-4 py-xl-5"
        style={{ background: "#ffffff", paddingTop: 43, marginTop: 39 }}
      >
        <div className="container">
          <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
            <div
              className="row g-0"
              style={{
                background: "#ffffff",
                border: "0.5px solid rgb(3,94,95)",
              }}
            >
              <div className="col-md-6">
                <img
                  className="w-100 h-100 fit-cover"
                  src="assets/img/IMG_6965.png"
                />
              </div>
              <div
                className="col-md-6 col-xxl-6 order-first order-md-last"
                style={{ minHeight: 250, paddingTop: 0, marginTop: 203 }}
              >
                <p
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    letterSpacing: 1,
                    color: "rgb(3,94,95)",
                    fontFamily: "Raleway, sans-serif",
                    textAlign: "center",
                  }}
                >
                  <strong>
                    <span style={{ color: "rgb(50, 119, 119)" }}>
                      Member login
                    </span>
                  </strong>
                </p>
                <div
                  style={{
                    background: "#f1f1f1",
                    borderRadius: 25,
                    padding: 7,
                    textAlign: "left",
                    marginRight: 104,
                    marginLeft: 103,
                  }}
                >
                  <i
                    className="fas fa-envelope"
                    style={{ marginLeft: 15, color: "rgb(152,152,152)" }}
                  />
                  <input
                    type="text"
                    style={{
                      background: "rgba(255,255,255,0)",
                      borderStyle: "none",
                      marginLeft: 10,
                      color: "rgb(152,152,152)",
                      fontFamily: "Raleway, sans-serif",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                    placeholder="Email"
                    defaultValue="Email"
                  />
                </div>
                <div
                  style={{
                    background: "#f1f1f1",
                    borderRadius: 25,
                    padding: 7,
                    marginTop: 15,
                    fontFamily: "Raleway, sans-serif",
                    marginRight: 102,
                    marginLeft: 103,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  <i
                    className="fas fa-lock"
                    style={{
                      marginLeft: 15,
                      color: "rgb(152,152,152)",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  />
                  <input
                    type="text"
                    style={{
                      background: "rgba(255,255,255,0)",
                      borderStyle: "none",
                      marginLeft: 10,
                      color: "rgb(152,152,152)",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                    placeholder="Password"
                    defaultValue="Password"
                  />
                </div>
                <button
                  className="btn btn-primary text-center"
                  type="button"
                  style={{
                    margin: 13,
                    background: "rgb(3,94,95)",
                    paddingLeft: 39,
                    paddingRight: 39,
                    marginRight: "-3px",
                    marginLeft: 275,
                    fontFamily: "Raleway, sans-serif",
                    borderStyle: "none",
                    color: "rgb(255,255,255)",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-muted py-4 py-lg-5">
          <p
            className="mb-0"
            style={{ textAlign: "center", fontFamily: "Raleway, sans-serif" }}
          >
            Firnas Aero © 2023
          </p>
        </div>
      </section>
      <section />
      </div>
    </>
  );
}

export default App;
