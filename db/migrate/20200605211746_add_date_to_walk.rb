class AddDateToWalk < ActiveRecord::Migration[5.2]
  def change
    add_column :walks, :date, :date
  end
end
