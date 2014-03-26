class List < ActiveRecord::Base
  has_many :tasks

  def as_json(options = {})
    super(include: [:tasks])
  end
end
