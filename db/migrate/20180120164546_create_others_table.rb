class CreateOthersTable < ActiveRecord::Migration[5.1]
  def change
    create_table :other_answers do |t|
      t.belongs_to :open_answer, null: false
      t.string :answer, null: false
    end
  end
end
