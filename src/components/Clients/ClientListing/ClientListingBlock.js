import BlockHeader from "../../Headers/BlockHeader";
import ClientListingResultBlock from "./ClientListingResultBlock";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const ClientListingBlock = () => {
  const { userDetails } = useAuthContext();
  const user_primary_role = JSON.parse(userDetails).user_primary_role;

  return (
    <>
      <div className="d-block mb-3">
        <BlockHeader
          title={"My Clients"}
          subText={
            "The client listing showing results on which you have access"
          }
        />

        {user_primary_role === "2" ? (
          <div className="d-flex justify-content-end">
            <Link to="/add-client">
              <Button variant="primary" size="sm">
                Add New Client
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
      <ClientListingResultBlock />
    </>
  );
};

export default ClientListingBlock;
