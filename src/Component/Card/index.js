import React from 'react';
import {Card} from 'react-bootstrap';
import style from './card.module.scss'

function CardCustom({data}) {
    return (
        <Card>
          <Card.Body>
            <div className={style.cardHeader}>
               <div className={style.flex}>
                   <span>{data.DocumentDate}</span>
                   <span>{data.Language}</span>
                   <span>{data.PublicationMethod}</span>
               </div>
               <Card.Title className={style.ellipsis}>{data.DocumentTitle}</Card.Title>
            </div>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

export default CardCustom
