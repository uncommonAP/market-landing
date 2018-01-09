class Question < ApplicationRecord
  validates_presence_of :question_body
  has_many :open_answers
  has_many :surveys, through: :open_answers

  def self.active
    where(active: true)
  end
end
