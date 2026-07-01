class AddAddressToUsers < ActiveRecord::Migration[8.1]
  def change
    # i have created default because i have data in the database
    add_column :users, :address, :string, null: false, default: ""
  end
end
