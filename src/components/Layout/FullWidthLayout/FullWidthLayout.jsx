import React from "react";
import styles from "./FullWidthLayout.module.scss";

const FullWidthLayout = ({children}) => 
    <div className={styles.wrapper}>
        <div className={styles.container}>
            {children}
        </div>
    </div>

export default FullWidthLayout;
