function About(){
    return(
       <section className="hero d-flex align-items-center">
  <div className="container pt-5 pb-5"> {/* yaha py-5 ki jagah pt-4 pb-5 */}
    <div className="row align-items-center g-5">
      {/* Left content */}
      <div className="col-lg-6">
        <p className="text-uppercase text-muted small fw-semibold">
          Building Software, Building Success
        </p>

        <h1 className="display-4 fw-bold text-blue lh-base mb-3">
          Transform Ideas Into <br />
          Innovative Solutions
        </h1>

        <p className="text-secondary mb-4">
          We transform your idea into innovative software solutions that
          propel business growth. Our knowledgeable staff blends technology
          and creativity.
        </p>

        <div className="d-flex gap-3 mb-4">
          <button className="btn btn-info fw-semibold px-4 rounded-pill custom-btn">
            Get Started
          </button>
          <button className="btn btn-link text-decoration-none text-primary fw-semibold custom-link">
            Know More →
          </button>
        </div>

        <div className="d-flex align-items-center border-top pt-3">
          <div className="d-flex me-3">
            <img
              src="/images/avatar1.jpg"
              alt="a"
              className="rounded-circle border border-white shadow"
              width="45"
              height="45"
            />
            <img
              src="/images/avatar2.jpg"
              alt="b"
              className="rounded-circle border border-white shadow ms-n2"
              width="45"
              height="45"
            />
            <img
              src="/images/avatar3.jpg"
              alt="c"
              className="rounded-circle border border-white shadow ms-n2"
              width="45"
              height="45"
            />
          </div>
          <div>
            <p className="fw-semibold text-primary mb-0">Happy Customer</p>
            <small className="text-muted">
              ⭐⭐⭐⭐⭐ 4.8 (15K Review)
            </small>
          </div>
        </div>
      </div>

      {/* Right visuals */}
      <div className="col-lg-6 position-relative">
        {/* Decorative Play Icon */}
        <div className="play-icon d-flex align-items-center justify-content-center fw-bold">
          ▶
        </div>

        {/* Top card */}
        <div className="card shadow position-absolute top-0 end-0 p-3 rounded-4 w-75">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/images/illustration-1.png"
              alt="digital"
              className="rounded"
              width="100"
            />
            <div>
              <h5 className="fw-semibold mb-1">Digital Marketing</h5>
              <p className="small text-muted mb-2">
                Short caption about the service.
              </p>
              <button className="btn btn-sm btn-success rounded-pill">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom card */}
        <div className="card shadow position-absolute bottom-0 start-0 p-3 rounded-4 w-75">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/images/illustration-2.png"
              alt="programming"
              className="rounded"
              width="100"
            />
            <div>
              <h5 className="fw-semibold mb-1">Programming</h5>
              <p className="small text-muted mb-2">
                Tooling, coding and automation.
              </p>
              <button className="btn btn-sm btn-success rounded-pill">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Background faint box */}
        <div className="bg-light rounded-4 position-absolute w-100 h-100 top-0 start-0 opacity-50"></div>
      </div>
    </div>
  </div>
</section>

    )
}

export default About;