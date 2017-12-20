FactoryBot.define do
  factory :contact do
    name Faker::Name.name
    email Faker::Internet.email
  end

  factory :question do
    question_body Faker::Lorem.sentence(5)
  end

  factory :answer do
    importance_value Random.rand(1..5)
  end
end
