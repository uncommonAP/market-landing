class AnswerFormat < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :answer_format, :string, default: "radio", null: false
  end
end
