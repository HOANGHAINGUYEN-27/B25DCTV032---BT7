function Greeting() {
  const hour = new Date().getHours();
  let text;
  if (hour < 12) text = "Chào buổi sáng!";
  else if (hour < 18) text = "Chào buổi chiều!";
  else text = "Chào buổi tối!";

  return <h2>{text}</h2>;
}

export default Greeting;
