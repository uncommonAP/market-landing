require 'rails_helper'

RSpec.describe OpenAnswer, type: :model do
  let!(:question) { FactoryBot.create(:question) }
  let!(:survey) { FactoryBot.create(:survey) }
  let!(:open_answer) { FactoryBot.create(:open_answer, question_id: question.id, survey_id: survey.id) }

  describe 'open_answer' do
    it "is an Answer" do
      expect(open_answer).to be_a(OpenAnswer)
    end
  end

  describe 'associations' do
    it "belongs to a question" do
      expect(open_answer).to belong_to(:question)
    end

    it "belongs to a survey" do
      expect(open_answer).to belong_to(:survey)
    end
  end

  describe 'validations' do
    it "validates the importance_value" do
      expect(open_answer).to validate_presence_of(:answer)
    end
  end
end
