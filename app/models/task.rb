class Task < ActiveRecord::Base
  belongs_to :list
  has_many :comments
  has_many :attachments
end
