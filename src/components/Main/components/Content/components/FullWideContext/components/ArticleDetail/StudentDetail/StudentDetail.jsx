import React from "react";
import styles from "./StudentDetail.module.scss";

const StudentDetail = ({title,type}) => {
  console.log(type);
  return (
    <div>
      <h1>asgagasgasgasgagag</h1>
      <br/>
      <h3>Overview</h3><br/>
      <span>
        begin content excerpt... This unit develops understanding of the fundamental principles, concepts and standards that guide the development of information organisation and retrieval systems and web-based information architectures. It deals with standards governing description, distribution and access to information locally and globally cataloguing, indexing, thesaurus construction, classification and metadata for knowledge discovery. It … end content excerpt. For more content click the Read more button below.
        This unit develops understanding of the fundamental principles, concepts and standards that guide the development of information organisation and retrieval systems and web-based information architectures. It deals with standards governing description, distribution and access to information locally and globally cataloguing, indexing, thesaurus construction, classification and metadata for knowledge discovery. It examines the effects of economic, social and technological factors on the development of bibliographic networks and cataloguing operations. Practical sessions deal with the use of major bibliographic tools, schemes and systems for information organisation.
      </span>
      <br/><br/>
      <h3>Offerings</h3> 
      <h5>S2-01-CLAYTON-ON-CAMPUS</h5>
      <div className={styles.div}>Location:Clayton</div>
      <div className={styles.div}>Teaching period:Second semester</div>
      <div className={styles.div}>Attendance mode:On-campus</div>
        
      <h3>Rules</h3> 
      <h5>Enrolment Rule</h5>
      <div className={styles.div}>Prohibition: IMS5017</div>

      <h3>Contacts</h3> 
      <h5>Chief Examiner(s)</h5>
      <div className={styles.div}>Associate Professor John Doe</div>
      <div className={styles.div}>
        Email: <a href = "mailto: john.doe@abc.edu">john.doe@abc.edu</a>
      </div>

      <h3>Learning outcomes</h3>

      <div className={styles.div}>On successful completion of this unit, you should be able to:</div>
      <div className={styles.div}>
        1.Explain the key principles, concepts and standards that guide the development of information organisation and retrieval systems and web-based information architectures;
      </div>
      <div className={styles.div}>
        2.Apply standard cataloging, classification, indexing, thesaurus construction, and knowledge discovery metadata schemes and tools;
      </div>
      <div className={styles.div}>
        3.Explain the guiding principles behind bibliographic utilities/networks;
      </div>
      <div className={styles.div}>
        4.Use bibliographic software; and
      </div>
      <div className={styles.div}>
        5.Design systems for organising information and facilitating access to information resources in physical collections or digital/web-based repositories.
      </div>

      <h3>Assessment</h3>

      <div className={styles.div}>
        Examination (2 hours and 10 minutes): 50%; In-semester assessment: 50%.
      </div>
      <div className={styles.div}>
        This unit contains hurdle requirements which you must achieve to be able to pass the unit. The consequence of not achieving a hurdle requirement is a fail grade (NH) and a maximum mark of 45 for the unit.
      </div>

      <h3>Workload requirements</h3>
      <h5>Workload</h5>

      <div className={styles.div}>Minimum total expected workload equals 12 hours per week comprising:</div>

      (a.) Contact hours for on-campus students:

          2 hours of lectures
          One 2-hour laboratory

      (b.) Study schedule for off-campus students:

          Off-campus students generally do not attend lecture and tutorial sessions, however should plan to spend equivalent time working through the relevant resources and participating in discussion groups each week.

      (c.) Additional requirements (all students):

          A minimum of 8 hours independent study per week for completing lab and project work, private study and revision.

      <h3>Availability in areas of study</h3>
        <div className={styles.div}>Library and information science</div>
      </div>
  );
}

export default StudentDetail;
