class Recipe < ApplicationRecord
    has_many :favorite_recipes, dependent: :destroy
    has_many :ingredients, dependent: :destroy
    has_many :users, through: :favorite_recipes
    # validates :directions, presence: true
end
