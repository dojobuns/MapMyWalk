# == Schema Information
#
# Table name: walks
#
#  id          :bigint           not null, primary key
#  walker_id   :integer          not null
#  location    :string           not null
#  duration    :float
#  distance    :float
#  date        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#
class Walk < ApplicationRecord
    validates :walker_id, :location, :duration, :distance, presence: true

    belongs_to :walker,
        foreign_key: :walker_id,
        class_name: :User
end
