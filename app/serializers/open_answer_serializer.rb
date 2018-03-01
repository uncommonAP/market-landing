class OpenAnswerSerializer < ActiveModel::Serializer
  attributes :id, :answer, :question, :open_answer_value, :other_answer

  def question
    object.question.question_body
  end

  def open_answer_value
    object.question.answer_metric[object.answer.to_s]
  end

  def other_answer
    if object.question.other && object.answer == object.question.other_trigger && object.other_answer
      object.other_answer.answer
    end
  end
end
