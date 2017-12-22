class AddSurveyIdColumn < ActiveRecord::Migration[5.1]
  def change
    change_table(:answers) do |t|
      t.belongs_to :survey, null: false
    end
  end
end
