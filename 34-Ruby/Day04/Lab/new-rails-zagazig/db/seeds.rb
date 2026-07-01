User.destroy_all
Post.destroy_all

creator1 = User.create!(name: "Ahmed", email: "ahmed@example.com")
creator2 = User.create!(name: "Omar", email: "omar@example.com")

post1 = Post.create!(title: "First Post", content: "Hello MVC", creator: creator1)
post2 = Post.create!(title: "Second Post", content: "Rails is powerful", creator: creator2)

editor1 = User.create!(name: "Mohamed", email: "mohamed@example.com")
editor2 = User.create!(name: "Youssef", email: "youssef@example.com")

post1.editors << editor1
post1.editors << editor2
post2.editors << editor1