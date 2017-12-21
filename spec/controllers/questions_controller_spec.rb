require 'rails_helper'

RSpec.describe Api::V1::QuestionsController, type: :controller do
  let!(:questions) { create_list(:question_with_answers, 10)}

  describe 'questions#index' do
    it "returns a successful response" do
      get :index
      expect(response.status).to eq(200)
    end

    it "returns a list of 10 questions" do
      body = get_action(:index)
      expect(body[:questions].length).to eq(10)
    end
  end
end
