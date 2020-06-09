class ChangingWalks < ActiveRecord::Migration[5.2]
  def change
    remove_column :walks, :start_lat
    remove_column :walks, :start_long
    remove_column :walks, :end_lat
    remove_column :walks, :end_long
  end
end
