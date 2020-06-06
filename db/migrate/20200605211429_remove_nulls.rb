class RemoveNulls < ActiveRecord::Migration[5.2]
  def change
    change_column :walks, :start_lat, :float, null:true
    change_column :walks, :start_long, :float, null:true
    change_column :walks, :end_lat, :float, null:true 
    change_column :walks, :start_long, :float, null:true
  end
end
