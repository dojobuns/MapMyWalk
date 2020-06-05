class Api::SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.includes(:walks).find_by_credentials(params[:user][:email], params[:user][:password])
        
        if @user.nil?
            render json: ['Nope. Wrong credentials!'], status: 401
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