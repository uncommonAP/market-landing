class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    questions = Question.active
    render json: questions, root: "questions"
  end
end
