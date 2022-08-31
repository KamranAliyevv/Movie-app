import React from "react";
import "./empty.scss";
const Empty = ({ inputValue }) => {
  return (
    <div className="empty">
      {inputValue.length > 0 ? (
        <>
          <span>{`"${inputValue}"`}</span> axtarışına uyğun film tapılmadı
        </>
      ) : (
        <>Heç bir film tapılmadı</>
      )}
    </div>
  );
};

export default Empty;
