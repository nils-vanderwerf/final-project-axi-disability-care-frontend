
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  Rails.application.routes.draw do
  resources :categories
  resources :tasks
    get 'api/v1/login' => 'api/v1/sessions#new'
    post 'api/v1/login' => 'api/v1/sessions#create'
    get 'api/v1/logged_in' => 'api/v1/sessions#logged_in'
    delete 'api/v1/logout' => 'api/v1/sessions#logout'
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
  
