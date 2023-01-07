import { Context } from "./../context";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";
import { PokemonClient } from "pokenode-ts";

export const exampleRouter = router({
  pokemon1: publicProcedure
    .input(z.object({ id: z.number().nullish() }).nullish())
    .query(({ input }) => {
      const api = new PokemonClient();

      if (input) {
        const pokemon = api.getPokemonById(input.id as number);
        return pokemon;
      }
    }),
});
