class Comment < ApplicationRecord
  belongs_to :restaurant
  has_ancestry
  validates :restaurant, presence: true
end
