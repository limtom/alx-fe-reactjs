import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const recipeStore = (set) => ({
  recipes: [],

  addRecipe: (recipe) => {
    set((state) => ({
      recipes: [...state.recipes, recipe],
    }));
  },

  setRecipes: (recipes) => {
    set({ recipes });
  },

  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
  },

  updateRecipe: (id, updates) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updates } : recipe,
      ),
    }));
  },
});

export const useRecipeStore = create(
  devtools(persist(recipeStore, { name: "recipes" })),
);
