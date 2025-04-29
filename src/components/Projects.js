import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Salesforce Public Job Portal – PPR International Jobs</h3>
        <p>Tech Stack: Salesforce Experience Cloud, LWC, Apex, REST APIs</p>
        <p>Architected and led the implementation of a public-facing job portal with custom domain and no-login guest access.</p>
      </div>
      <div className="project-item">
        <h3>Integration with Google Drive API</h3>
        <p>Tech Stack: Salesforce, Google Drive API, REST API</p>
        <p>Integrated Google Drive API for automatic resume upload and Gmail alerts for job applicants.</p>
      </div>
    </section>
  );
}

export default Projects;
