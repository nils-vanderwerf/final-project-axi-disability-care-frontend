class RemoveWorkingWithKidsUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :has_police_check
    remove_column :users, :can_work_with_kids
  end
end
