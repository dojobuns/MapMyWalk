json.partial! 'api/users/user', user: @user
json.extract! walk, :id, :walker_id, :map, :start_lat, :start_long, :end_lat, :end_long