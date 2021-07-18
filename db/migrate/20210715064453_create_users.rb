class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.text :bio
      t.integer :age
      t.string :gender
      t.integer :zip_code
      t.integer :hourly_rate, default: 50
      t.boolean :is_carer, default: true
      t.boolean :has_vehicle, default: false
      t.string :background_check, default: false
      t.string :first_aid_training, default: false
    

      t.timestamps
    end
  end
end
