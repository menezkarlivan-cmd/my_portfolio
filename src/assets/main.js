// 1. Skills Data
const skillsData = [
  { category: "Web Design" },
  { category: "Branding" },
  { category: "Graphic Design" },
  { category: "SEO" },
  { category: "Marketing" }
];

// 2. Education Data
const educationData = [
  {
    period: "2024 TO PRESENT",
    school: "GARCIA COLLEGE OF TECHNOLOGY",
    level: "College",
    details: "1st Year to Present"
  },
  {
    period: "2022 - 2024",
    school: "GARCIA COLLEGE OF TECHNOLOGY",
    level: "Senior High School",
    details: "Grade 11 - Grade 12"
  },
  {
    period: "2018 - 2022",
    school: "IBAJAY INTEGRATED SCHOOL",
    level: "Junior High School",
    details: "Grade 7 - Grade 10"
  },
  {
    period: "2012 - 2018",
    school: "NABAS ELEMENTARY SCHOOL",
    level: "Elementary",
    details: "Grade 1 - Grade 6"
  }
];

// 3. Achievements Data
const achievementsData = [
  {
    title: "School Meet Arnis Silver Medalist",
    desc: "Competed in the martial arts Arnis competition and won a silver medalist at the elementary level.",
    tag: "Sports"
  },
  {
    title: "Member of Rondalla de Ibajay",
    desc: "Active member and performer representing the ensemble during secondary level showcase events in Boracay.",
    tag: "Music & Culture"
  },
  {
    title: "Member of Royal Band Group",
    desc: "Collaborated and performed as a musical ensemble member in group band performances.",
    tag: "Music"
  },
  {
    title: "Joined the Choral Competition",
    desc: "Represented school and community groups in competitive choral singing events.",
    tag: "Performing Arts"
  },
  {
    title: "NSTP Graduate",
    desc: "Successfully completed civic welfare and community service training requirements.",
    tag: "Community & Service"
  }
];

// Render Skills
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (skill) => `
      <div class="skill-card">
        <h3>${skill.category}</h3>
      </div>
    `
    )
    .join("");
}

// Render Education Timeline
function renderEducation() {
  const container = document.getElementById("education-timeline");
  if (!container) return;

  container.innerHTML = educationData
    .map(
      (edu) => `
      <div class="timeline-item">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
          <div class="timeline-line"></div>
        </div>
        <div class="timeline-content">
          <span class="timeline-period">${edu.period}</span>
          <h3 class="timeline-school">${edu.school}</h3>
          <p class="timeline-level">${edu.level}</p>
          <span class="timeline-details">${edu.details}</span>
        </div>
      </div>
    `
    )
    .join("");
}

// Render Achievements
function renderAchievements() {
  const container = document.getElementById("achievements-list");
  if (!container) return;

  container.innerHTML = achievementsData
    .map(
      (ach) => `
      <div class="achievement-card">
        <div>
          <h3>${ach.title}</h3>
          <p>${ach.desc}</p>
        </div>
        <span class="achievement-date">${ach.tag}</span>
      </div>
    `
    )
    .join("");
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderEducation();
  renderAchievements();
});