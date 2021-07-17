class Api::V1::UsersController < ApplicationController
    def create
        user = User.create!(user_params)
    
        if user
          session[:user_id] = user.id
          render json: {
            status: :created,
            user: user
          }
        else
          render json: { status: 500 }
        end
    end

    private 
    def user_params
      params.require(:user).permit!
    end
end

# Stretch goals
# :disability, :working_with_kids, :police_check, :support_categories_attributes, :state, :city, :mobile, :hours_of_availability, :mobile