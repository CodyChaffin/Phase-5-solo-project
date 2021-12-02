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

    def create
        
        recipe = Recipe.create(new_recipe)
        
        if recipe.valid? 
            render json: recipe, status: :created
            
        else
            render json: {errors: "Not able to create"}, status: :unprocessable_entity
        end
       
    
    end

    private
     
    

    def new_recipe
        params.permit(:name, :image_url, :origin, :recipe, :directions =>[])
    end
end
