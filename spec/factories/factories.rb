FactoryBot.define do
  factory :contact do
    name Faker::Name.name
    email Faker::Internet.email
  end

  factory :question do
    question_body Faker::Lorem.sentence(5)

    factory :question_with_answers do
      after(:create) do |question|
        survey = create(:survey)
        15.times do
          create(:answer, question: question, survey_id: survey.id)
        end
      end
    end
  end

  factory :survey do
    country "United States"
    region "Massachusetts"
  end


  factory :answer do
    importance_value Random.rand(0..5)
  end
end
