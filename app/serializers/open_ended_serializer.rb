class OpenEndedSerializer < ActiveModel::Serializer
  attributes :id, :question_body, :type

  def type
    object.type
  end
end
