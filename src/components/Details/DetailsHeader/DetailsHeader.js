import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./detailsHeader.scss";
import { baseImgURL } from "../../../api/baseUrl";
const DetailsHeader = ({ type, bgImg, title }) => {
  return (
    <div className="details-header">
      <img src={`${baseImgURL}/${bgImg}`} alt="movie" />
      <div className="detail-breadcrumbs">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={`/${type}`}>{type.replace("_", " ")}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default DetailsHeader;
