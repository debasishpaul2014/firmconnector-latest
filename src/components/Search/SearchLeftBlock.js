import React, { useEffect, useState } from "react";
import getFirmAccessList from "../../apis/getFirmAccessList";
import { FIRM_IMAGE_BASE } from "../../config/env";

const SearchLeftBlock = (props) => {
  const { user_slug, getSelectedFirmIds } = props;
  const [isFirmListLoading, setIsFirmListLoading] = useState(true);
  const [firmList, setFirmList] = useState(false);
  const [selectedFirmList, setSelectedFirmList] = useState([]);
  const [selectedAvailabilityList, setSelectedAvailabilityList] = useState([]);

  useEffect(() => {
    getSelectedFirmIds(selectedFirmList);
  }, [selectedFirmList]);

  useEffect(() => {
    if (user_slug !== undefined) {
      Promise.all([getFirmAccessList(user_slug)])
        .then(async ([data]) => {
          if (data?.data?.firmList) {
            setIsFirmListLoading(false);
            setFirmList(data.data.firmList);

            var firmCheckedIds = [];

            data.data.firmList.map((item) => {
              return firmCheckedIds.push(item.firm_id);
            });

            await setSelectedFirmList(firmCheckedIds);
          } else {
            setIsFirmListLoading(false);
          }
        })
        .catch((err) => {
          setIsFirmListLoading(false);
          console.log(err);
        });
    }
  }, [user_slug]);

  const updateSelectedFirmIds = (id) => {
    var ids = [...selectedFirmList];

    const index = selectedFirmList.indexOf(id); //use id instead of index

    if (index > -1) {
      ids.pop(index);
    } else {
      ids.push(id);
    }

    setSelectedFirmList(ids);
  };

  const displayLoadingBlock = () => {
    return (
      <div>
        <span>Loading related firm list</span>
      </div>
    );
  };

  const displayFirmList = () => {
    if (firmList) {
      return (
        <>
          {firmList.map(function (item, index) {
            return (
              <div key={item.firm_id} className="mb-2 border-bottom-light-sm">
                <div className="firm-logo-sm-custom shadow-sm">
                  <img
                    src={FIRM_IMAGE_BASE + item.firm_logo}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="form-check mt-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.firm_id}
                    checked={
                      selectedFirmList.indexOf(item.firm_id) !== -1
                        ? true
                        : false
                    }
                    onChange={() => updateSelectedFirmIds(item.firm_id)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    <span className="text-dark-custom text-x-sm-custom">
                      {item.firm_name}
                    </span>
                  </label>
                </div>
              </div>
            );
          })}
        </>
      );
    }
  };

  const displayRelatedFirms = () => {
    if (isFirmListLoading) {
      return displayLoadingBlock();
    } else {
      return displayFirmList();
    }
  };

  return (
    <div className="d-flex flex-column col-12">
      <div className="card-custom shadow">
        <div className="card-body">
          <div className="d-block mb-3">
            <span className="fw-bold text-md-custom text-muted-custom">
              Related Firms
            </span>
          </div>
          <div>{displayRelatedFirms()}</div>
        </div>
      </div>

      <div className="card-custom shadow mt-2">
        <div className="card-body">
          <div className="d-block mb-3">
            <span className="fw-bold text-md-custom text-muted-custom">
              Availability
            </span>
          </div>
          <div className="d-block">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="40"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <span className="text-dark-custom text-x-sm-custom">
                  40 hrs/week
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="30"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <span className="text-dark-custom text-x-sm-custom">
                  30 hrs/week
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="20"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <span className="text-dark-custom text-x-sm-custom">
                  20 hrs/week
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="10"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <span className="text-dark-custom text-x-sm-custom">
                  10 hrs/week
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="0"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <span className="text-dark-custom text-x-sm-custom">
                  0 hrs/week
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLeftBlock;
