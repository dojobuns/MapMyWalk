# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Walk.destroy_all

user = User.create(email: 'clifford.syan@gmail.com', password: 'password', first_name: 'clifford', last_name: 'yan', dob: '1995-03-10', gender: 'm')
walk = Walk.create(location: 'efsf', distance: 23, duration: 2, description: 'erfwfewwe', walker_id: user.id, date: '06/06/2020')