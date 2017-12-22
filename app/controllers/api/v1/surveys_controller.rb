class Api::V1::SurveysController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    survey = Survey.create(survey_params)
    if survey.save
      render json: {survey: survey}
    end
  end

  private

  def survey_params
    params.require(:survey).permit(:country, :region)
  end
end
