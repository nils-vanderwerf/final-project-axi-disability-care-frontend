class ChangeHoursOfWorkToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :hours_of_work, :string
  end
end
