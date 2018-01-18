class CreateFollowUp < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :follow_up, :boolean, default: false, null: false
    add_column :questions, :follow_up_for_id, :integer
  end
end
