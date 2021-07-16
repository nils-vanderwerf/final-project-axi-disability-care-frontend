  class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :email
  
    attribute :pets do |user|
      user.pets.map do |pet|
        {
          name: pet.name,
          age: pet.age,
          image: pet.image, 
          cause: pet.cause,
          goal: pet.goal
        }
      end
    end
  
    attribute :donations do |user|
      user.donations.map do |donation|
        {
          amount: donation.amount,
          message: donation.message
        }
      end
    end
  end
  
end
