class AddCityStateZipCodeToArea < ActiveRecord::Migration[6.1]
  def change
    add_column :areas, :city, :string
    add_column :areas, :state, :string
    add_column :areas, :zip_code, :string
  end
end
