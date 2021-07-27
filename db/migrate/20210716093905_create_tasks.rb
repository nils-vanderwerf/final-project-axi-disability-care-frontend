class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer :participant_id
      t.integer :carer_id
      t.string :name
      t.text :description
      t.string :location
      t.date :task_date
      t.time :task_start_time
      t.references :category
      t.boolean :completed, default: false
      t.boolean :approved, default: false
      t.timestamps
    end
  end
end
