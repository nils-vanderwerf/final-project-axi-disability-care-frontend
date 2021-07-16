class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.string :location
      t.date :task_date
      t.time :task_start_time
      t.references :client
      t.references :carer
      t.references :category
      t.boolean :completed, default: false
      t.timestamps
    end
  end
end
