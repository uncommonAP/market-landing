class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_body, :type, :answer_metric, :follow_up, :answer_format, :follow_up_trigger, :other, :direction

  def type
    object.type
  end
end
