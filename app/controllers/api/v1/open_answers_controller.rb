class Api::V1::OpenAnswersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    answer = OpenAnswer.new(answer_params)
    if answer.save
      if answer.question.other_trigger == answer.answer
        other_answer = OtherAnswer.new(other_answer_params.merge(open_answer_id: answer.id))
        if other_answer.save
          render json: {answer: answer}
        end
      else
        render json: {answer: answer}
      end
    end
  end

  private

  def answer_params
    params.require(:open_answer).permit(:question_id, :answer, :survey_id, :other_answer)
  end

  def other_answer_params
    params.require(:other_answer).permit(:answer)
  end
end
