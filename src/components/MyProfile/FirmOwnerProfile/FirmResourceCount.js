import React, { useEffect, useState } from "react";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";
import { Button } from "react-bootstrap";

import getFirmResourceCount from "../../../apis/getFirmResourceCount";

const FirmResourceCount = (props) => {
  const { user_slug } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [resourceCount, setResourceCount] = useState(false);

  useEffect(() => {
    Promise.all([getFirmResourceCount(user_slug)])
      .then(async ([data]) => {
        if (data?.data?.resource_count) {
          setIsLoading(false);
          setResourceCount(data?.data?.resource_count);
        } else {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const displayMainContent = () => {
    if (isLoading === true) {
      return displayLoadingBlock();
    } else {
      return displayFirmInformation();
    }
  };

  const displayLoadingBlock = () => {
    return <LoadingPageSm title={"Loading Resources"} />;
  };

  const displayFirmInformation = () => {
    return (
      <>
        <h1 class="display-3">{resourceCount}</h1>
        <div className="d-block mb-2">
          <span className="h6 text-muted-custom">Added Resources</span>
        </div>
        <div className="d-block mt-2">
          <Button size="sm" variant="success">
            Add new Resource
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3 mb-md-2 mb-lg-0 mb-xlg-0 ">
      <div className="card-custom p-3 shadow h-100 bg-white">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          {displayMainContent()}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FirmResourceCount);
