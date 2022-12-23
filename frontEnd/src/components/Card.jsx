import "./card.scss";

export const Card = ({ label, price, perks }) => {
  return (
    <div className="Card">
      <h3 className="Card__label">{label}</h3>
      <p>
        <span>{price}</span> $/month
      </p>
      <button className="button__primary">
        <a href="/new-mail">Get Started!</a>
      </button>
      <ul>
        {perks.map((perk, index) => {
          return <li key={index}>{perk}</li>;
        })}
      </ul>
    </div>
  );
};
