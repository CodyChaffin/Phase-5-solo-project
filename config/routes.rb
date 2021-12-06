Rails.application.routes.draw do
  
  resources :favorite_recipes
  resources :ingredients
  resources :recipes
 
  
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/favorite_recipes", to: "favorite_recipes#destroy"
  get '/:id', to: 'recipes#show'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
