class Task < ApplicationRecord
    belongs_to :client,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :carer,
        primary_key: :id,
        foreign_key: :tasker_id,
        class_name: :User

    belongs_to :category,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Category
end
