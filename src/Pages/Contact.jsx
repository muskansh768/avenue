import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "../assets/image/contactimg.jpg";

export default function ContactHeader() {
     
  return (
    <div>
    <section className="contact-header py-5 text-center">
      <div className="container">
        <h1 className="contact-title">Contact Us</h1>
        <nav aria-label="breadcrumb" className="d-flex justify-content-center mt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="breadcrumb-link">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section className="contact-section py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Side - Form */}
          <div className="col-lg-7">
            <p className="text-uppercase small fw-semibold text-muted">Get In Touch</p>
            <h2 className="fw-bold mb-4 text-primary">
              Available 24/7 For Assistance
            </h2>
            <form className="contact-form p-4 rounded">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-md-6">
                  <select className="form-select">
                    <option>What are you most interested in?</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>I Agree to terms & Condition</span>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary rounded-pill px-4">
                    Let’s Talk
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="col-lg-5">
            <div className="info-box p-4 rounded text-center">
              <h3 className="fw-bold text-primary">Say Hi!</h3>
              <p className="text-muted">
                Aliquam lectus urna, tempus ac lectus et, gravida bibendum nisi.
                Nulla consequat ham ultricies metus et purus laoreet aliquam.
              </p>
              <div className="mt-4">
                <img
                  src={Contact}
                  alt="Support"
                  className="img-fluid rounded"
                  
                />
                <div className="mt-3">
                  <p className="fw-bold mb-0">
                    <i className="bi bi-chat-dots-fill me-2"></i>
                    24/7 Contact Support
                  </p>
                  <p className="text-muted mb-0">info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </div>
    
  );
}
