import React from "react";
import "./styles.css";
import OrganizationChart from "@dabeng/react-orgchart";
import { orgData } from "./Tree";
import { User } from "react-feather";
import Layout from "../../../components/Layouts/WithAuth/Layout";

export default class App extends React.Component {
  renderNode({ nodeData }) {
    return (
      <div className="org-node-container">
        <div className="org-person">
          <div>
            <User size={32} />
          </div>
        </div>
        <div className="org-name">{nodeData.name}</div>
        <div className="org-title">{nodeData.designation}</div>
        <div className="org-title">
          Data unclassified: {nodeData.data_unclassified}
        </div>
        <div className="org-title">compliance: {nodeData.compliance}</div>
        {nodeData.children.length > 0 && (
          <div
            className="org-node-children"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              let childNodes = document.getElementById(nodeData.id)
                .parentElement.childNodes;
              if (childNodes[1].className.includes("hidden")) {
                childNodes[0].className = "oc-node";
                childNodes[1].className = "";
              } else {
                childNodes[0].className = "oc-node isChildrenCollapsed";
                childNodes[1].className = "hidden";
              }
            }}
          >
            {nodeData.children.length} Reportees
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <OrganizationChart
          datasource={orgData}
          chartClass="sekure-org-chart"
          pan={true}
          zoom={true}
          NodeTemplate={this.renderNode}
        />
      </Layout>
    );
  }
}
