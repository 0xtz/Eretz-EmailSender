import heroImage from "../assets/HeroImg.svg";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__left">
        <h3 className="home__subtitle">Eretz mail</h3>
        <h1 className="home__title">
          Your New
          <span className="accent__span"> Modern </span>
          Email provider
        </h1>
        <p className="home__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ut
          laudantium, dolores quisquam ipsa aliquam error cum facilis
          voluptatibus numquam facere neque repellat aspernatur minus. Quidem
          delectus, placeat temporibus provident accusantium odit consequatur
          esse, dolorum dolorem cumque quo. Enim, voluptas?
        </p>
        <div className="buttons_container">
          <button className="button__primary">
            <a href="/new-mail">Start For Free!</a>
          </button>
          <button className="button__secondary">
            <a href="#plans">Discover More!</a>
          </button>
        </div>
      </div>
      <div className="Hero__right">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  );
};
