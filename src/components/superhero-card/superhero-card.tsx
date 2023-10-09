import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import { Superhero } from "~/types/superhero";

export type SuperheroCardProps = QwikIntrinsicElements["div"] & {
  superhero: Superhero;
};

export const SuperheroCard = component$((props: SuperheroCardProps) => {
  const { superhero, class: classList, ...rest } = props;

  return (
    <div class={classList?.toString()} {...rest}>
      <div>
        <p>{superhero.id}</p>
        <p>{superhero.name}</p>
        <p>{superhero.firstName}</p>
        <p>{superhero.lastName}</p>
      </div>
    </div>
  );
});
