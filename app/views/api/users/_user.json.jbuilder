# debugger;
json.extract! user, :id, :email, :first_name, :last_name
json.walks user.walks.map(&:id)

# json.set! walks do
#     user.walks.map(walk => (
#         walk
#     ))
# end