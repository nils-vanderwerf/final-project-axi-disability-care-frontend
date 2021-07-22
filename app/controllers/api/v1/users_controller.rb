class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def new
  end

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
    p "Attributes in controller #{user_params}"
    # user = User.new(user_params)
    
    
      if user.valid?
        user.save
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
    params.require(:user).permit(:role_id, :email, :first_name, :last_name, :bio, :age, :gender,  :hourly_rate, :hours_of_work, :first_aid_training, :carer_number, :has_vehicle, :disability, :ndis, :ndis_number, :password, :password_confirmation, area_attributes: {}, category_ids:[])
  end
end
