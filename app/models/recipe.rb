class Recipe < ApplicationRecord
    has_many :favorite_recipes
    has_many :ingredients
    has_many :users, through: :favorite_recipes
    # validates :directions, presence: true
end
