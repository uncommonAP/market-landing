Rails.application.routes.draw do
  root 'public_views#index'

  namespace :api do
    namespace :v1 do
      resources :contacts, only: [:index, :create]
      resources :questions, only: [:index] do
        get 'follow_up_questions'
      end
      get 'questions/demographic_questions'
      get 'questions/consumer_questions'
      get 'questions/entrepreneur_questions'
      resources :open_answers, only: [:create]
      resources :surveys, only: [:create]
    end
  end

  get '*path', to: 'public_views#index'
end
