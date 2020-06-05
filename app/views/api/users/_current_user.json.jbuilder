json.user do 
    json.extract! user, :id, :email, :first_name, :last_name
    json.walks user.walks.map(&:id)
end

json.walks do
    user.walks.each do |walk|
        json.set! walk.id do
            json.extract! walk, :id, :walker_id, :map, :start_lat, :start_long, :end_lat, :end_long
        end
    end
end

