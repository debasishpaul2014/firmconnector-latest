import React from "react";
import PageHeader from "../CommonComponent/PageHeader";
import IconContainer from "../Iconcontainer/IconContainer";
import user_image from "../../assets/images/user.png";
import GroupedBar from "../Charts/GroupedBar";

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
        {userList.map((item, key) => {
          return (
            <tr key={key.toString()}>
              <td>
                <div className="d-block my-1">
                  <div className="d-flex">
                    <div className="profile-image-sm">
                      <img className="h-100 w-100" src={user_image} alt="" />
                    </div>
                    <div className="profile-details-holder mx-3">
                      <div className="d-block">
                        <span className="text-sm-custom text-dark-custom fw-bold">
                          {item.name}
                        </span>
                      </div>
                      <div className="d-block">
                        <span className="text-muted-custom text-sm-custom">
                          {item.role}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex col justify-content-end">
                      <div className="icon-holder-success-sm-square">
                        <IconContainer iconName={"FiSettings"} />
                      </div>
                      <div className="icon-holder-danger-sm-square ms-3">
                        <IconContainer iconName={"FiTrash"} />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
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
                  typesetting industry.
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

      <div className="row my-4">
        <div className="col-12 col-lg-7 col-xl-7 col-xxl-7">
          <div className="block-custom my-3">
            <div className="d-flex mb-3">
              <div className="block-title">
                <h5 className="fw-bold text-dark-custom">Latest Activity</h5>
                <span className="text-muted-custom">Updated last week</span>
              </div>
            </div>
            <div className="d-block">
              <div className="card-custom">
                <div className="card-body">
                  <div className="table-responsive-sm">
                    <table className="table">
                      <tbody>{displayUserList()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 col-xl-5 col-xxl-5">
          <div className="block-custom my-3">
            <div className="d-flex mb-3">
              <div className="block-title">
                <h5 className="fw-bold text-dark-custom">New Resources</h5>
                <span className="text-muted-custom">Updated last week</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card-custom">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="icon-holder-info-md me-3">
                        <IconContainer iconName={"FiUser"} />
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
              <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card-custom">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="icon-holder-warning-md me-3">
                        <IconContainer iconName={"FiFileText"} />
                      </div>
                      <div className="d-block">
                        <div className="d-block text-lg-custom fw-bold-custom text-dark-custom">
                          600
                        </div>
                        <div className="d-block">
                          <span className="text-sm-custom text-dark-custom">
                            New job posted this week
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-custom">
              <div className="card-body">
                <GroupedBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
