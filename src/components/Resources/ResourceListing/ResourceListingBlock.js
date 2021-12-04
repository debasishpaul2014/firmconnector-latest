import HeaderLg from "../../Headers/HeaderLg";
import ResourceListingResultBlock from "./ResourceListingResultBlock";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResourceListingBlock = () => {
  return (
    <>
      <div className="d-block mb-3">
        <HeaderLg
          title={"My Resources"}
          subText={
            "The resource listing showing results on which you have access"
          }
          borderBottom={true}
        />
        <div className="d-flex justify-content-end">
          <Link to="/add-resource">
            <Button variant="primary" size="sm">
              Add Candidate
            </Button>
          </Link>
        </div>
      </div>
      <ResourceListingResultBlock />
    </>
  );
};

export default ResourceListingBlock;
