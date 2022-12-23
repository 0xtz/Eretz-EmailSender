import { Card } from "../components/Card";

export const PricingSection = () => {
  // ! get thsi Data from the API :
  const data = [
    {
      label: "Basic",
      price: "1.49",
      perks: ["1 User", "5 mails / day"],
    },
    {
      label: "Professional",
      price: "2.49",
      perks: ["5 Users", "10 mails / day"],
    },
    {
      label: "Master",
      price: "3.49",
      perks: ["10 Users", "20 mails / day"],
    },
  ];
  return (
    <section className="PricingSection" id="plans">
      <div className="rectangle"></div>
      <span className="section__number">1.</span>
      <h2>Choose your plan</h2>
      <div className="container">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              label={item.label}
              price={item.price}
              perks={item.perks}
            />
          );
        })}
      </div>
    </section>
  );
};
