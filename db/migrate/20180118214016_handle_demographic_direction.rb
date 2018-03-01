class HandleDemographicDirection < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :direction, :hstore
  end
end
