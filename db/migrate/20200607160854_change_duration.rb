class ChangeDuration < ActiveRecord::Migration[5.2]
  def change
    drop_table :walks
    create_table :walks do |t|
      t.integer :walker_id, null: false
      t.string :location, null: false
      t.float :start_lat, null: false
      t.float :start_long, null: false
      t.float :end_lat, null: false
      t.float :end_long, null: false
      t.integer :duration
      t.integer :distance
      t.string :date
      t.timestamps
    end
    add_index :walks, :walker_id
  end
end
