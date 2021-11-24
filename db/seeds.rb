# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'
Review.delete_all
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
  price: 4.00,
  category: "sunflower",
  kind: "flower",
  seed_count: 35,
  description: 'Enter an alternate galaxy when you step into the Chocolate Cherry sunflower patch. The petals range from deep obsidian to rich chocolate and black cherry and burst forth from deep onyx centers like a supernova. Some blooms have a vibrant yellow ring, or corona, around the pollen disk, just to add extra depth! This multi-branching variety stands 6-7 feet in height and the heads average 5-8 inches across. This is a top choice for garden design or cut flower sales thanks to a long vase life and lower pollen count than other heirloom sunflowers.'
)

l1aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/sunflower-chocolate1.webp")
l1.photos.attach(io: l1aphoto, filename: "sunflower-chocolate1")

# l1bphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-chocolate2.jpeg")
# l1.photos.attach(io: l1bphoto, filename: "sunflower-chocolate2")

# l1cphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-chocolate3.jpeg")
# l1.photos.attach(io: l1cphoto, filename: "sunflower-chocolate3")

l1.save

l2 = Listing.new(
  title: "RED SUN SUNFLOWER",
  price: 3.00,
  category: "sunflower",
  kind: "flower",
  seed_count: 35,
  description: 'Stately branching plants reaching 5-6 feet tall are covered with dozens of ornamental blooms. Red to red-orange single flowers are highlighted with a hint of yellow around the centers. Blooms over a very long season, attracting bees and butterflies. Later, the tiny seeds attract birds.'
)

l2aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/sunflower-red1.jpg")
l2.photos.attach(io: l2aphoto, filename: "sunflower-red1")

# l2bphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-red1.jpg")
# l2.photos.attach(io: l2bphoto, filename: "sunflower-red1")

# l2cphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-red2.jpeg")
# l2.photos.attach(io: l2cphoto, filename: "sunflower-red2")

l2.save


l3 = Listing.new(
  title: "TAIWAN YARD-LONG BEAN",
  price: 4.00,
  category: "bean",
  kind: "vegetable",
  seed_count: 25,
  description: "This is a true “Yard Long” bean, that can easily reach over 3 feet in length! Get high yields from a small space, the vines set a heavy crop of these delicious pods that will amaze your friends. We love these beans stir-fried. They have superior flavor to common beans.")

l3aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bean-asian1.webp")
l3.photos.attach(io: l3aphoto, filename: "bean-asian1")

l3.save

l4 = Listing.new(
  title: "CALIMA BEAN",
  price: 3.00,
  category: "bean",
  kind: "vegetable",
  seed_count: 40,
  description: 'Bush. 50-55 days. French filet type pods of dark green color, slim straight shape, and superior flavor! Pods are held conveniently at the top of the stocky bushes. Pick them when no thicker than a pencil. Fine for fresh use, canning, and freezing.'

l4aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bean-calima1.webp")
l4.photos.attach(io: l4aphoto, filename: "bean-calima1")

l4.save

l5 = Listing.new(
  title: "DRAGON TONGUE BUSH BEAN",
  price: 3.00,
  category: "bean",
  kind: "vegetable",
  seed_count: 40,
  description: 'Bush. 60 Days. Our Favorite! This famous Dutch heirloom bean has an incomparable flavor. The tender and superbly delicious 7" pods are yellow with amazing purple streaks! It also makes a tasty shelled bean. Popular with chefs and gourmets.')

l5aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bean-dragon1.webp")
l5.photos.attach(io: l5aphoto, filename: "bean-dragon1")

l5.save

l6 = Listing.new(
  title: "SLIPPERY SILKS BEAN",
  price: 3.00,
  category: "bean",
  kind: "vegetable",
  seed_count: 40,
  description: 'Pole. We love this splendid Honduran heirloom dry bean for its silky soft, creamy texture and top-notch flavor. Famous for its quick cooking time and ability to be reheated without losing its superior texture, this variety is traditionally cooked over a wood fire.')

l6aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bean-slippery1.webp")
l6.photos.attach(io: l6aphoto, filename: "bean-slippery1")

l6.save

l7 = Listing.new(
  title: "SUCCOTASH BEAN",
  price: 3.50,
  category: "bean",
  kind: "vegetable",
  seed_count: 35,
  description: 'Pole. A rare, ancient bean from the Narragansett Indian tribe of Rhode Island. This uniquely shaped, dime-sized bean closely resembles a kernel of corn. This bean is ideal for the north, particularly on the coast.')

l7aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bean-succotash1.webp")
l7.photos.attach(io: l7aphoto, filename: "bean-succotash1")

l7.save


l8 = Listing.new(
  title: "BIG TOP BITTER MELON",
  price: 4.00,
  category: "bitter melon",
  kind: "vegetable",
  seed_count: 8,
  description: '65 days. A unique, heart-shaped variety of bitter melon that is easier to prepare and with a more mild flavor. The large softball-sized fruit is an early producer. The long, rambling vines produce tons of smooth skinned, dark green, bumpy fruit.')

l8aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bitter-bigtop1.webp")
l8.photos.attach(io: l8aphoto, filename: "bitter-bigtop1")

l8.save


l9 = Listing.new(
  title: "OKINAWAN PURE WHITE BITTER MELON",
  price: 6.00,
  category: "bitter melon",
  kind: "vegetable",
  seed_count: 6,
  description: 'A most stunning edible ornamental, this extra large, mild Japanese bitter melon bears mild with a refined flavor. Nutritionally potent and health promoting! Bitter melon is identified as a key dietary staple contributing to the world-famous longevity of the Okinawan people.')

l9aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bitter-okinawan1.webp")
l9.photos.attach(io: l9aphoto, filename: "bitter-okinawan1")

l9.save


l10 = Listing.new(
  title: "SATSUMA OHNAGA BITTER MELON",
  price: 4.00,
  category: "bitter melon",
  kind: "vegetable",
  seed_count: 8,
  description: 'Hails from the scenic, southwestern bay area tip of Kyushu Island, Japan where some of the finest bitter melons are produced. This is an ideal bitter melon for making into tea or cooking. This exceptionally long and slender fruit is delicious sliced and stir fried.')


l10aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bitter-satsuma1.webp")
l10.photos.attach(io: l10aphoto, filename: "bitter-satsuma1")

l10.save

l11 = Listing.new(
  title: "CALABRESE GREEN SPROUTING BROCCOLI",
  price: 3.00,
  category: "broccoli",
  kind: "vegetable",
  seed_count: 300,
  description: '90 Days. An Italian heirloom brought to America in the 1880s. Heads mature at 5-8" with many side shoots. Sow very early indoors, or direct seed outdoors 2-4 weeks ahead of last-frost date and again in midsummer for fall harvest. Best in cool weather')

l11aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/broccoli-calabrese1.webp")
l11.photos.attach(io: l11aphoto, filename: "broccoli-calabrese1")

l11.save


l12 = Listing.new(
  title: "WALTHAM 29 BROCCOLI",
  price: 3.00,
  category: "broccoli",
  kind: "vegetable",
  seed_count: 300,
  description: '75 Days. Standard type, produces 4-8" green heads that are nicely flavored. Compact plants also produce some side shoots. Introduced in 1954. A favorite here at the farm! Sow very early indoors, or direct seed outdoors 2-4 weeks ahead of last-frost date and again in midsummer.')

l12aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/broccoli-waltham1.webp")
l12.photos.attach(io: l12aphoto, filename: "broccoli-waltham1")

l12.save

l13 = Listing.new(
  title: "BRUNSWICK CABBAGE",
  price: 2.75,
  category: "cabbage",
  kind: "vegetable",
  seed_count: 100,
  description: '90 Days. A large drumhead cabbage that is very cold hardy. A fall/winter type cabbage, it stores very well. Introduced in 1924, it is an excellent market variety that is becoming rare. Prefers cool weather and ample, even moisture. Sow seeds or set transplants into rich soil. Time plantings for spring or fall harvest.')

l13aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/cabbage-brunswick1.webp")
l13.photos.attach(io: l13aphoto, filename: "cabbage-brunswick1")

l13.save

l14 = Listing.new(
  title: "VIOLACEO DI VERONA CABBAGE",
  price: 3.00,
  category: "cabbage",
  kind: "vegetable",
  seed_count: 100,
  description: '120 Days. A vintage heirloom cabbage that originated in the region of Verona in northern Italy, with stunning, lightly savoyed violet and green leaves that become more vibrant as the cool weather sets in. Thanks to an appreciation for traditional cuisine, Italians have preserved this variety from antiquity.')

l14aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/cabbage-violaceo1.webp")
l14.photos.attach(io: l14aphoto, filename: "cabbage-violaceo1")

l14.save

l15 = Listing.new(
  title: "EARLY JERSEY WAKEFIELD CABBAGE",
  price: 2.75,
  category: "cabbage",
  kind: "vegetable",
  seed_count: 300,
  description: '70 days. Introduced in the 1840s, with tasty, 2lb, sweet and flavorful conical heads. This very early variety was sold commercially by Peter Henderson in the late 1860s. Prefers cool weather and ample, even moisture. Sow seeds or set transplants into rich soil. Time plantings for spring or fall harvest.')

l15aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/Cabbage-Wakefield1.webp")
l15.photos.attach(io: l15aphoto, filename: "Cabbage-Wakefield1")

l15.save


l16 = Listing.new(
  title: "AMARILLO CARROT",
  price: 3.00,
  category: "carrot",
  kind: "vegetable",
  seed_count: 300,
  description: '75 days. Lovely, lemon-yellow roots are bright and sweet! Good for a summer to fall crop, these have large 8-inch roots and strong tops. Crunchy and full of juice! Carrots require light and fluffy soil in full sun, adequate moisture but only average fertilizing. Surface sow; press in gently and provide consistent irrigation.')
l16aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/carrot-amarillo1.webp")
l16.photos.attach(io: l16aphoto, filename: "carrot-amarillo1")

l16.save


l17 = Listing.new(
  title: "PARISIENNE CARROT",
  price: 3.00,
  category: "carrot",
  kind: "vegetable",
  seed_count: 300,
  description: '55-70 Days. These small, round carrots are popular in France. The tender, orange globes are superb when lightly steamed. This little carrot is great for home and market gardens, and is fairly uniform and easy to grow, even in heavy soils. Carrots require light and fluffy soil in full sun, adequate moisture but only average fertilizing. Surface sow.')

l17aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/carrot-parisienne1.webp")
l17.photos.attach(io: l17aphoto, filename: "carrot-parisienne1")

l17.save

l18 = Listing.new(
  title: "DE JESI CAULIFLOWER",
  price: 3.50,
  category: "cauliflower",
  kind: "vegetable",
  seed_count: 150,
  description: 'Nutty, sweet flavor and incredible fractal patterns in a stunning creamy white color make this a favorite cauliflower in Italy. A beloved heirloom hailing from Jesi, Italy, this mild-flavored variety is perfectly suited to marketing. In Italy it is called “snail cauliflower” for its funny twirled patterns, and it is a favorite of world-renowned chef Peter Gilmore.')

l18aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/cauliflower-jesi1.webp")
l18.photos.attach(io: l18aphoto, filename: "cauliflower-jesi1")

l18.save


l19 = Listing.new(
  title: "ROBER CAULIFLOWER",
  price: 3.00,
  category: "cauliflower",
  kind: "vegetable",
  seed_count: 200,
  description: '65 Days. This is one of the most productive and adaptable cauliflower we have ever grown. Rober can produce large, 12-inch heads with tight curds, despite fluctuations in temperature that would ruin many other varieties. We harvested perfect heads in the punishing Missouri early summer. This is a reliable and tasty variety from Poland.')

l19aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/cauliflower-rober1.web")
l19.photos.attach(io: l19aphoto, filename: "cauliflower-rober1")

l19.save


l20 = Listing.new(
  title: "PURPLE OF SICILY CAULIFLOWER",
  price: 3.00,
  category: "cauliflower",
  kind: "vegetable",
  seed_count: 200,
  description: '70 Days. Beautiful, brilliant purple heads weigh 2-3 lbs and are a fine, sweet flavor. The heads cook to bright green. Insect-resistant, it is also easier to grow than many white varieties, and it is rich in minerals. This colorful heirloom is from select Italian seed, and is our favorite purple cauliflower every year!')
l20aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/cauliflower-sicily1.webp")
l20.photos.attach(io: l20aphoto, filename: "cauliflower-sicily1")

l20.save


l21 = Listing.new(
  title: "FLAMINGO FEATHER CELOSIA",
  price: 3.00,
  category: "celosia",
  kind: "flower",
  seed_count: 100,
  description: '(Celosia argentea spicata). Soft pink spikes sway gracefully atop tall, slender stems, making this the most elegant celosia. This reliable and uniform variety stands 24-40 inches tall and is perfect for fine gardening and cut flower growing. The dainty spikes in plush pink tones makes for a perfect wedding flower or a soothing element in landscapes.')

l21aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/celosia-1.webp")
l21.photos.attach(io: l21aphoto, filename: "celosia-1")


l21.save

l22 = Listing.new(
  title: "PURPLE OF SICILY CAULIFLOWER",
  price: 3.00,
  category: "eggplant",
  kind: "vegetable",
  seed_count: 200,
  description: '70 Days. Beautiful, brilliant purple heads weigh 2-3 lbs and are a fine, sweet flavor. The heads cook to bright green. Insect-resistant, it is also easier to grow than many white varieties, and it is rich in minerals. This colorful heirloom is from select Italian seed, and is our favorite purple cauliflower every year!')
l22aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/eggplant-egg1.webp")
l22.photos.attach(io: l22aphoto, filename: "eggplant-egg1")

l22.save


l23 = Listing.new(
  title: "JAPANESE WHITE EGG EGGPLANT",
  price: 2.75,
  category: "eggplant",
  kind: "vegetable",
  seed_count: 25,
  description: '65 Days. These gorgeous, smooth white fruits mature at 2-3". With a full, rich flavor, they are perfect for stir-frying. Plants yield heavily all season. Start indoors in bright light 8-12 weeks before last frost date. Heat mat helps to warm soil and speed germination. Setting out larger transplants helps to fight pest pressure.')

l23aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/eggplant-egg1.webp")
l23.photos.attach(io: l23aphoto, filename: "eggplant-egg1")

l23.save

l24 = Listing.new(
  title: "SATSUMA LONG EGGPLANT",
  price: 3.50,
  category: "eggplant",
  kind: "vegetable",
  seed_count: 25,
  description: 'A super long Japanese eggplant with minty green skin with a matte texture. The white flesh is tender and has a superb buttery flavor that is lacking in most eggplants. The impressively long fruit grows to 16 inches. This heirloom is divine in tempura, curries, pizza, soups, and salads! The perfect variety for roasting, grilling, pickling, frying, or steaming.')
l24aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/eggplant-satsuma1.webp")
l24.photos.attach(io: l24aphoto, filename: "eggplant-satsuma1")

l24.save


l25 = Listing.new(
  title: "STRAWBERRY FIELDS GOMPHRENA",
  price: 3.50,
  category: "gomphrena",
  kind: "flower",
  seed_count: 25,
  description: 'A favorite cutting flower, Strawberry Fields produces profusions of vivid, lipstick-red blooms on sturdy 18" stems. Stunning when planted en masse and a phenomenal bedding flower, it produces long-season color that does not tire. Add these sensational scarlet poms to your everlasting bouquets!')

l25aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/gomphrema-haagena1.webp")
l25.photos.attach(io: l25aphoto, filename: "gomphrema-haagena1")

l25.save

l26 = Listing.new(
  title: "SALMON PASTEL GOMPHRENA",
  price: 3.00,
  category: "gomphrena",
  kind: "flower",
  seed_count: 25,
  description: '85 days. A reliable and profuse producer of everlasting flamingo pink globes. Plants reach 2-3 feet tall and are very low maintenance, and they are perfect for tidy borders, low water gardens, containers and the cut flower patch. This long-season bloomer provides color for months and it makes a fantastic, vibrant dried flower.')

l26aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/gomphrena-salmon1.webp")
l26.photos.attach(io: l26aphoto, filename: "gomphrena-salmon1")

l26.save

l27 = Listing.new(
  title: "COLOSSUS RED GOLD BICOLOR MARIGOLD",
  price: 3.00,
  category: "marigold",
  kind: "flower",
  seed_count: 50,
  description: 'Annual. Invite this bold French marigold into your garden for masses of gilded blooms with natural pest-repelling qualities! Large bicolored blooms of red and gold are simply stunning. This is the ultimate useful flower! Not only are the petals edible, it can repel garden pests such as whiteflies and nematodes.')

l27aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/marigold-colossus1.webp")
l27.photos.attach(io: l27aphoto, filename: "marigold-colossus1")

l27.save

l28 = Listing.new(
  title: "KEE'S ORANGE MARIGOLD",
  price: 3.00,
  category: "marigold",
  kind: "flower",
  seed_count: 50,
  description: 'The brightest orange marigolds we have seen! This massive and magnificent marigold was selected by the late, Kees Sahin, a famous Dutch flower breeder. Sahin had set out to select the most vivid orange color to make a truly memorable marigold, the result is a high octane tangerine bloom that really pops! The robust and productive plants stand 1.5-2 feet tall.')

l28aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/marigold-kee1.webp")
l28.photos.attach(io: l28aphoto, filename: "marigold-kee1")

l28.save


l29 = Listing.new(
  title: "LINNAEUS BURNING EMBERS MARIGOLD",
  price: 3.00,
  category: "marigold",
  kind: "flower",
  seed_count: 100,
  description: 'The brightest orange marigolds we have seen! (T. linneaus) A smoldering and memorable marigold with gracefully wavy stems, and smoky orange and red blooms that resemble embers in a crackling fire. This old variety has long been tended at the Linneas Botantical Gardens in Uppsala, Sweden.')

l29aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/marigold-linnaeus1.webp")
l29.photos.attach(io: l29aphoto, filename: "marigold-linnaeus1")

l29.save

l30 = Listing.new(
  title: "QUEEN SOPHIA MARIGOLD",
  price: 2.75,
  category: "marigold",
  kind: "flower",
  seed_count: 100,
  description: 'Annual. Gorgeous to the point of excess! Double, deep orange-to-russet flowers reach 2.5” in diameter. They have a tidy, geometric look because the petals occur in neat concentric rings. Each petal lays nearly flat, without crowding its neighbors, showing the intricate edging, penciled in pure gold.')

l30aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/marigold-sophia1.webp")
l30.photos.attach(io: l30aphoto, filename: "marigold-sophia1")

l30.save

l31 = Listing.new(
  title: "SPUN ORANGE MARIGOLD",
  price: 2.75,
  category: "marigold",
  kind: "flower",
  seed_count: 100,
  description: 'Our Favorite! Extra large, attractive, super-double flowers with tubular petals. The color is a pleasing, clear orange rather than the harsh orange-brown so often seen in African marigolds. Plants are rather compact, seldom exceeding 20 inches. Very uniform size is ideal for cutting, yet earns its keep in the border.')

l31aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/marigold-spun1.webp")
l31.photos.attach(io: l31aphoto, filename: "marigold-spun1")

l31.save

l32 = Listing.new(
  title: "JAPANESE GIANT RED MUSTARD",
  price: 3.00,
  category: "mustard",
  kind: "vegetable",
  seed_count: 200,
  description: '(B. juncea) Beautiful, large, Japanese type. Purple-red leaves with a delicious, strong, sharp, almost garlic-like, mustard flavor. Tasty stir-fried or boiled and makes a great pickling variety. Stands long in the field, tolerates more heat than most, bolts very late; also very cold-hardy. Flavor is sharp: nice and spicy!')

l32aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/mustard-japanese1.webp")
l32.photos.attach(io: l32aphoto, filename: "mustard-japanese1")

l32.save

l33 = Listing.new(
  title: "GREEN WAVE MUSTARD",
  price: 2.50,
  category: "mustard",
  kind: "vegetable",
  seed_count: 200,
  description: '50 days. (Brassica juncea) Curled and very frilly medium green leaves stay tender to a good size; upright plants reach 2 feet in height. Stands long in the field, tolerates more heat than most, bolts very late; also very cold-hardy. Flavor is sharp: nice and spicy! A high-yielding type that makes a good crop in home or market gardens.')

l33aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/mustard-wave1.webp")
l33.photos.attach(io: l33aphoto, filename: "mustard-wave1")

l33.save



 r1 = Review.create(user_id: u1.id, listing_id:  l1.id, body: "awesome seed, very good germination rate", rating: 5)
 r2 = Review.create(user_id: u2.id, listing_id:  l2.id, body: "90% germination rate, really pretty flowers", rating: 4)
 


 


  
