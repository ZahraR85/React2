import Button from "./Button";
const bgColor = "skyblue";
const inlineStyles ={
  display : "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: bgColor,
};
const About = () => {
  return(
    <section style={inlineStyles} id="about">
      <h1>I&apos;m the about section!</h1>
      {/*<button className="btn">click me too!</button> */}
      <Button text="click me too"/>
    </section>
  );
};
export default About;