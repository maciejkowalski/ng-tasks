json.extract! @comment, :id, :content, :task_id, :user_id, :created_at, :updated_at

json.user_email @comment.user.email
json.user_name "#{@comment.user.first_name} #{@comment.user.last_name}"

json.user_avatar @comment.user.avatar
json.created_at @comment.created_at.strftime("%Y/%m/%d %H:%M")