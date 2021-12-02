class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :directions, :ingredients, :origin
  has_many :ingredients
end
