json.user do 
    json.partial! 'api/users/user', user: @user
end

json.walks do
    @user.walks.each do |walk|
        json.set! walk.id do
            json.partial! 'api/walks/walk', walk: walk
        end
    end
end