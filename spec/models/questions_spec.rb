require 'rails_helper'

RSpec.describe Question, type: :model do
  let!(:question) { FactoryBot.create(:question, :active) }
  let!(:survey) { FactoryBot.create(:survey)}
  let!(:open_answer) { create_list(:open_answer, 4, question_id: question.id, survey_id: survey.id) }

  describe 'a question' do
    it "is a Question" do
      expect(question).to be_a(Question)
    end
  end

  describe 'validations' do
    it "validates the presence of question_body" do
      expect(question).to validate_presence_of(:question_body)
    end
  end

  describe 'associations' do
    it "has many open_answer" do
      expect(question).to have_many(:open_answers)
      expect(question.open_answers.length).to eq(4)
      expect(question.open_answers).to eq(open_answer)
    end

    it "has many surveys through open_answer" do
      expect(question).to have_many(:surveys).through(:open_answers)
      expect(question.surveys).to include(survey)
    end
  end

end
