export function OnClick() {
  let c = 0;
  const handleClick = () => console.log("i am clicked");
  const handleClick2 = (name) => console.log(` ${name} stop click me`);
  const handleClick3 = (name) => {
    if (c < 4) {
      c++;
      console.log(`${name} ! you  clicked me ${c} times`);
    } else {
      console.log("stop clicking me");
    }
  };

  const handleClick4 = (e) => {
    console.log(e);
  };

  const handleClick5 = (e) => {
    e.target.textContent = "ouch";
    console.log(e);
  };

  const handleClick6 = (e) => {
    e.target.style.display = "none";
    console.log(e);
  };
  return <button onClick={(e) => handleClick6(e)}> click me</button>;
}
