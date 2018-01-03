class CreateOpenAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :open_answers do |t|
      t.belongs_to :question, null: false
      t.belongs_to :survey, null: false
      t.text :answer, null: false

      t.timestamps
    end
  end
end
