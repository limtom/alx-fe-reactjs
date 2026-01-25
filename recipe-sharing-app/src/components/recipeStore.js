import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const recipeStore = (set, get) => ({
  recipes: [],

  addRecipe: (recipe) => {
    set((state) => ({ recipes: [...state.recipes, recipe] }));
  },

  setRecipes: (recipes) => {
    set({ recipes });
  },

  deleteRecipe: (recipeId) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    }));
  },

  updateRecipe: (recipeId, updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe,
      ),
    }));
  },

  getRecipe: (id) => {
    return get().recipes.find((recipe) => recipe.id === id);
  },

  getRecipeCount: () => {
    return get().recipes.length;
  },
});

export const useRecipeStore = create(
  devtools(persist(recipeStore, { name: "recipes" })),
);
