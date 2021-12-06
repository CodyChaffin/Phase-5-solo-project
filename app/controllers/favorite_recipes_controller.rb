class FavoriteRecipesController < ApplicationController
    
    def create
        fr= FavoriteRecipe.create(frparams)
        # byebug
        if fr.valid?
            render json: fr, status: :created
        else
            render json: {errors: "you need to be logged in"}, status: :unprocessable_entity
        end
    end

    def destroy
        
        recipe = FavoriteRecipe.find_by(dparams)
        # byebug
          if recipe
            recipe.destroy
            head :no_content
          else render json: {error: "Favorite recipe not found"}, status: :not_found
          end
        
    end

    private
    def frparams
    params.permit(:user_id, :recipe_id)
    end  

    def dparams
        params.permit(:id)
    end
end
