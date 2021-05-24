import Options from "./Options";

export default function OrderEntry() {
  return (
    <div>
      <Options optionsType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}
