class Question < ApplicationRecord
  validates_presence_of :question_body
  has_many :answers
end
