class AddDueDateToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :due_date, :timestamp
  end
end
