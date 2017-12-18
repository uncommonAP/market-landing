Rails.application.routes.draw do
  root 'public_views#index'
  get '*path', to: 'public_views#index'
end
