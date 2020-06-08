class RemoveMap < ActiveRecord::Migration[5.2]
  def change
    remove_column :walks, :map
    add_column :walks, :location, :string
  end
end
