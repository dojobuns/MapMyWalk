class Api::WalksController < ApplicationController
    def index
        # debugger;
        @walks = Walk.all
        @user = current_user;
        render "api/walks/index"
    end

    def create
        @walk = Walk.new(walk_params)
        @user = User.find(@walk.walker_id)

        if @walk.save
            render "api/walks/index"
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
        params.require(:walk).permit(:walker_id, :location, :date, :duration, :distance, :start_lat, :start_long, :end_lat, :end_long)
    end
end