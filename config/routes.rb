Rails.application.routes.draw do
  
  resources :favorite_recipes
  resources :ingredients
  resources :recipes
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
