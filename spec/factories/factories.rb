FactoryBot.define do
  factory :contact do
    name Faker::Name.name
    email Faker::Internet.email
  end

  factory :question do
    question_body Faker::Lorem.sentence(5)

    factory :question_with_answers do
      after(:create) do |question|
        15.times do
          create(:answer, question: question)
        end
      end
    end
  end


  factory :answer do
    importance_value Random.rand(0..5)
  end
end
