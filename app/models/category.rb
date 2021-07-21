class Category < ApplicationRecord
    has_many :tasks,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Task

    has_many :users

    accepts_nested_attributes_for :category
end
