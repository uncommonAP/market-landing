class CreateOthers < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :other_trigger, :integer
  end
end
