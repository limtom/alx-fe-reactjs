import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/${recipe.id}`}>
      <article className="group bg-white  rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300 cursor-pointer">
        <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
          <img
            alt="Italian Pizza"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={recipe.image}
          />
        </div>
        <div className="flex flex-col justify-between py-1 flex-grow">
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
              {recipe.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {recipe.summary}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 ">
            <div className="flex items-center gap-1 text-primary">
              <span className="material-icons-round text-sm">schedule</span>
              <span className="text-xs font-bold">{recipe.prepTime}</span>
            </div>
            <div className="w-px h-3 bg-gray-300"></div>
            <div className="flex items-center gap-1 text-gray-500 ">
              <span className="material-icons-round text-sm">
                signal_cellular_alt
              </span>
              <span className="text-xs font-medium">{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default RecipeCard;
