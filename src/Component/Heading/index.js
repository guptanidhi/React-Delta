import React from 'react';
import styles from './styles.module.scss';


function Heading({children, type}) {
   const Ele = type
   return <Ele className={styles.Heading}>{children}</Ele>
}

export default Heading;
