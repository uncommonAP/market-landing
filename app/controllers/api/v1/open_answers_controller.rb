class Api::V1::OpenAnswersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    answer = OpenAnswer.new(answer_params)
    if answer.save
      render json: {answer: answer}
    end
  end

  private

  def answer_params
    params.require(:open_answer).permit(:question_id, :answer, :survey_id)
  end
end
