
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  Rails.application.routes.draw do
    resources :sessions, only: [:create]
    post 'api/v1/registrations' => 'api/v1/users#create'
  
  
    namespace :api do
      namespace :v1 do
        # resources :bookings
        resources :support_categories
        # resources :postcodes
        resources :users, only: [:create]
        # resources :carers
        # resources :participants
        # resources :bookings
      end
    end
  
    root to: "static#home"
  end
  
