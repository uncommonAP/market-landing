class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    questions = Question.active
    render json: questions, root: "questions"
  end

  def demographic_questions
    questions = DemographicQuestion.all
    render json: questions, root: "demographic"
  end

  def consumer_questions
    questions = ConsumerQuestion.all
    render json: questions, root: "consumer"
  end

  def entrepreneur_questions
    questions = DemographicQuestion.all
    render json: questions, root: "entrepreneur"
  end

  def follow_up_questions
    source_question = Question.find(params[:question_id])
    render json: source_question.follow_up_questions, root: "follow_up"
  end
end
