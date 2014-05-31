# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanu

List.find_or_create_by(name: "Current")
List.find_or_create_by(name: "Backlog")
List.find_or_create_by(name: "Icebox")

if user = User.find_or_initialize_by(email: "mkoval33@gmail.com")
  user.password = 'password'
  user.save
end
