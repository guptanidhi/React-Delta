import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import style from "./card.module.scss";

function CustomCard({ data }) {
  return (
    <Card className={style.card}>
      <Card.Body>
        <div className={style.cardHeader}>
          <div className={style.flex}>
            <div><span>Observations  </span>{data.Downloads}</div>
            <div><span>Features  </span>{data.Likes}</div>
            <div><span>Last insert  </span>{data.Shared}</div>
          </div>
        </div>
        <Card.Text>
        <div className={style.cardFooter}>
           <span>By</span> {data.UploadedBy}
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

/** Props **/
CustomCard.defaultProps = {
	data: {}
}

CustomCard.propTypes = {
	data: PropTypes.object
}

export default CustomCard;