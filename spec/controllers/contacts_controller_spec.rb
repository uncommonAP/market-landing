require 'rails_helper'

RSpec.describe Api::V1::ContactsController, type: :controller do
  let!(:contacts) { create_list(:contact, 15)}
  let!(:questions) { create_list(:question_with_answers, 10) }
  let!(:unsaved_contact) {{ contact: { name: Faker::Name.name, email: Faker::Internet.email }}}

  describe 'contacts#index' do
    it "returns a response status of 200" do
      get :index
      expect(response.status).to be(200)
    end

    it 'returns an array of 15 contacts' do
      body = get_action(:index)
      expect(body[:contacts].length).to eq(15)
    end

    it "returns an array that contains all stored contacts" do
      body = get_action(:index)
      id_array = []
      contacts.each do |contact|
        id_array << contact.id
      end
      body[:contacts].each do |contact|
        expect(id_array).to include(contact[:id])
      end
    end

    describe 'contacts#create' do
      it "returns a response status of 200" do
        post :create, params: unsaved_contact
        expect(response.status).to eq(200)
      end

      it "takes in contact_params and creates a new contact object" do
        body = post_action(:create, unsaved_contact)
        expect(body[:contact][:name]).to eq(unsaved_contact[:contact][:name])
        expect(body[:contact][:email]).to eq(unsaved_contact[:contact][:email])
      end
    end
  end
end
