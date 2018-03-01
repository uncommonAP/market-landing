class OtherAnswer < ApplicationRecord
  belongs_to :open_answer
  validates_presence_of :open_answer_id, :answer
end
