class Api::V1::UsersController < ApplicationController
    def create
        user = User.create!(
          email: params['user']['email'],
          password: params['user']['password'],
          password_confirmation: params['user']['password_confirmation']
        )
    
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
      params.require(:user).permit(:email, :first_name, :last_name, :password_digest, :password_confirmation,  :gender, :bio, :is_carer, :has_vehicle, :disability, :first_aid, :ok_with_pets, :mobile, :age, support_categories_attributes: [], address: [:city, :state, :postcode])
    end
end

# Stretch goals
# :disability, :working_with_kids, :police_check, :support_categories_attributes, :state, :city, :mobile, :hours_of_availability