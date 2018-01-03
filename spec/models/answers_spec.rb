require 'rails_helper'

RSpec.describe Answer, type: :model do
  let!(:question) { FactoryBot.create(:question) }
  let!(:survey) { FactoryBot.create(:survey) }
  let!(:answer) { FactoryBot.create(:answer, question_id: question.id, survey_id: survey.id) }

  describe 'answer' do
    it "is an Answer" do
      expect(answer).to be_a(Answer)
    end
  end

  describe 'associations' do
    it "belongs to a question" do
      expect(answer).to belong_to(:question)
    end

    it "belongs to a survey" do
      expect(answer).to belong_to(:survey)
    end
  end

  describe 'validations' do
    it "validates the importance_value" do
      expect(answer).to validate_presence_of(:importance_value)
    end
  end
end
