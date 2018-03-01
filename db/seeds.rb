demographic_questions = [
  {
    question_body: "Please choose one",
    answer_metric: {
      1 => "Male",
      2 => "Female"
    }
  },
  {
    question_body: "What is your age?",
    answer_metric: {
      1 => "18-25",
      2 => "25-35",
      3 => "35+"
    }
  },
  {
    question_body: "Are you a...",
    answer_metric: {
      1 => "Black US Consumer",
      2 => "Black African Entrepreneur",
      3 => "Neither"
    }
  },
  {
    question_body: "What social media platform do you use most?",
    answer_metric: {
      1 => "Facebook",
      2 => "Twitter",
      3 => "Instagram"
    }
  }
]

consumer_questions = [
  {
    question_body: "What is the biggest painpoint that you have experienced on social media?",
    answer_metric: {
      1 => "Racist attacks",
      2 => "Marginalization",
      3 => "Lack of black/african cultural expression",
      4 => "All of the Above",
      5 => "Other"
    },
    other: true
  },
  {
    question_body: "What is your income?",
    answer_metric: {
      1 => "0-$10K",
      2 => "$10K-$25K",
      3 => "$25K-$50K",
      4 => "$50K-$100K",
      5 => "$150K+"
    }
  },
  {
    question_body: "How often do you purchase goods and services online?",
    answer_metric: {
      1 => "All the time",
      2 => "More than once a week",
      3 => "At least once a month",
      4 => "Less than once a month",
      5 => "Once per year",
      6 => "Never"
    }
  },
  {
    question_body: "Which do you use more to purchase goods and services? A mobile device or laptop?",
    answer_metric: {
      1 => "Mobile phone",
      2 => "Laptop"
    }
  },
  {
    question_body: "When was the last time you purchased an African inspired good or service online?",
    answer_metric: {
      1 => "Last Week",
      2 => "Last Month",
      3 => "Less than 6 months ago",
      4 => "Last year"
    }
  },
  {
    question_body: "Would you buy African inspired goods and services if there was a convenient way to do so online?",
    answer_metric: {
      1 => "Yes",
      2 => "No",
      3 => "Maybe"
    }
  }
]

entrepreneur_questions = [
  {
    question_body: "What is your biggest painpoint on social media as a black South African entrepreneur?",
    answer_metric: {
      1 => "Xenophobic attacks",
      2 => "Marginalization",
      3 => "Lack of African Cultural Expression",
      4 => "Other"
    },
    other: true
  },
  {
    question_body: "Do you sell goods or services online?",
    answer_metric: {
      1 => "Yes",
      2 => "No"
    },
    follow_up: true,
    follow_up_trigger: 1,
    follow_up_questions: [
      {
        question_body: "Please select from the following:",
        answer_metric: {
          1 => "Clothing",
          2 => "Education",
          3 => "Consulting",
          4 => "Tech",
          5 => "Real Estate",
          6 => "Tourism",
          7 => "Other"
        },
        other: true
      },
      {
        question_body: "Where do you sell your goods and services online?",
        answer_metric: {
          1 => "Facebook",
          2 => "Twitter",
          3 => "Other"
        },
        other: true
      },
      {
        question_body: "Do you have an online money transfer system to collect money from domestic or foreign transactions?",
        answer_metric: {
          1 => "No",
          2 => "Yes: Bitcoin",
          3 => "Yes: Other"
        },
        other: true
      },
      {
        question_body: "Are you interested in selling your goods or services to black US consumers?",
        answer_metric: {
          1 => "Yes",
          2 => "No",
          3 => "Maybe"
        }
      }
    ]
  }
]

general_population_questions =  [
  {
    question_body: "Would you like to see an online platform where you can socialize, learn African culture, and buy African inspired goods and services?",
    answer_metric: {
      1 => "Yes",
      2 => "No",
      3 => "Maybe"
    }
  }
]

def follow_up_questions(source_question, follow_up_questions, question_trigger)
  source_question.update(follow_up: true, follow_up_trigger: question_trigger)
  follow_up_questions.each do |q|
    quest = FollowUpQuestion.new(question_body: q[:question_body], answer_metric: q[:answer_metric], follow_up_for_id: source_question.id)
    if quest.valid?
      quest.save
    end
    if q[:other]
      quest.update(other: true)
    end
  end
end

demographic_questions.each do |q|
  question = DemographicQuestion.create!(question_body: q[:question_body], active: true, answer_metric: q[:answer_metric])
  if q[:other]
    question.update(other: true)
  end
  if q[:follow_up]
    follow_up_questions(question, q[:follow_up_questions], q[:follow_up_trigger])
  end
end

consumer_questions.each do |q|
  question = ConsumerQuestion.create!(question_body: q[:question_body], active: true, answer_metric: q[:answer_metric])
  if q[:other]
    question.update(other: true)
  end
  if q[:follow_up]
    follow_up_questions(question, q[:follow_up_questions], q[:follow_up_trigger])
  end
end

entrepreneur_questions.each do |q|
  question = EntrepreneurQuestion.create!(question_body: q[:question_body], active: true, answer_metric: q[:answer_metric])
  if q[:other]
    question.update(other: true)
  end
  if q[:follow_up]
    follow_up_questions(question, q[:follow_up_questions], q[:follow_up_trigger])
  end
end

general_population_questions.each do |q|
  question = GeneralPopulationQuestion.create!(question_body: q[:question_body], active: true, answer_metric: q[:answer_metric])
  if q[:other]
    question.update(other: true)
  end
  if q[:follow_up]
    follow_up_questions(question, q[:follow_up_questions])
  end
end
