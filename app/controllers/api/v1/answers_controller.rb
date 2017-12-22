class Api::V1::AnswersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    answer = Answer.new(answer_params)
    if answer.save
      render json: {answer: answer}
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:question_id, :importance_value, :survey_id)
  end
end
