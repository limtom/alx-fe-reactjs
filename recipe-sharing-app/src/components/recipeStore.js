import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const recipeStore = (set) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],

  // Add new recipe
  addRecipe: (recipe) => {
    set((state) => ({
      recipes: [...state.recipes, recipe],
    }));
  },

  // Set recipe
  setRecipes: (recipes) => {
    set({ recipes });
  },

  // DElete recipe
  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
  },

  // Update the recipe
  updateRecipe: (id, updates) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updates } : recipe,
      ),
    }));
  },

  filterRecipe: () => {
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
      ),
    }));
  },
});

export const useRecipeStore = create(
  devtools(persist(recipeStore, { name: "recipes" })),
);
