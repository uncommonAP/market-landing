class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.belongs_to :question
      t.integer :importance_value

      t.timestamps
    end
  end
end
