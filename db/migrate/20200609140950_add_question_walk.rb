class AddQuestionWalk < ActiveRecord::Migration[5.2]
  def change
    add_column :walks, :description, :string
  end
end
