class AddOriginToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :origin, :text
  end
end
