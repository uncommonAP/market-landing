require 'rails_helper'

RSpec.describe Api::V1::AnswersController, type: :controller do
  let!(:question) { FactoryBot.create(:question) }
  let!(:survey) { FactoryBot.create(:survey) }
  let!(:answer) {{ answer: { question_id: question.id, importance_value: Random.rand(0..5), survey_id: survey.id }}}

  describe 'answers#create' do
    it "returns a status of 200" do
      post :create, params: answer
      expect(response.status).to eq(200)
    end

    it "takes in answer_params and returns an answer object" do
      body = post_action(:create, answer)
      expect(body.length).to eq(1)
      expect(body[:answer]).to be_a(Hash)
    end

    it "returns the answer created" do
      body = post_action(:create, answer)
      expect(body[:answer][:question_id]).to eq(answer[:answer][:question_id])
      expect(body[:answer][:importance_value]).to eq(answer[:answer][:importance_value])
    end

    it "returns the answer for the given question" do
      body = post_action(:create, answer)
      expect(Question.find(body[:answer][:question_id])).to eq(question)
    end
  end
end
