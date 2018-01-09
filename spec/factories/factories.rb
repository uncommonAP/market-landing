FactoryBot.define do
  factory :contact do
    name Faker::Name.name
    email Faker::Internet.email
  end

  trait :active do
    active true
  end

  factory :question do
    question_body Faker::Lorem.sentence(5)

    factory :question_with_answers do
      after(:create) do |question|
        survey = create(:survey)
        15.times do
          create(:open_answer, question: question, survey_id: survey.id)
        end
      end
    end
  end

  factory :survey do
    country "United States"
    region "Massachusetts"
  end


  factory :open_answer do
     answer Random.rand(0..5)
  end
end
