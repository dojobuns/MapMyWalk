class ChangeToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :walks, :distance, :float
    change_column :walks, :duration, :float
  end
end
