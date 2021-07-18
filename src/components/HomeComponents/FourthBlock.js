import React from "react";
import tell_company from "../../assets/images/search_result_icon.svg";

const FourthBlock = () => {
  return (
    <div className="px-4 py-5 text-center bg-white-custom">
      <img
        className="d-block mx-auto mb-4"
        src={tell_company}
        alt=""
        width="150"
        height="150"
      />
      <h1 className="h1">
        Search for skillsets across your whole network quickly and easily
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="mb-4 text-muted">
          Search for skillsets and availability within your company. Connect
          with the people you need across your network—quickly and easily
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn-custom btn-lg-custom btn-primary-custom px-4 gap-3"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthBlock;
