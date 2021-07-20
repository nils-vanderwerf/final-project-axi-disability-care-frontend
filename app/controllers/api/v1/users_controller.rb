class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :convert_to_integer, only: [:create]

    def index
      users = User.all
      if users
        render json: {
          users: users
        }
      else
        render json: {
          status: 500,
          errors: ['no users found']
        }
      end
  end

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

  def convert_to_integer
    user_params['support_categories_attributes'] = user_params['support_categories_attributes'].to_i
    user_params
  end

  private 
def user_params
    params.require(:user).permit(:role, :email, :first_name, :last_name, :bio, :age, :gender, {cities_attributes: [:city, :state, :zip_code]}, :email, :hours_of_work, {categories_attributes: [] }, :zip_code, 
    :hourly_rate, :first_aid_training, :carer_number, :has_vehicle, :disability, :ndis, :ndis_number, :password, :password_confirmation)
  end
end

# Stretch goals
# :disability, :working_with_kids, :police_check, :support_categories_attributes, :state, :city, :mobile, :hours_of_availability, :mobile