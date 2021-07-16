#  //Makes initializer dynamic based on the environment
if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_disability_services_rails_app", domain: "oasis-disability-care-backend.herokuapp.com/"
else
    Rails.application.config.session_store :cookie_store, key: "_disability_services_rails_app"
end
