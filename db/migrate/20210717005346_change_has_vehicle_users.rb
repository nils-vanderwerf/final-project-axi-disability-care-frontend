class ChangeHasVehicleUsers < ActiveRecord::Migration[6.1]
  def self.up
    change_column :users, :has_vehicle, :boolean, :default => false
  end
  def self.down
    change_column :users, :has_vehicle, :boolean
  end

end

