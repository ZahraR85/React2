import Button from "./Button";
const Hero = () => {
  return(
    <section id="hero">
      <h1>I&apos;m a hero section!</h1>
      <Button text="click"/>
      <label htmlFor="my-input">An input</label>
      <input id="my-input" type="text" />
    </section>
  );
};
export default Hero;