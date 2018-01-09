class Survey < ApplicationRecord
  validates_presence_of :country, :region
  has_many :open_answers
  has_many :questions, through: :open_answers
end
