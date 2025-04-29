import React from 'react';

function Experience() {
  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>Senior Salesforce Developer (Team Leader)</h3>
        <p><strong>LTIMindtree</strong> - 09/2024 - Present</p>
        <ul>
          <li>Led Salesforce development and customized solutions using LWC, Apex, and APIs.</li>
          <li>Mentored junior developers and facilitated weekly technical upskilling sessions.</li>
          <li>Managed integration lifecycles and collaborated with stakeholders to meet project goals.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Senior Salesforce Developer</h3>
        <p><strong>NCR Corporation</strong> - 09/2019 - 09/2022</p>
        <ul>
          <li>Worked on full-cycle Salesforce implementation with a focus on Sales Cloud and integrations.</li>
          <li>Dealt with complex data management using tools like Apex Data Loader.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
