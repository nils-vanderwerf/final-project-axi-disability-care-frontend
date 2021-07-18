class CategorySerializer
    include FastJsonapi::ObjectSerializer
      attributes :name, :description
      
      belongs_to :user, serializer: UserSerializer
  
      attribute :donations do |category|
          category.donations.map do |category|
              {
                  amount: category.amount,
                  message: category.message
              }
          end
      end
  
      attribute :owner do |category|
          {
              name: category.user.first_name
          }
      end
  end
  
  