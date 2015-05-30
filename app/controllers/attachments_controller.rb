class AttachmentsController < ApplicationController
  respond_to :json

  def index
    respond_with Attachment.all
  end

  def show
    respond_with Attachment.find(params[:id])
  end

  def create
    respond_with Attachment.create(attachment_params)
  end

  def update
    respond_with Attachment.update(params[:id], attachment_params)
  end

  def destroy
    respond_with Attachment.destroy(params[:id])
  end

  private

  def attachment_params
    params.require(:comment).permit(:attachment, :task_id, :user_id)
  end
end
