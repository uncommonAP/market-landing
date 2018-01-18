class EntrepreneurQuestion < Question
  has_many :open_answers
  has_many :surveys, through: :open_answers
  
end
