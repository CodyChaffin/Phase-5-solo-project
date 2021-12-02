class User < ApplicationRecord
    has_secure_password
    has_many :favorite_recipes
    has_many :recipes, through: :favorite_recipes
    validates :name, presence: true, uniqueness: true
    validates :email, presence:true, uniqueness: true
end
#  length: {in: 3..13},