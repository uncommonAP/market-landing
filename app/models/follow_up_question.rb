class FollowUpQuestion < Question
  belongs_to :source_question, class_name: "Question", foreign_key: :follow_up_for_id

  validates_presence_of :follow_up_for_id
end
