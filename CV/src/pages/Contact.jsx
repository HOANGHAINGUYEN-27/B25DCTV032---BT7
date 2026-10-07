import Section from "../components/Section.jsx";

function Contact({ contacts }) {
  return (
    <Section title="Đây là các phương thức liên hệ">
      {contacts.map((c) => (
        <p key={c.label}>
          {c.label}:{" "}
          <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            {c.text}
          </a>
        </p>
      ))}
    </Section>
  );
}

export default Contact;
