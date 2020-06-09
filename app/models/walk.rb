# == Schema Information
#
# Table name: walks
#
#  id         :bigint           not null, primary key
#  walker_id  :integer          not null
#  location   :string           not null
#  start_lat  :float            not null
#  start_long :float            not null
#  end_lat    :float            not null
#  end_long   :float            not null
#  duration   :integer
#  distance   :integer
#  date       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Walk < ApplicationRecord
    validates :walker_id, :location, :duration, :distance, presence: true

    belongs_to :walker,
        foreign_key: :walker_id,
        class_name: :User
end
