class User < ApplicationRecord
  # presence validation
  validates :name, :dob, :email, :phone_number, presence: true

  # email format validation
  validates :email,
            presence: true,
            uniqueness: true,
            format: { with: URI::MailTo::EMAIL_REGEXP }
end
