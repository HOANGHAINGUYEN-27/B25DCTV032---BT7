import Section from "../components/Section.jsx";

function Home({ skills, projects }) {
  return (
    <>
      <p>Chào mừng bạn đến với trang web của tôi!</p>

      <Section title="Kỹ năng">
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Section>

      <Section title="Dự án">
        <ul>
          {projects.map((project) => (
            <li key={project.name}>
              <strong>{project.name}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export default Home;
