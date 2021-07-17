class AddApprovedToTasks< ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :approved, :boolean, :default => false
  end
end
