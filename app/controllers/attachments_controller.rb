class AttachmentsController < ApplicationController
  respond_to :json

  def index
    respond_with Attachment.all
  end

  def show
    @attachment = Attachment.find(params[:id])
  end

  def create
    @attachment = Attachment.new(attachment_params)
    @attachment.attachment = params[:file]
    @attachment.save!
  end

  def update
    respond_with Attachment.update(params[:id], attachment_params)
  end

  def destroy
    respond_with Attachment.destroy(params[:id])
  end

  private

  def attachment_params
    params.permit(:task_id, :user_id)
  end
end
