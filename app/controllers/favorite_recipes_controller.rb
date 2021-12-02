class FavoriteRecipesController < ApplicationController
    
    def create
        fr= FavoriteRecipe.create(frparams)
        if fr.valid?
            render json: fr, status: :created
        else
            render json: {errors: "you need to be logged in"}, status: :unprocessable_entity
        end
    end

    
    private
    def frparams
    params.permit(:user_id, :recipe_id)

end
