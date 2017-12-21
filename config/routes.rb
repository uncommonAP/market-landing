Rails.application.routes.draw do
  root 'public_views#index'

  namespace :api do
    namespace :v1 do
      resources :contacts, only: [:index, :create]
      resources :questions, only: [:index]
      resources :answers, only: [:create]
    end
  end

  get '*path', to: 'public_views#index'
end
