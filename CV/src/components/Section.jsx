function Section({ title, children }) {
  return (
    <section className="section">
      <h4>{title}</h4>
      {children}
    </section>
  );
}

export default Section;
