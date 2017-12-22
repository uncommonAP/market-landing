class Survey < ApplicationRecord
  validates_presence_of :country, :region
  has_many :answers
  has_many :questions, through: :answers
end
