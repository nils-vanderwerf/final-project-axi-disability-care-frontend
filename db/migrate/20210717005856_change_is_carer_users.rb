class ChangeIsCarerUsers < ActiveRecord::Migration[6.1]
  def up
    change_table :users do |t|
      t.change :is_carer, :boolean, :default => false
    end
  end

  def down
    change_table :users do |t|
      t.change :is_carer, :boolean
    end
  end
end
