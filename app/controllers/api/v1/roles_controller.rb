class Api::V1::UsersController < ApplicationController

    private 
    def role_params
      params.require(:role).permit(:role_id)
    end
  end
  