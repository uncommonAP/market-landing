require 'rails_helper'

RSpec.describe Question, type: :model do
  let!(:question) { FactoryBot.create(:question, :active) }
  let!(:survey) { FactoryBot.create(:survey)}
  let!(:answers) { create_list(:answer, 4, question_id: question.id, survey_id: survey.id) }

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
    it "has many answers" do
      expect(question).to have_many(:answers)
      expect(question.answers.length).to eq(4)
      expect(question.answers).to eq(answers)
    end

    it "has many surveys through answers" do
      expect(question).to have_many(:surveys).through(:answers)
      expect(question.surveys).to include(survey)
    end
  end

end
