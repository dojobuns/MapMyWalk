class Api::WalksController < ApplicationController
    def index
        # debugger;
        @walks = Walk.all

        render "api/walks/index"
    end

    def create
        # debugger;
        @walk = Walk.new(walk_params)
        # debugger;

        if @walk.save
            @walks = Walk.all
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
        params.require(:walk).permit(:walker_id, :location, :date, :duration, :start_lat, :start_long, :end_lat, :end_long)
    end
end