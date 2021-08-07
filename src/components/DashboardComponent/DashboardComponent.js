import React from "react";
import PageHeader from "../CommonComponent/PageHeader";

const DashboardComponent = () => {
  return (
    <>
      <PageHeader pageHeaderTitle={"Dashboard"} subText={"Recent activities"} />
      {/* display small card blocks in a row */}
      <div className="row justify-content-between">
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card-custom shadow-lg">
            <div className="card-body">
              <h4 className="card-title-custom">
                <span>User Activity</span>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card-custom">
            <div className="card-body">
              <h4 className="card-title-custom">
                <span>Today's To Do</span>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card-custom">
            <div className="card-body">Hello</div>
          </div>
          <div className="card-custom">
            <div className="card-body">Hello 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
