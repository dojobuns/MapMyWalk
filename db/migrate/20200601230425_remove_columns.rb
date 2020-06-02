class RemoveColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :first_name, :string, :null => true
    change_column :users, :last_name, :string, :null => true
    change_column :users, :gender, :string, :null => true
    change_column :users, :weight, :string, :null => true
    change_column :users, :height, :string, :null => true
    change_column :users, :age, :string, :null => true
  end
end
