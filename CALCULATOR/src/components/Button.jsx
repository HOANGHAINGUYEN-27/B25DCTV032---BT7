function Button({ label, color = "#4caf50", wide = false, onClick }) {
  return (
    <button
      className={wide ? "btn wide" : "btn"}
      style={{ background: color }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
