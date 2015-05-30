class Attachment < ActiveRecord::Base
  belongs_to :task
  belongs_to :user

  mount_uploader :attachment, ::AttachmentUploader

  def file_name
    attachment.try(:file).try(:filename)
  end

  def url
    attachment.try(:url)
  end
end
