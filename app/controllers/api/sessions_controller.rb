class Api::SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        
        if @user.nil?
            flash.now[:errors] = ['Invalid username or password.']
            render :new
        else
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ['Not logged in'], status: 404
        end
    end
end