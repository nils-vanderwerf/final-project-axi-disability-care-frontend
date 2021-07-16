class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :bio, :text
    add_column :users, :age, :text
    add_column :users, :gender, :text
    add_column :users, :zip_code, :integer
    add_column :users, :is_carer, :boolean
    add_column :users, :has_vehicle, :boolean
    add_column :users, :has_police_check, :boolean
    add_column :users, :can_work_with_kids, :boolean
    
  end
end
