class RegistrationsController < Devise::RegistrationsController

  def user
    render json: current_user
  end

  def update
    # required for settings form to submit when password is left blank
    if user_params[:password].blank?
      user_params.delete("password")
      user_params.delete("password_confirmation")
    end

    @user = User.find(current_user.id)
    if @user.update_attributes(user_params)
      set_flash_message :notice, :updated
      # Sign in the user bypassing validation in case his password changed
      sign_in @user, :bypass => true
      render nothing: true
    else
      render "edit"
    end
  end

  def user_params
    params.require(:registration).permit(:first_name, :last_name, :email, :avatar, :password, :password_confirmation)
  end
end
