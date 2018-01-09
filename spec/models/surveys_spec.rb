require 'rails_helper'

RSpec.describe Survey, type: :model do
  let!(:survey) { FactoryBot.create(:survey) }
  let!(:question) { FactoryBot.create(:question) }
  let!(:open_answer) { FactoryBot.create(:open_answer, question_id: question.id, survey_id: survey.id)}

  describe 'survey object' do
    it "is a Survey" do
      expect(survey).to be_a(Survey)
    end
  end

  describe 'validations' do
    it "validates the presence of a country" do
      expect(survey).to validate_presence_of(:country)
    end

    it "validates the presence of a region" do
      expect(survey).to validate_presence_of(:region)
    end
  end

  describe 'associations' do
    it "has many answers" do
      expect(survey).to have_many(:open_answers)
      expect(open_answer.survey).to eq(survey)
    end

    it "has many questions through answers" do
      expect(survey).to have_many(:questions).through(:open_answers)
      expect(survey.questions).to include(question)
    end
  end
end
