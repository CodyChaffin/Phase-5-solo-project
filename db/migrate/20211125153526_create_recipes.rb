class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.text :name
      t.text :image_url
      t.text :directions, array: true, default: []

      t.timestamps
    end
  end
end
