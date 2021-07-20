class UserBelongsToCity < ActiveRecord::Migration[6.1]
  def change
    add_reference :cities, :user, index: true
  end
end
