Rails.application.routes.draw do

  resources :restaurants
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root 'restaurants#index'
end
