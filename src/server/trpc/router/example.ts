import { Context } from "./../context";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";
import { PokemonClient } from "pokenode-ts";

export const exampleRouter = router({
  pokemon1: publicProcedure
    .input(z.object({ id: z.number().nullish() }).nullish())
    .query(({ input }) => {
      const api = new PokemonClient();
      const pokemon = api.getPokemonById(input.id);
      return pokemon;
    }),
  pokemon2: publicProcedure
    .input(z.object({ id: z.number().nullish() }).nullish())
    .query(({ input }) => {
      const api = new PokemonClient();
      const pokemon = api.getPokemonById(input.id);
      return pokemon;
    }),
  pokemon3: publicProcedure
    .input(z.object({ id: z.number().nullish() }).nullish())
    .query(({ input }) => {
      const api = new PokemonClient();
      const pokemon = api.getPokemonById(input.id);
      return pokemon;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.pokemon.findMany();
  }),
  // Create a user

  Pkm: publicProcedure
    .input(
      z.object({
        pokename: z.string(),
        sprite: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const post = await prisma?.pokemon.create({
        data: input,
      });
      return post;
    }),
});
