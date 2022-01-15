import BlockHeader from "../../Headers/BlockHeader";
import ResourceListingResultBlock from "./ResourceListingResultBlock";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const ResourceListingBlock = () => {
  const { userDetails } = useAuthContext();
  const user_primary_role = JSON.parse(userDetails).user_primary_role;

  return (
    <>
      <div className="d-block mb-3">
        <BlockHeader
          title={"My Resources"}
          subText={
            "The resource listing showing results on which you have access"
          }
        />

        {user_primary_role === "2" ? (
          <div className="d-flex justify-content-end">
            <Link to="/add-resource">
              <Button variant="primary" size="sm">
                Add Candidate
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
      <ResourceListingResultBlock />
    </>
  );
};

export default ResourceListingBlock;
