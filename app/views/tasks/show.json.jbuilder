json.extract! @task, :id, :name, :description, :list_id, :created_at, :updated_at

json.comments @task.comments do |comment|
    json.content comment.content

    json.user_email comment.user.email
    json.user_name "#{comment.user.first_name} #{comment.user.last_name}"
    json.user_id comment.user_id
    json.user_avatar comment.user.avatar
    json.created_at comment.created_at.strftime("Commented at: %Y/%m/%d %H:%M")

end