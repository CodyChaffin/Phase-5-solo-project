class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id
      t.text :name
      t.integer :calories
      t.text :amount

      t.timestamps
    end
  end
end
