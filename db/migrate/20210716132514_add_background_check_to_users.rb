class AddBackgroundCheckToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :background_check, :boolean
    add_column :users, :first_aid_training, :boolean
  end
end
