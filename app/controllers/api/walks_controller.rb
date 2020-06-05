class Api::WalksController < ApplicationController
    def index
        # debugger;
        @walks = Walk.all

        render "api/walks/index"
    end

    def create
        debugger;
        @walk = Walk.new(walk_params)
        @walk.walker_id = params[:walker_id]
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
        params.require(:walk).permit(:walker_id, :map, :start_lat, :start_long, :end_lat, :end_long)
    end
end