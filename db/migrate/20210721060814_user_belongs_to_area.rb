class UserBelongsToArea < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :area, index: true
  end
end
