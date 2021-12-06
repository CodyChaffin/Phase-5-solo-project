class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :favorite_recipes
  has_many :recipes, through: :favorite_recipes
  
end
