class UsersController < ApplicationController
  def index
     @user = {
      name: "John Doe",
      email: "john@example.com",
      age: 25
    }
  end
end
