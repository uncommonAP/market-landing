class AddOtherColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :other, :boolean, default: false, null: false
  end
end
