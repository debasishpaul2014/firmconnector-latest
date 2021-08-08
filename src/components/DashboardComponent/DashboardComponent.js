import React from "react";
import PageHeader from "../CommonComponent/PageHeader";
import IconContainer from "../Iconcontainer/IconContainer";
import GroupedBar from "../Charts/GroupedBar";
import ProfileImageSmall from "../CommonComponent/ProfileImageSmall";
import DashboardBlockTitle from "../CommonComponent/DashboardBlockTitle";

import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import user4 from "../../assets/images/user4.jpg";
import user5 from "../../assets/images/user5.jpg";

const DashboardComponent = () => {
  const userList = [
    {
      name: "Debasish Paul",
      role: "Senior Application Developer",
      image: user1,
    },
    {
      name: "Aaron Mclaughlin",
      role: "Senior Consultant",
      image: user2,
    },
    {
      name: "Petter Wood",
      role: "Account Manager",
      image: user3,
    },
    {
      name: "St John",
      role: "Front End Engineer",
      image: user4,
    },
    {
      name: "Malina Weissman",
      role: "Drama Actress",
      image: user5,
    },
  ];

  const displayUserList = () => {
    const itemLength = userList.length - 1;

    return (
      <>
        {userList.map((item, key) => {
          return (
            <tr
              key={key.toString()}
              className={key !== itemLength ? "border-bottom border-20" : ""}
            >
              <td>
                <div className="align-items-center px-2 position-relative">
                  <div className="d-flex align-items-center">
                    <ProfileImageSmall imgSrc={item.image} />

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
                      <div className="icon-holder-sm icon-holder-info">
                        <IconContainer iconName={"FiSettings"} />
                      </div>
                      <div className="icon-holder-sm icon-holder-danger ms-3">
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
      <div className="row g-0">
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-4 mb-3 pe-lg-2 pe-xl-2 pe-xxl-2">
          <div className="card-custom shadow-lg">
            <div className="card-body">
              <div className="card-title-custom">
                <span>User Activity</span>
              </div>
              <p className="text-sm-custom">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-4 mb-3 pe-lg-2 pe-xl-2 pe-xxl-2 ps-lg-2 ps-xl-2 ps-xxl-2">
          <div className="card-custom">
            <div className="card-body">
              <div className="card-title-custom">
                <span>Today's To Do</span>
              </div>
              <p className="text-sm-custom">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-4 mb-3 ps-lg-2 ps-xl-2 ps-xxl-2">
          <div className="card-custom mb-3">
            <div className="card-body">
              <div className="d-flex">
                <div className="icon-holder-sm icon-holder-info me-3">
                  <IconContainer iconName={"FiFileText"} />
                </div>
                <div className="d-block">
                  <div className="d-block text-md-custom fw-bold-custom text-dark-custom">
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
                <div className="icon-holder-sm icon-holder-warning me-3">
                  <IconContainer iconName={"FiFileText"} />
                </div>
                <div className="d-block">
                  <div className="d-block text-md-custom fw-bold-custom text-dark-custom">
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

      <div className="row g-0">
        <div className="col-12 col-lg-7 col-xl-7 col-xxl-7 mb-3 pe-lg-2 pe-xl-2 pe-xxl-2">
          <div className="block-custom my-3 shadow">
            <div className="card-custom">
              <div className="card-header bg-muted-light-custom py-2">
                <DashboardBlockTitle
                  title={"Latest Activities"}
                  subTitle={null}
                />
              </div>
              <div className="card-body p-0">
                <div className="table-responsive-sm">
                  <table className="table table-borderless mb-0">
                    <tbody>{displayUserList()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 col-xl-5 col-xxl-5 ps-lg-2 ps-xl-2 ps-xxl-2">
          <div className="block-custom my-3">
            <div className="card-custom shadow">
              <div className="card-header bg-muted-light-custom py-2">
                <DashboardBlockTitle
                  title={"Resource Availability"}
                  subTitle={null}
                />
              </div>
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
