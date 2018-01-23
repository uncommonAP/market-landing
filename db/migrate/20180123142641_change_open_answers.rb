class ChangeOpenAnswers < ActiveRecord::Migration[5.1]
  def up
    change_column :open_answers, :answer, 'integer USING answer::integer', null: false
  end

  def down
    change_column :open_answers, :answer, 'text USING answer::text', null:false
  end
end
