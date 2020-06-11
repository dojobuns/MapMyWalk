class Api::SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.includes(:walks).find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger;

        # if params[:user][:email]
        if @user.nil?
            render json: ['Incorrect username or password. Please try again'], status: 401
        else
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy
        # debugger;
        if logged_in?
            logout!
            # debugger;
            render json: {}
        else
            render json: ['Not logged in'], status: 404
        end
    end
end