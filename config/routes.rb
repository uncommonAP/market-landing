Rails.application.routes.draw do
  root 'public_views#index'

  namespace :api do
    namespace :v1 do
      resources :contacts, only: [:index, :create]
    end
  end

  get '*path', to: 'public_views#index'
end
