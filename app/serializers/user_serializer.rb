  class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :email
  
    attributes :tasks do |user|
      user.tasks.map do |task|
        {
          name: task.name,
          description: task.age,
          location: task.image, 
          date: task.cause,
          task_start_time: task.goal
        }
      end
    end
  
    # attributes :bookings do |user|
    #   user.bookings.map do |booking|
    #     {
    #       amount: booking.amount,
    #       message: booking.message
    #     }
    #   end
    # end
  end
