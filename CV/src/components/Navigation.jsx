function Navigation({ items, current, onChange }) {
  return (
    <nav className="navigation">
      {items.map((item) => (
        <a
          key={item.id}
          href="#"
          className={item.id === current ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            onChange(item.id);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
