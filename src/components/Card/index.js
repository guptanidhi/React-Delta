import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import style from "./card.module.scss";

function CustomCard({ data }) {
  return (
    <Card className={style.card}>
      <Card.Title className={`${style.truncate} ${style.carouselTitle}`}>
        {data.DocumentTitle}
      </Card.Title>
      <Card.Body>
        <div className={style.cardHeader}>
          <div className={style.flex}>
            <div className={style.truncate}>
              <span>FileName </span>
              {data.FileName}
            </div>
            <div>
              <span>PublicationMethod </span>
              {data.PublicationMethod}
            </div>
            <div>
              <span>DocumentDate </span>
              {data.DocumentDate}
            </div>
            <div>
              <span>Uploaded By </span>
              {data.UploadedBy}
            </div>
          </div>
        </div>
        <div className={style.cardFooter}>
          <Card.Link href={data.FileLocation} target="_blank">View pdf</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

/** Props **/
CustomCard.defaultProps = {
  data: {},
};

CustomCard.propTypes = {
  data: PropTypes.object,
};

export default CustomCard;
