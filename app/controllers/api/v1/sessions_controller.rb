class Api::V1::SessionsController < ApplicationController
	include CurrentUserConcern
		def create
			user = User
					.find_by(email: params["user"]["email"])
					.try(:authenticate, params["user"]["password"])
			if user
				session[:user_id] = user.id
				render json: {
					status: :created,
					logged_in: true,
					user: user
				}
			else
				render json: { status: 401 }
				flash.now[:danger]="Email/Password is not matching"
			end
		end

		def get_current_user
            if @current_user
                render json: {
                    logged_in: true,
                    user: @current_user
                }
            else
                render json: {
                    logged_in: false
                }
            end
        end
#
		def logout
			p 'Logout function reached'
			render json: { status: 200, logged_out: true}
		end
	
	end
