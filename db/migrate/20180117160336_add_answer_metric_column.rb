class AddAnswerMetricColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :answer_metric, :hstore, default: {}, null: false
  end

  def up
    change_column :questions, :type, :string, null: false
  end

  def down
    change_column :questions, :type, :string
  end
end
