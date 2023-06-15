# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def filter_words(words_array, filter_letter)
  filtered_words = []
  
  words_array.each do |word|
    filtered_words << word if word.include?(filter_letter)
  end
  
  return filtered_words
end

puts filter_words(beverages_array, filter_letter_o) 

puts filter_words(beverages_array, filter_letter_t) 



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

def flatten_and_sort_hash_values(hash)
  values = hash.values.flatten 
  values.sort 
end

us_states = {
  northwest: ['Washington', 'Oregon', 'Idaho'],
  southwest: ['California', 'Arizona', 'Nevada'],
  notheast: ['Maine', 'New Hampshire', 'Rhode Island']
}

result = flatten_and_sort_hash_values(us_states)
puts result.inspect


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# class Bike
#   attr_reader :model, :wheels, :current_speed

#   def initialize(model, wheels = 2)
#     @model = model
#     @wheels = wheels
#     @current_speed = 0
#   end

#   def bike_info
#     "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
#   end
# end

# bike = Bike.new("Trek")
# puts bike.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
  attr_reader :model, :wheels, :current_speed

  def initialize(model, wheels = 2)
    @model = model
    @wheels = wheels
    @current_speed = 0
  end

  def bike_info
    "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
  end

  def pedal_faster(amount)
    @current_speed += amount
  end

  def brake(amount)
    @current_speed = [@current_speed - amount, 0].max
  end
end


my_bike = Bike.new("Trek")
puts my_bike.bike_info

my_bike.pedal_faster(10)
puts my_bike.current_speed

my_bike.pedal_faster(18)
puts my_bike.current_speed

my_bike.brake(5)
puts my_bike.current_speed

my_bike.brake(25)
puts my_bike.current_speed

