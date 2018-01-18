class GeneralPopulationQuestion < Question
  has_many :open_answers
  has_many :surveys, through: :open_answers
  has_many :follow_up_questions, class_name: "FollowUpQuestion"
end
