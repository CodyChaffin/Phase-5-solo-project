class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :name, :calories, :amount
  belongs_to :recipe
end
