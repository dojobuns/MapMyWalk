class RemoveAddColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :gender
    remove_column :users, :weight
    remove_column :users, :height
    remove_column :users, :age
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gender, :string, default: 'm'
    add_column :users, :weight, :integer
    add_column :users, :height, :integer
    add_column :users, :age, :integer
  end
end
