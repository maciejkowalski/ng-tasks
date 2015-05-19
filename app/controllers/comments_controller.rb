class CommentsController < ApplicationController
  respond_to :json

  def index
    respond_with Comment.all
  end

  def show
    respond_with Comment.find(params[:id])
  end

  def create
    respond_with Comment.create(comment_params)
  end

  def update
    respond_with Comment.update(params[:id], comment_params)
  end

  def destroy
    respond_with Comment.destroy(params[:id])
  end

  private

  def comment_params
    params.require(:list).permit(:content, :task_id, :user_id)
  end
end
