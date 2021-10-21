import HeaderLg from "../../Headers/HeaderLg";
import ResourceListingResultBlock from "./ResourceListingResultBlock";

const ResourceListingBlock = () => {
  return (
    <>
      <div className="d-block mb-4">
        <HeaderLg
          title={"My Resources"}
          subText={
            "The resource listing showing results on which you have access"
          }
          borderBottom={true}
        />
      </div>
      <ResourceListingResultBlock />
    </>
  );
};

export default ResourceListingBlock;
