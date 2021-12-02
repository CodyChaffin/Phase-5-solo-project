class IngredientsController < ApplicationController
    def create
    ingredient= Ingredient.create(new_ing)
    end

    private
    def new_ing
        params.permit(:recipe_id, :name, :calories , :amount)
    end
end
