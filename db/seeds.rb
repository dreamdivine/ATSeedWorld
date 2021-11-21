# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

Listing.delete_all
User.delete_all


u0 = User.create!({email: "demo@user.com", password:"demoUser", first_name: 'demo', last_name: 'user'})

u1 = User.create!(
  password: 'password',
  email: 'email1@gmail.com',
  first_name: "u1",
  last_name: "u1"
)

u2 = User.create!(
  password: 'password',
  email: 'email2@gmail.com',
  first_name: 'u2',
  last_name: 'u2'
)

u3 = User.create!(
  password: 'password',
  email: 'email3@gmail.com',
  first_name: 'u3',
  last_name: 'u3'
)

u4 = User.create!(
  password: 'password',
  email: 'email4@gmail.com',
  first_name: "u4",
  last_name: "u4"
)

u5 = User.create!(
  password: 'password',
  email: 'email5@gmail.com',
  first_name: 'u5',
  last_name: 'u5'
)

u6 = User.create!(
  password: 'password',
  email: 'email6@gmail.com',
  first_name: 'u6',
  last_name: 'u6'
)

u7 = User.create!(
  password: 'password',
  email: 'email7@gmail.com',
  first_name: 'u7',
  last_name: 'u7'
)

u8 = User.create!(
  password: 'password',
  email: 'email8@gmail.com',
  first_name: "u8",
  last_name: "u8"
)

u9 = User.create!(
  password: 'password',
  email: 'email9@gmail.com',
  first_name: 'u9',
  last_name: 'u9'
)

u10 = User.create!(
  password: 'password',
  email: 'email10@gmail.com',
  first_name: 'u10',
  last_name: 'u10'
)

u11 = User.create!(
  password: 'password',
  email: 'email11@gmail.com',
  first_name: 'u11',
  last_name: 'u11'
)

u12 = User.create!(
  password: 'password',
  email: 'email12@gmail.com',
  first_name: 'u12',
  last_name: 'u12'
)

l1 = Listing.new(
  title: "CHOCOLATE CHERRY SUNFLOWER",
  price: 4,
  category: "sunflower",
  kind: "flower",
  seed_count: 100,
  description: 'Enter an alternate galaxy when you step into the Chocolate Cherry sunflower patch. The petals range from deep obsidian to rich chocolate and black cherry and burst forth from deep onyx centers like a supernova. Some blooms have a vibrant yellow ring, or corona, around the pollen disk, just to add extra depth! This multi-branching variety stands 6-7 feet in height and the heads average 5-8 inches across. This is a top choice for garden design or cut flower sales thanks to a long vase life and lower pollen count than other heirloom sunflowers.'
)

l1aphoto = open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-chocolate1.jpeg")
l1.photos.attach(io: l1aphoto, filename: "sunflower-chocolate1")

l1bphoto = open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-chocolate2.jpeg")
l1.photos.attach(io: l1bphoto, filename: "sunflower-chocolate2")

l1cphoto = open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-chocolate3.jpeg")
l1.photos.attach(io: l1cphoto, filename: "sunflower-chocolate3")

l1.save

l2 = Listing.new(
  title: "RED SUN SUNFLOWER",
  price: 3,
  category: "sunflower",
  kind: "flower",
  seed_count: 35,
  description: 'Stately branching plants reaching 5-6 feet tall are covered with dozens of ornamental blooms. Red to red-orange single flowers are highlighted with a hint of yellow around the centers. Blooms over a very long season, attracting bees and butterflies. Later, the tiny seeds attract birds.'
)

l2aphoto = open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-red.jpeg")
l2.photos.attach(io: l2aphoto, filename: "sunflower-red")

l2bphoto = open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-red1.jpeg")
l2.photos.attach(io: l2bphoto, filename: "sunflower-red1")

l2cphoto = open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-red3.jpeg")
l2.photos.attach(io: l2cphoto, filename: "sunflower-red3")

l2.save



# l3 = Listing.new(
#   title: "HENRY WILDE SUNFLOWER",
#   price: 2.75,
#   category: "sunflower",
#   kind: "flower",
#   seed_count: 35,
#   description: "Annual. This classic heirloom sunflower with pure yellow petals and dark centers is perfect for cut flowers and perfect for planting along a fence or barn.")
 
#   l4 = Listing.new(
#   title: "AUTUMN BEAUTY SUNFLOWER",
#   price: 3,
#   category: "sunflower",
#   kind: "flower",
#   seed_count: 35,
#   description: 'Annual. A beautiful sunflower! Many 6" flowers in brilliant red, gold, yellow, rust, and burgundy. Blooms over a long period and makes a wonderful display. Tall, 7’ plants are a favorite.')
  
#   l5 = Listing.new(
#   title: "KEE'S ORANGE MARIGOLD",
#   price: 3,
#   category: "marigold",
#   kind: "flower",
#   seed_count: 50,
#   description: "The brightest orange marigolds we have seen! This massive and magnificent marigold was selected by the late, Kees Sahin, a famous Dutch flower breeder. Sahin had set out to select the most vivid orange color to make a truly memorable marigold, the result is a high octane tangerine bloom that really pops! The robust and productive plants stand 1.5-2 feet tall and are smothered in full and fluffy electric orange blooms, each reaching an impressive 2.5 to 3 inches across.")

#   l6 = Listing.new(
#   title: "SPUN ORANGE MARIGOLD",
#   price: 2.75,
#   category: "marigold",
#   kind: "flower",
#   seed_count: 100,
#   description: "Our Favorite! Extra large, attractive, super-double flowers with tubular petals. The color is a pleasing, clear orange rather than the harsh orange-brown so often seen in African marigolds. Plants are rather compact, seldom exceeding 20 inches. Very uniform size is ideal for cutting, yet earns its keep in the border.")
  
#   l7 = Listing.new(
#   title: "COLOSSUS RED GOLD BICOLOR MARIGOLD",
#   price: 3,
#   category: "marigold",
#   kind: "flower",
#   seed_count: 50,
#   description: "Annual. Invite this bold French marigold into your garden for masses of gilded blooms with natural pest-repelling qualities! Large bicolored blooms of red and gold are simply stunning. This is the ultimate useful flower! Not only are the petals edible, it can repel garden pests such as whiteflies and nematodes. Try interplanting this beauty among your vegetable crops!")
  
#   l8 = Listing.new(
#   title: "CRACKERJACK MIX MARIGOLD",
#   price: 2.75,
#   category: "marigold",
#   kind: "flower",
#   seed_count: 200,
#   description: 'Annual. This giant African type is popular with gardeners coast to coast. Big double blooms come in shades of lemon yellow to deep orange, and the 30" plants are profuse. Growing Tips: For transplanting, sow indoors 3-4 weeks before last frost. Direct sow after last spring frost in ordinary garden soil. Thrives in full sun and summer heat. Remove spent flowers to prolong blooming period.')

  
