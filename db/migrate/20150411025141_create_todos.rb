class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :content
      t.integer :status,default:0

      t.timestamps null: false
    end
  end
end
