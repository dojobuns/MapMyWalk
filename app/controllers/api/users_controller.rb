class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def new
        @user = User.new
        render :new
    end

    def show
        @user = User.includes(:walks).find(params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def index
        @users = User.all
        # debugger;
        render :index
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          redirect_to user_url(@user)
        else
          render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
          redirect_to users_url
        else
          render plain: "You can't destroy what's not there."
        end
    end

    private
    def user_params
        # debugger;
        params.require(:user).permit(:first_name, :last_name, :password, :email, :dob, :gender)
    end
end
