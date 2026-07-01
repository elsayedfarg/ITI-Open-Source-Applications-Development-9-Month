class User < ApplicationRecord
  has_many :created_posts, class_name: "Post", foreign_key: "user_id", dependent: :destroy

  has_and_belongs_to_many :edited_posts,
                          class_name: "Post",
                          join_table: "editors_posts"
end