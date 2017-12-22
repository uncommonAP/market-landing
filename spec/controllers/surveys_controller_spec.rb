require 'rails_helper'

RSpec.describe Api::V1::SurveysController, type: :controller do
  let!(:unsaved_survey) {{ survey: { country: "United States", region: "Massachusetts" }}}

  describe 'survey#create' do
    it "returns a successful response" do
      post :create, params: unsaved_survey
      expect(response.status).to eq(200)
    end

    it "takes in survey params and returns a survey object" do
      body = post_action(:create, unsaved_survey)
      expect(body[:survey][:country]).to eq(unsaved_survey[:survey][:country])
      expect(body[:survey][:region]).to eq(unsaved_survey[:survey][:region])
    end
  end
end
