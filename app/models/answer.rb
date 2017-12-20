class Answer < ApplicationRecord
  belongs_to :question
  validates_presence_of :importance_value
end
