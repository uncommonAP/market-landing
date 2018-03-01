require 'rails_helper'

RSpec.describe Api::V1::OpenAnswersController, type: :controller do
  let!(:question) { FactoryBot.create(:question) }
  let!(:survey) { FactoryBot.create(:survey) }
  let!(:open_answer) {{ open_answer: { question_id: question.id, answer: Random.rand(0..5), survey_id: survey.id }}}

  xdescribe 'answers#create' do
    it "returns a status of 200" do
      post :create, params: open_answer
      expect(response.status).to eq(200)
    end

    it "takes in answer_params and returns an answer object" do
      body = post_action(:create, open_answer)
      expect(body.length).to eq(1)
      expect(body[:answer]).to be_a(Hash)
    end

    it "returns the answer created" do
      body = post_action(:create, open_answer)
      expect(body[:answer][:question_id]).to eq(open_answer[:answer][:question_id])
      expect(body[:answer][:answer]).to eq(open_answer[:answer][:answer])
    end

    it "returns the answer for the given question" do
      body = post_action(:create, open_answer)
      expect(Question.find(body[:answer][:question_id])).to eq(question)
    end
  end
end
