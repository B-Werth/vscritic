import { Context } from "./../context";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";
import { PokemonClient } from "pokenode-ts";
import { resolve } from "path";

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
    getAll: publicProcedure.query(({ ctx }) => {
  return ctx.prisma.user.findMany({
    include:{
      pokemon: true
    },
   

  });
  
}),

addMenuItem: publicProcedure
    .input(
      z.object({
        pokemonid: z.number(),
        pokemonname: z.string(),
        sprite: z.string(),
        
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { pokemonid,pokename,sprite, } = input
      const menuItem = await ctx.prisma.pokemon.create({
        data: {
          pokemonid,
          pokename,
          sprite,
          
        },
      })
      return menuItem;
    
    

    })

});
