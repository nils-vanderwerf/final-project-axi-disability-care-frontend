class AddColumnsToCities < ActiveRecord::Migration[6.1]
  def change
    add_column :cities, :city, :string
    add_column :cities, :state, :string
    add_column :cities, :zip_code, :string
  end
end
