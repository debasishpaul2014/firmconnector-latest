import React from "react";
import PageHeader from "../CommonComponent/PageHeader";
import IconContainer from "../Iconcontainer/IconContainer";

const DashboardComponent = () => {
  const userList = [
    { name: "Debasish Paul", role: "Senior Application Developer" },
    { name: "Aaron Mclaughlin", role: "Senior Consultant" },
    { name: "Petter Wood", role: "Account Manager" },
    { name: "St John", role: "Front End Engineer" },
    { name: "Yang Lee", role: "SAP Developer" },
    { name: "Malina Weissman", role: "Drama Actress" },
  ];

  const displayUserList = () => {
    return (
      <>
        {userList.map((item) => {
          return (
            <div className="d-block py-2 my-1">
              <div className="d-flex align-items-center">
                <div className="profile-image-sm me-3"></div>
                <div className="d-block me-3">
                  <div className="d-block">
                    <span className="text-dark-custom fw-bold">
                      {item.name}
                    </span>
                  </div>
                  <div className="d-block">
                    <span className="text-muted-custom text-sm-custom">
                      {item.role}
                    </span>
                  </div>
                </div>
                <div className="d-flex col justify-content-end align-items-center">
                  <div className="icon-holder-success-sm-square">
                    <IconContainer iconName={"FiSettings"} />
                  </div>

                  <div className="icon-holder-danger-sm-square ms-3">
                    <IconContainer iconName={"FiTrash"} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <PageHeader pageHeaderTitle={"Dashboard"} subText={"Recent activities"} />
      <div className="d-block">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="card-custom shadow-lg">
              <div className="card-body">
                <div className="card-title-custom">
                  <span>User Activity</span>
                </div>
                <p className="text-sm-custom">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="card-custom">
              <div className="card-body">
                <div className="card-title-custom">
                  <span>Today's To Do</span>
                </div>
                <p className="text-sm-custom">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="card-custom">
              <div className="card-body">
                <div className="d-flex">
                  <div className="icon-holder-info-md me-3">
                    <IconContainer iconName={"FiFileText"} />
                  </div>
                  <div className="d-block">
                    <div className="d-block text-lg-custom fw-bold-custom text-dark-custom">
                      $3240
                    </div>
                    <div className="d-block">
                      <span className="text-sm-custom text-dark-custom">
                        Earned this month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-custom">
              <div className="card-body">
                <div className="d-flex">
                  <div className="icon-holder-warning-md me-3">
                    <IconContainer iconName={"FiFileText"} />
                  </div>
                  <div className="d-block">
                    <div className="d-block text-lg-custom fw-bold-custom text-dark-custom">
                      53
                    </div>
                    <div className="d-block">
                      <span className="text-sm-custom text-dark-custom">
                        New resource added this week
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex my-4">
        <div className="col-12 col-lg-7 col-xl-7 col-xxl-7">
          <div className="block-custom my-3">
            <div className="d-flex mb-3">
              <div className="block-title">
                <h4 className="fw-bold text-dark-custom">Latest Activity</h4>
                <span className="text-muted-custom">Updated last week</span>
              </div>
            </div>
            <div className="d-block">
              <div className="card-custom">
                <div className="card-body">{displayUserList()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
