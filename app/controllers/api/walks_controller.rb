class Api::WalksController < ApplicationController
    def index
        @walks = Walk.all
        # debugger;
        @user = current_user;
        render "api/walks/index"
    end

    def create
        @walk = Walk.new(walk_params)
        @user = User.find(@walk.walker_id)

        if @walk.save
            render "api/walks/show"
        else
            render json: ['Missing Info Somewhere'], status: 422
        end
    end

    def update

    end

    def destroy

    end

    def walk_params
        # debugger;
        params.require(:walk).permit(:walker_id, :location, :date, :duration, :distance, :description)
    end
end