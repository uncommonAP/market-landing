class FollowUpTrigger < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :follow_up_trigger, :integer
  end
end
