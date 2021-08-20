import React from "react";

const GeneralInfo = () => {
  return (
    <div className="col-12 col-lg-5 col-xl-5 col-xxl-5 mb-3">
      <div className="card-custom h-100">
        <div className="card-body">
          <div className="d-block mb-3">
            <span className="fw-bold">Contact Info</span>
          </div>
          <div className="d-flex flex-column">
            <div className="d-block mb-4">
              <div className="d-block">
                <span className=" text-muted-custom">Email</span>
              </div>
              <div className="d-block border-bottom pb-2">
                <span className="fw-bold">debasishpaul2014@gmail.com</span>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-6">
                <div className="d-block">
                  <span className="text-muted-custom">Mobile Number</span>
                </div>
                <div className="d-block border-bottom pb-2">
                  <span className="fw-bold">+(91) 704 400 4365</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-block">
                  <span className="text-muted-custom">Home Phone</span>
                </div>
                <div className="d-block border-bottom pb-2">
                  <span className="fw-bold">+(033) 123456789</span>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <div className="d-block">
                  <span className=" text-muted-custom">Street Address</span>
                </div>
                <div className="d-block border-bottom pb-2">
                  <span className="fw-bold">Salt Lake, Sec - 2</span>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-6">
                <div className="d-block">
                  <span className="text-muted-custom">City</span>
                </div>
                <div className="d-block border-bottom pb-2">
                  <span className="fw-bold">Kolkata</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-block">
                  <span className="text-muted-custom">Provience / State</span>
                </div>
                <div className="d-block border-bottom pb-2">
                  <span className="fw-bold">West Bengal</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="d-block">
                  <span className="text-muted-custom">Country</span>
                </div>
                <div className="d-block pb-2">
                  <span className="fw-bold">India</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-block">
                  <span className="text-muted-custom">Zip Code</span>
                </div>
                <div className="d-block pb-2">
                  <span className="fw-bold">700133</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
