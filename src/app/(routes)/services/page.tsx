import React from "react"

const ServicesPage = () => {
  const style = {
    backgroundColor: "grey",
    height: "100px",
    animationName: "example",
    animationDuration: "4s",
  }

  return (
    <div style={style}>
      <div className="container">
        <div className="row mt-4 align-items-center">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Plumber Station</h5>
              <p className="card-text">
                We offer the best services for our neighborhood. For routine
                serive request, please click the button below.
              </p>
              <a href="/servicerequests" className="btn btn-primary">
                Service Request
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 align-items-center">
          <div className="col-md-6 order-md-2">
            <div className="card-body">
              <h5 className="card-title">Exterior Area Maintenance</h5>
              <p className="card-text">
                Exterior repairs, fall tree and other nature effects, routine
                lawn serice
              </p>
              <a href="/servicerequests" className="btn btn-primary">
                Service Request
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 align-items-center">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Electrical Issues</h5>
              <p className="card-text">
                Our partnered service provider will respond within 2 hours of
                any service call. Please contact us if you are having issues
              </p>
              <a href="/servicerequests" className="btn btn-primary">
                Service Request
              </a>
            </div>
          </div>
        </div>

        {/* Affliated links to service providers */}
        <div className="row mt-4">
          <div className="col mt-2" style={{ backgroundColor: "grey" }}>
            <h3>Service Providers Affliated Links</h3>
          </div>
        </div>
        <div className="row mt-4" style={{ backgroundColor: "lightgray" }}>
          <div className="col-md-4">
            <h5>United Plumbers</h5>
            <p>
              Plumbing service provided. Customer service and quality
              guaranteed.
            </p>

            <a href="https:google.com" className="btn btn-primary">
              More Info
            </a>
          </div>
          <div className="col-md-4">
            <h5>Twisting Meadows Landscapping</h5>
            <p>Our goal is to make this community even more beautiful!</p>

            <a href="https:google.com" className="btn btn-primary">
              More Info
            </a>
          </div>
          <div className="col-md-4">
            <h5>Hardwire Your Wiring Company</h5>
            <p>
              A local service provided working for the community for years!.
            </p>

            <a href="https:google.com" className="btn btn-primary">
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
