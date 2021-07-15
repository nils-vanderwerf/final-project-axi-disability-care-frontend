# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    # Development URL
      allow do
        origins 'http://localhost:3000'
          resource '*', 
          headers: :any,
            methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
      end
      # Add production URL
      allow do
        origins "https://final-project-axi-backend.herokuapp.com/"
         resource "*",
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
        end
    end