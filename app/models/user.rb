class User < ApplicationRecord
    # password will be salted, wants a password and password_confirmation
    has_secure_password 

    validates_presence_of :email
    validates_uniqueness_of :email, uniqueness: { case_sensitive: false }

    has_many :booked_tasks,
    primary_key: :id,
    foreign_key: :client_id,
    class_name: :Task

    has_many :hired_tasks,
    primary_key: :id,
    foreign_key: :carer_id,
    class_name: :Task

    has_many :participants,
    through: :hired_tasks,
    source: :user

    belongs_to :city
    belongs_to :role

    accepts_nested_attributes_for :city
    accepts_nested_attributes_for :category

    # def authenticate(plaintext_password)
    #     if BCrypt::Password.new(self.password_digest) == plaintext_password
    #         self
    #     else
    #         false
    #     end
    # end
end
