class OpenAnswer < ApplicationRecord
  belongs_to :question
  belongs_to :survey

  validates_presence_of :answer
end
