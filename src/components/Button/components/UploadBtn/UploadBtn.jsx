import React from 'react';
import styles from'./UploadBtn.module.scss';


const UploadBtn = ({
  loaded,
  wrongType,
  overSize,
  success,
  fileName,
  onChange,
  handleConfirm,
}) => (
  <div className={styles.uploadContainer}>
    {/* hide this input  */}
    <input
      id="UPLOAD"
      className={styles.uploadInput}
      type="file"
      onChange={onChange}
    />
    <label htmlFor="UPLOAD" className={styles.uploadLabel}>
      <div className={`${styles.btn} + ${styles.uploadBtn}`}>
        {loaded ? fileName : "Upload"}
      </div>
    </label>
    {loaded && !wrongType && !overSize && !success ? (
      <button
        className={`${styles.btn} + ${styles.confirmBtn}`}
        onClick={(e) => handleConfirm(e)}
      >
        Confirm
      </button>
    ) : null}
    <div className={styles.floatWarning}>
      {wrongType ? (
        <div className={styles.warningText}>
          X Only support .pdf format. Please uploaded again.
        </div>
      ) : null}
      {overSize ? (
        <div className={styles.warningText}>
          X Only support file size less than 25 MB. Please uploaded again.
        </div>
      ) : null}
      {success ? (
        <div className={styles.successText}>Upload Successfully.</div>
      ) : null}
    </div>
  </div>
);

export default UploadBtn;