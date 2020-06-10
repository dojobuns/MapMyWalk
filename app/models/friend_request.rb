# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  status       :boolean          default(FALSE), not null
#  requester_id :integer          not null
#  requestee_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class FriendRequest < ApplicationRecord
    validates :status, :requestee_id, :requester_id, presence: true

    belongs_to :requester,
        foreign_key: :requester_id,
        class_name: :User

    belongs_to :requestee,
        foreign_key: :requestee_id,
        class_name: :User
end
