class PostsController < ApplicationController
  # GET /posts
  def index
    @posts = Post.all
  end

  # GET /posts/:id
  def show
    @post = Post.find(params[:id])
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # POST /posts
  def create
    # can not work with the old syntax
    # @post = Post.new(params[:post])
    @post = Post.new(post_params)

    if @post.save
      redirect_to @post, notice: "Post created successfully"
    else
      render :new
    end
  end

  # GET /posts/:id/edit
  def edit
    @post = Post.find(params[:id])
  end

  # PATCH/PUT /posts/:id
  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      redirect_to @post, notice: "Post updated successfully"
    else
      render :edit
    end
  end

  # DELETE /posts/:id
  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    redirect_to posts_path, notice: "Post deleted successfully"
  end

  def post_params
  params.require(:post).permit(:title, :content)
end
end
