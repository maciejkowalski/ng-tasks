class Attachment < ActiveRecord::Base
  belongs_to :task
  belongs_to :user

  mount_uploader :attachment, ::AttachmentUploader
end
