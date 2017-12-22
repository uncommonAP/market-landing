class CreateSurveys < ActiveRecord::Migration[5.1]
  def change
    create_table :surveys do |t|
      t.string :country, null: false
      t.string :region, null: false

      t.timestamps
    end
  end
end
