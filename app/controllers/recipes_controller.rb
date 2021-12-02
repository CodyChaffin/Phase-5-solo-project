class RecipesController < ApplicationController

    def index
        all=Recipe.all
        render json: all, status: :ok
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        if recipe
            render json: recipe, status: :ok
        else
            render json: {error: "Recipe not found" }, status: :not_found
        end
    end
end
