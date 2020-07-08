import React from "react";
import styles from "./FullWidthLayout.module.scss";

const FullWidthLayout = ({children}) => 
    <div className={styles.wrapper}>
     {children}
    </div>

export default FullWidthLayout;
