class Area < ApplicationRecord
    attr_accessor :city, :state, :zip_code
    has_many :users
end
