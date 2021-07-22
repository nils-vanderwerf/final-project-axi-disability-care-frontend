class RemoveCategoryIdFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :category_id
  end
end
