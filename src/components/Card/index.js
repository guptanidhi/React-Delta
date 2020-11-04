import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from '../Icon'
import { Card, Modal } from "react-bootstrap";
import style from "./card.module.scss";

const CustomCard = ({ data }) => {
  const [ isPdfOpen, setPdfOpen ] = useState(false)
  const handleClose = () => {
    setPdfOpen(false)
  }
  const fileId = data.FileLocation.split(/\/d\//)[1].split(/\/view/)[0];
  return (
    <>
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
      <div className={style.upload}><Icon icon="upload"/>{data.UploadedBy}</div>
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
          <div className={`${style.cardAddon} ${style.socialIcon}`}>
            <span>
              <Icon icon="download" />
              {data.Downloads}
            </span>
            <span>
            <Icon icon="like" />
              {data.Likes}
            </span>
            <span>
            <Icon icon="share" />
              {data.Shared}
            </span>
          </div>
          <div className={`${style.cardAddon} ${style.socialIcon}`}>
            <span>
              <Icon icon="pdfView" />
              <Card.Link onClick={() => setPdfOpen(true)} >View pdf</Card.Link>
            </span>
            <span>
            <Icon icon="pdfDownload" />
            <Card.Link href={`https://drive.google.com/uc?export=download&id=${fileId}`} download={data.FileName}>Download</Card.Link>
            </span>
          </div>          
        </div>
      </Card.Body>
    </Card>    
    {isPdfOpen && (
      <Modal show={isPdfOpen} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{data.FileName}</Modal.Title>
        </Modal.Header>      
        <Modal.Body>
          <iframe title={data.FileName} frameborder="0" scrolling="no" width="98%" height="400" src={`https://drive.google.com/file/d/${fileId}/preview`}> </iframe>
        </Modal.Body>
      </Modal>
      )}
    </>
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
