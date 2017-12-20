require 'rails_helper'

RSpec.describe Contact, type: :model do
  let!(:contact) { FactoryBot.create(:contact) }

  describe 'a contact' do
    it "is a Contact" do
      expect(contact).to be_a(Contact)
    end
  end

  describe 'validations' do
    it "validates the presence of a name" do
      expect(contact).to validate_presence_of(:name)
    end
    
    it "validates the presence of an email" do
      expect(contact).to validate_presence_of(:email)
    end
  end
end
