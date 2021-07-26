class Api::V1::TasksController < ApplicationController
	def create
		@task = Task.new(task_params)
	
		if @task.save!
		  puts "Success!"
		else
		  render json: @task.error.full_messages, status: 402
		end
	end


	def index
		@tasks = Task.all.where(user_id: current_user.id)
		render :index
	  end

	def show
	@task = Task.find(params[:id])
	render :show
	end
	
	
	def destroy
	@task = Task.find(params[:id])

	if @task.destroy
		render :show
	else
		render json: @task.errors.full_messages, status: 402
	end
	end
	

	private 

	def task_params
		params.require(:task).permit(
			:name,
			:description,
			:location,
			:task_date,
			:task_start_time,
			:client_id,
			:carer_id,
			:category_id
		)
	end
	
end
