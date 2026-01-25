// pages/HomePage.jsx
import React from "react";
import RecipeList from "../components/RecipeList";
import AddRecipeForm from "../components/AddRecipeForm";

function HomePage() {
  return (
    <div className="home-page">
      <div className="page-header">
        <h1>My Recipe Collection</h1>
        <p className="page-subtitle">
          Add new recipes and manage your collection
        </p>
      </div>

      <div className="home-layout">
        {/* Left Column: Create Recipe Form */}
        <div className="left-column">
          <div className="form-card">
            <h2 className="form-title">Add New Recipe</h2>
            <AddRecipeForm />
          </div>
        </div>

        {/* Right Column: Recipe List */}
        <div className="right-column">
          <div className="list-card">
            <h2 className="list-title">Your Recipes</h2>
            <RecipeList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
