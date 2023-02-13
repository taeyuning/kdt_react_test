import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./EventDetail.module.css";

function EventProductDetail() {
  const { id } = useParams();
  const [eventDetail, seteventDetail] = useState();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3001/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        seteventDetail(data);
      });
  }, [id]);

  return (
    <>
      {eventDetail && (
        <div className={style.eventDetailWrap}>
          <h1>{eventDetail.name}</h1>
          {/* <p>{eventDetail.name}</p> */}
          <img src={eventDetail.description} alt="event01" />
        </div>
      )}
    </>
  );
}

export default EventProductDetail;
