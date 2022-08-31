import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsBody from "../../components/Details/DetailsBody/DetailsBody";
import DetailsHeader from "../../components/Details/DetailsHeader/DetailsHeader";
import DetailsSlider from "../../components/Details/DetailsSlider/DetailsSlider";
import { getDetailsData } from "../../redux/action/detailsAction";
import { getRecommendData } from "../../redux/action/recommendAction";
const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { detailsData } = useSelector((state) => state);
  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(getDetailsData(params.id));
      dispatch(getRecommendData(params.id));
    }
    window.scrollTo(0, 0);
  }, [dispatch, params.id]);

  return (
    <div className="details">
      <div className="container">
        {!detailsData?.loading ? (
          <div className="details-inner">
            {detailsData?.details?.backdrop_path && (
              <DetailsHeader
                type={params.type}
                bgImg={detailsData?.details?.backdrop_path}
                title={detailsData?.details?.title}
              />
            )}
            <DetailsBody detailsData={detailsData?.details} />
          </div>
        ) : (
          <p>Error</p>
        )}
        <DetailsSlider params={params.type} />
      </div>
    </div>
  );
};

export default Details;
