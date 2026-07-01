class CreateEditorsPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :editors_posts, id: false do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :post, null: false, foreign_key: true
    end
  end
end