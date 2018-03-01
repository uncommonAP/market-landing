class Question < ApplicationRecord
  validates_presence_of :question_body, :type, :answer_metric
  has_many :open_answers
  has_many :surveys, through: :open_answers
  has_many :follow_up_questions, class_name: "FollowUpQuestion", foreign_key: :follow_up_for_id

  def self.active
    where(active: true)
  end
end
