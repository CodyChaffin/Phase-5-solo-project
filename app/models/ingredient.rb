class Ingredient < ApplicationRecord
    belongs_to :recipe
    validates :name, presence: true
    validates :amount, presence: true
    validates :calories, inclusion: {in: 0...30000000}, allow_nil: true
    
end
