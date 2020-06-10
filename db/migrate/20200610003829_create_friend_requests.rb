class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.boolean :status, null: false, default: false
      t.integer :requester_id, null: false
      t.integer :requestee_id, null: false
      t.timestamps
    end
    add_index :friend_requests, [:requestee_id, :requester_id]
  end
end
