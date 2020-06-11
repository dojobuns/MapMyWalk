json.extract! user, :id, :email, :first_name, :last_name
json.walks user.walks.map(&:id)
if user.friends.length > 0
    # debugger;
    json.friends do |friend|
        json.extract! friend
    end
end
