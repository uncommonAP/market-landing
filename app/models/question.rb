class Question < ApplicationRecord
  validates_presence_of :question_body
  has_many :answers
  has_many :surveys, through: :answers

  def self.active
    where(active: true)
  end
end
