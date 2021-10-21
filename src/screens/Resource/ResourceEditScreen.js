import Layout from "../../components/Layouts/WithAuth/Layout";
import EditResourceComponent from "../../components/Resources/ResourceEdit/EditResourceComponent";

const AddResource = (props) => {
  const { resourceSlug } = props.match.params;
  console.log(resourceSlug);
  return (
    <Layout>
      <EditResourceComponent resourceSlug={resourceSlug} />
    </Layout>
  );
};

export default AddResource;
