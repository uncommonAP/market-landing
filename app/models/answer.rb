class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :survey
  validates_presence_of :importance_value
end
