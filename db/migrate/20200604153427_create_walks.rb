class CreateWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :walks do |t|
      t.integer :walker_id, null: false
      t.string :map, null: false
      t.float :start_lat, null: false
      t.float :start_long, null: false
      t.float :end_lat, null: false
      t.float :end_long, null: false
      t.time :duration
      t.integer :distance
      t.timestamps
    end
    add_index :walks, :walker_id
  end
end
