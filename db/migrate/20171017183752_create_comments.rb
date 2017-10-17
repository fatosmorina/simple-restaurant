class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.references :restaurant, foreign_key: true
      t.string :author
      t.text :body
      t.integer :rank

      t.timestamps
    end
  end
end
