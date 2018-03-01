class RemoveAnswers < ActiveRecord::Migration[5.1]
  def up
    drop_table :answers
  end

  def down
    create_table :answers do |t|
      t.belongs_to :question
      t.string :importance_value
      t.timestamps
    end
  end
end
