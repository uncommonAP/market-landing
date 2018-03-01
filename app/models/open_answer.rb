class OpenAnswer < ApplicationRecord
  belongs_to :question
  belongs_to :survey
  has_one :other_answer

  validates_presence_of :answer
end
