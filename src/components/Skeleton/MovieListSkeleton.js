import React from "react";
import ContentLoader from "react-content-loader";

const MovieListSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 220 320"
    backgroundColor="#e0dcdc"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="1" rx="8" ry="8" width="178" height="222" />
    <rect x="5" y="267" rx="8" ry="8" width="109" height="17" />
    <rect x="6" y="237" rx="8" ry="8" width="65" height="19" />
    <rect x="135" y="268" rx="8" ry="8" width="40" height="17" />
  </ContentLoader>
);

export default MovieListSkeleton;
