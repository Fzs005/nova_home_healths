import React from "react";

function App() {
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand text-primary fw-bold" href="#">
            Nova Home Health
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="display-4 fw-bold text-primary">Caring for Your Loved Ones</h1>
          <p className="lead mb-4">Professional Home Health Services You Can Trust</p>
          <a href="#contact" className="btn btn-primary btn-lg">Book a Consultation</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Services</h2>
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card service-card shadow p-3 text-center">
                <div className="card-body">
                  <h5 className="card-title">Nursing Care</h5>
                  <img src="/care.png" alt="Nursing Care" style={{ height: "150px", margin: "10px 0" }} />
                  <p className="card-text">24/7 professional nursing care at home.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card service-card shadow p-3 text-center">
                <div className="card-body">
                  <h5 className="card-title">Physiotherapy</h5>
                  <img src="/phys.png" alt="Physiotherapy" style={{ height: "150px", margin: "10px 0" }} />
                  <p className="card-text">Expert physiotherapy sessions for recovery and mobility.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card service-card shadow p-3 text-center">
                <div className="card-body">
                  <h5 className="card-title">Baby Care</h5>
                  <img src="/baby.png" alt="Baby Care" style={{ height: "150px", margin: "10px 0" }} />
                  <p className="card-text">Ensuring every baby grows with care, love & protection.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">About Nova Home Health</h2>
          <p>
            At Nova Home Health, we provide compassionate and professional home healthcare services. 
            Our trained staff ensures your loved ones get the care they deserve in the comfort of their own home.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Testimonials</h2>
          <div className="row g-4">

            <div className="col-md-6">
              <div className="card shadow p-3 h-100">
                <div className="card-body">
                  <img src="/doc1.png" alt="Dr. Deepak Kumar"
                    className="rounded-circle mb-3"
                    style={{ width: "205px", height: "280px", objectFit: "cover" }} />
                  <p>"Excellent care and very professional staff!"</p>
                  <h6 className="fw-bold">Mr. Deepak Kumar</h6>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow p-3 h-100">
                <div className="card-body">
                  <img src="/doc2.png" alt="Dr. Azeem"
                    className="rounded-circle mb-3"
                    style={{ width: "205px", height: "280px", objectFit: "cover" }} />
                  <p>"Highly recommend Nova Home Health for home nursing."</p>
                  <h6 className="fw-bold">Mr. Azeem</h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">Contact Us</h2>
          <form className="row g-3 justify-content-center">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" rows="4" placeholder="Message"></textarea>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center">
        <p>© 2025 Nova Home Health. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
