#-------# pacman.rb collections----
ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde']
puts "There are #{ghosts.length}  ghosts."
puts 'Their names are: '
puts ghosts[0]
puts ghosts[1]
puts ghosts[2]
puts ghosts[3]

#------objects-----

# pacman.rb
class Ghost
  attr_accessor :colour, :personality
end
inky = Ghost.new
inky.colour = 'Cyan'
inky.personality = 'Shadow'
puts inky.inspect


##------loops-----

ghosts = %w(Inky Blinky Pinky Clyde)
ghosts.each do |ghost|
  puts ghost
end


###--if..conditionals----

# pacman.rb
# power_pellet_eaten = false
# ghosts = 4
# while true do
#   puts "Ghosts remaining: #{ghosts}"
#
#   if power_pellet_eaten == false
#     puts 'Pac-Man eats the power pellet.'
#     power_pellet_eaten = true
#   elsif ghosts > 0
#     puts 'Pac-Man eats a ghost.'
#     ghosts--
#   else
#     break
#   end
# end
#
# puts 'Pac-Man goes home after a long day in the maze.
#
#
# ###--if..conditionals----#
# pacman.rb
def eat_dot
 puts "MUNCH!"
end
