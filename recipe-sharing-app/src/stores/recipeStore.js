import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const recipeStore = (set) => ({
  recipes: [],

  addRecipe: (recipe) => {
    set((state) => ({ recipes: [...state.recipes, recipe] }));
  },

  setRecipe: (recipes) => {
    set({ recipes });
  },
});

export const useRecipeStore = create(
  devtools(persist(recipeStore, { name: "recipes" })),
);
