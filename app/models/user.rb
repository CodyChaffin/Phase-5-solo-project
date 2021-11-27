class User < ApplicationRecord
    has_secure_password
    has_many :favorite_recipes
    has_many :recipes, through: :favorite_recipes
end
