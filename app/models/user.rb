class User < ApplicationRecord
    # password will be salted, wants a password and password_confirmation
    has_secure_password 

    validates_presence_of :email
    validates_uniqueness_of :email, uniqueness: { case_sensitive: false }

    has_many :booked_tasks,
    primary_key: :id,
    foreign_key: :participant_id,
    class_name: :Task

    has_many :tasks, through: :booked_tasks, source: :participant

    has_many :hired_tasks,
    primary_key: :id,
    foreign_key: :carer_id,
    class_name: :Task

    has_many :tasks, through: :booked_tasks, source: :carer

    has_many :hired_carers,
    through: :booked_tasks,
    source: :carer

    has_many :participants,
    through: :hired_tasks,
    source: :user

    belongs_to :area
    # Replace with custom area attributes method accepts_nested_attributes_for :area
    belongs_to :role, optional: true

    has_one_attached :avatar

    has_many :user_categories
    has_many :categories, :through => :user_categories
    
    accepts_nested_attributes_for :categories

    def area_attributes=(area)
        self.area = Area.find_or_create_by(
            city: area[:city].capitalize(), 
            state: area[:state].capitalize(),
            zip_code: area[:zip_code] )
    end 
end
