class SessionController < ApplicationController
    skip_before_action :confirm_authentication 

    def create
        # byebug
        user = User.find_by_email(params[:email])
       
        if user && user.authenticate(params[:password])

            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "invalid credentials"}, status: :unauthorized
        end
    end

    def destroy
        session.delete(:user_id)
    end
    
end
