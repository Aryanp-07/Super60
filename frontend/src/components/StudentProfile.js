// import React, { useState, useEffect } from 'react';
// import FileUpload from './FileUpload';

// const StudentProfile = ({ match }) => {
//   const [profile, setProfile] = useState(null);
//   const [notes, setNotes] = useState('');

//   useEffect(() => {
//     async function fetchProfile() {
//       const response = await fetch(`http://localhost:5000/students/${match.params.id}`);
//       const data = await response.json();
//       setProfile(data);
//       setNotes(data.development_notes || '');
//     }
//     fetchProfile();
//   }, [match.params.id]);

//   const handleNotesChange = (e) => {
//     setNotes(e.target.value);
//   };

//   const saveNotes = async () => {
//     await fetch(`http://localhost:5000/students/${match.params.id}/update_notes`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ development_notes: notes }),
//     });
//   };

//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{profile.name}'s Profile</h1>

//       <h2>Development Notes</h2>
//       <textarea value={notes} onChange={handleNotesChange}></textarea>
//       <button onClick={saveNotes}>Save Notes</button>

//       <h2>Upload Handwritten Bio</h2>
//       <FileUpload studentId={match.params.id} />
//     </div>
//   );
// };

// export default StudentProfile;

import React, { useState } from 'react';
import FileUpload from './FileUpload';
import './StudentProfile.css'; // Import the CSS file

const StudentProfile = () => {
  // Sample hardcoded profile data
  const sampleProfile = {
    name: 'John Doe',
    development_notes: 'John has shown great improvement in coding skills and teamwork.',
    presentation_skills_1: 'Good communication, needs more confidence.',
    presentation_skills_2: 'Marked improvement, well-structured presentation.',
    extempore_assessment: 'Handled impromptu topics decently well, but could use more practice.',
    mock_interview_assessment: 'Good problem-solving skills, but lacks confidence under pressure.',
    start_stop_continue: 'Start contributing to team discussions more actively, Stop procrastinating, Continue working on technical projects.',
    executive_synopsis: 'John is a promising candidate with a solid technical foundation and improving soft skills.',
    bio_pdf: 'sample_bio.pdf',
    additional_notes: 'Good communication',
    disc_report_1: 'sample_disc_report.pdf',
    disc_report_2: 'sample_disc_report2.pdf'
  };

  // Simulating the state of notes with the hardcoded profile data
  const [notes, setNotes] = useState(sampleProfile.development_notes);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const saveNotes = () => {
    // Simulate saving notes without backend functionality
    console.log("Development Notes Saved:", notes);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="/logo_left.jpg" alt="Left Logo" className="logo left-logo" />
        <h1>{sampleProfile.name}'s Profile</h1>
        <img src="/logo_right.png" alt="Right Logo" className="logo right-logo" />
      </div>

      <div className="profile-section">
        <h2>Upload Handwritten Bio</h2>
        <FileUpload studentId="sample" />
      </div>

      <div className="profile-section">
        <h2>Development Notes</h2>
        <textarea value={notes} onChange={handleNotesChange}></textarea>
        <button onClick={saveNotes}>Save Notes</button>
      </div>

      <div className="profile-section">
        <h2>Disc Assessment Report</h2>
        <FileUpload studentId="sample" />
        <p><a href={`/${sampleProfile.disc_report_1}`}>Download Disc Report 1</a></p>
      </div>

      <div className="profile-section">
        <h2>Presentation Skills 1 Assessment</h2>
        <textarea value={sampleProfile.presentation_skills_1} onChange={handleNotesChange}></textarea>
        <button onClick={saveNotes}>Save Notes</button>
        <p></p>
      </div>

      <div className="profile-section">
        <h2>Presentation Skills 2 Assessment</h2>
        <textarea value={sampleProfile.presentation_skills_2} onChange={handleNotesChange}></textarea>
        <button onClick={saveNotes}>Save Notes</button>
      </div>

      <div className="profile-section">
        <h2>Extempore Assessment</h2>
        <textarea value={sampleProfile.extempore_assessment} onChange={handleNotesChange}></textarea>
        <button onClick={saveNotes}>Save Notes</button>
      </div>

      <div className="profile-section">
        <h2>Any Additional Notes</h2>
        <textarea value={sampleProfile.additional_notes} onChange={handleNotesChange}></textarea>
        <button onClick={saveNotes}>Save Notes</button>
      </div>

      <div className="profile-section">
        <h2>Mock Interview Assessment</h2>
        <textarea value={sampleProfile.mock_interview_assessment} onChange={handleNotesChange}></textarea>
        <button onClick={saveNotes}>Save Notes</button>
      </div>

      <div className="profile-section">
        <h2>Start, Stop, Continue</h2>
        <textarea value={sampleProfile.start_stop_continue} onChange={handleNotesChange}></textarea>
        <button onClick={saveNotes}>Save Notes</button>
      </div>

      <div className="profile-section">
        <h2>2nd Disc Assessment Report</h2>
        <FileUpload studentId="sample" />
        <p><a href={`/${sampleProfile.disc_report_2}`}>Download Disc Report 2</a></p>
      </div>

      <div className="profile-section">
        <h2>Executive Synopsis</h2>
        <textarea value={sampleProfile.executive_synopsis} onChange={handleNotesChange}></textarea>
        <button onClick={saveNotes}>Save Notes</button>
      </div>
    </div>
  );
};

export default StudentProfile;
