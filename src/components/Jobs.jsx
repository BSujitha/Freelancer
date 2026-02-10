import '../styles/jobs.css';

const jobsData = [
  { title: 'Frontend Web Developer', needed: 5, location: 'New York', applicants: 3 },
  { title: 'Graphic Designer', needed: 3, location: 'Los Angeles', applicants: 2 },
  { title: 'Mobile App Developer', needed: 4, location: 'San Francisco', applicants: 1 },
  { title: 'Digital Marketer', needed: 2, location: 'Chicago', applicants: 0 },
  { title: 'Backend Developer', needed: 3, location: 'Austin', applicants: 1 },
  { title: 'UI/UX Designer', needed: 2, location: 'Seattle', applicants: 2 },
];

export default function Jobs() {
  return (
    <section className="jobs">
      <h2>WorkMania Job Board</h2>
      <div className="jobs-container">
        {jobsData.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <h3>{job.title}</h3>
              <span>{job.needed} positions</span>
            </div>
            <p className="job-location"><strong>Location:</strong> {job.location}</p>
            <p className="job-applicants"><strong>Applicants Applied:</strong> {job.applicants}</p>
            <button className="btn btn-hire">Hire on WorkMania</button>
          </div>
        ))}
      </div>
    </section>
  );
}
