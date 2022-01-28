import React, { useEffect, useState } from "react";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";
import { PieChart } from "react-minimal-pie-chart";

const AvailabilityHolder = (props) => {
  const { availabilityDetails } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [availabilityDetails]);

  const displayAvailabilityContent = () => {
    if (isLoading) {
      return <LoadingPageSm />;
    } else {
      return renderAvailability();
    }
  };

  const renderAvailability = () => {
    if (availabilityDetails !== null && availabilityDetails) {
      return (
        <>
          <PieChart
            animate={true}
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            totalValue={40}
            data={[
              {
                color: "#00d09c",
                value: parseInt(availabilityDetails.availability),
              },
            ]}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={30}
            paddingAngle={0}
            radius={50}
            startAngle={0}
            viewBoxSize={[100, 100]}
            background={"#ccc"}
          />
          <div className="d-flex justify-content-center align-items-center mt-2">
            <span className="text-md-custom fw-bold">
              {parseInt(availabilityDetails.availability)}hrs / week
            </span>
          </div>
        </>
      );
    } else {
      return <span className="text-muted">Nothing to display here!</span>;
    }
  };
  return (
    <div className="col-12 mb-3">
      <div className="card-custom">
        <div className="card-body ">
          <div className="d-block mb-3">
            <span className="fw-bold">Current Availability</span>
          </div>

          {displayAvailabilityContent()}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityHolder;
