class ChangeDate < ActiveRecord::Migration[5.2]
  def change
    change_column :walks, :date, :string
  end
end
