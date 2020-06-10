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
require 'test_helper'

class FriendRequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
