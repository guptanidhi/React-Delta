import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import style from "./card.module.scss";

function CustomCard({ data }) {
  return (
    <Card className={style.card}>
      <div className={style.cardAddon}>
        <span>
          {data.DocumentDate}
        </span>
        <span>
          {data.PublicationMethod}
        </span>
        <span>
          {data.Language}
        </span>
      </div>
      <Card.Title className={style.carouselTitle}>
        {data.DocumentTitle}
      </Card.Title>
      <Card.Body className={style.cardBody}>
        <div className={style.cardHeader}>
          <div className={style.flex}>
            <div className={style.truncate}>
              <span>Categories </span>
              {data.Categories}
            </div>
            <div>
              <span>Desc </span>
              {data.Description}
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
