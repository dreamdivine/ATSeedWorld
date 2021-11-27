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
  description: 'Enter an alternate galaxy when you step into the Chocolate Cherry sunflower patch. The petals range from deep obsidian to rich chocolate and black cherry and burst forth from deep onyx centers like a supernova. Some blooms have a vibrant yellow ring, or corona, around the pollen disk, just to add extra depth! This multi-branching variety stands 6-7 feet in height and the heads average 5-8 inches across.'
)

l1aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/sunflower-chocolate1.webp")
l1.photos.attach(io: l1aphoto, filename: "sunflower-chocolate1")

# l1bphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-chocolate2.jpeg")
# l1.photos.attach(io: l1bphoto, filename: "sunflower-chocolate2")

# l1cphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/sunflower-chocolate3.jpeg")
# l1.photos.attach(io: l1cphoto, filename: "sunflower-chocolate3")

l1.save
 
l2 = Listing.new(
  title: "BIG JIM HOT PEPPE",
  price: 3.00,
  category: "pepper",
  kind: "vegetable",
  seed_count: 10,
  description: '')
l2aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/pepper-numex1.webp")
l2.photos.attach(io: l2aphoto, filename: "pepper-numex1.webp")

l2.save

r2a = Review.create(user_id: u1.id, listing_id:  l2.id, body: "Chile peppers love the heat, but will tolerate some afternoon shade. They don’t like to have wet roots, but they need to be moist constantly. Drip irrigation helps make some giant Big Jim’s. I love this pepper. They must be roasted as the skin is tough. I roast and put them in chile cheese bread, enchiladas etc.", rating: 4)
r2b = Review.create(user_id: u2.id, listing_id:  l2.id, body: "They taste so good. A lot like a hatch chili but not quite. The heat is a solid medium. l'm roasting these big boys up and eating them like candy. I grew mine between some tomatoes so it didn't get as much sun as it needed but I'm getting a decent amount about 6-7 peppers at a time.", rating: 4)


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

r3a = Review.create(user_id: u1.id, listing_id:  l3.id, body: "I will always grow these from now on. I planted them in late spring, they didn’t do a whole lot during the hottest part of our Arizona summer but Wednesday we’re established they have gone gangbusters.", rating: 5)
r3b = Review.create(user_id: u2.id, listing_id:  l3.id, body: "One of the earliest & most vigorous long beans I've grow. The rampant vines climb aggressively, requiring little training. They bear very early; only one other pole variety I've grown (also black seeded) was faster. Very long, thin, light green pods are borne in incredible numbers.", rating: 4)


l4 = Listing.new(
  title: "CALIMA BEAN",
  price: 3.00,
  category: "bean",
  kind: "vegetable",
  seed_count: 40,
  description: 'Bush. 50-55 days. French filet type pods of dark green color, slim straight shape, and superior flavor! Pods are held conveniently at the top of the stocky bushes. Pick them when no thicker than a pencil. Fine for fresh use, canning, and freezing.')

l4aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/bean-calima1.webp")
l4.photos.attach(io: l4aphoto, filename: "bean-calima1")

l4.save


r4a = Review.create(user_id: u1.id, listing_id:  l4.id, body: "Wow! I thought the Rattlesnake green beans were tasty, but these outshine them with ease. Lots of delicate, slender pods that have a touch of sweetness to them grow quickly and easily. While the Rattlesnake poles are very susceptible to disease early on, the Calima seems to be a much more hearty bean in contrast", rating: 5)
r4b = Review.create(user_id: u2.id, listing_id:  l4.id, body: "I am growing in a block of sixteen, great for a family of four to eat. Love a slender bean, great taste raw or cooked. They freeze well and so far the best bush bean for me.", rating: 5)

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


r5a = Review.create(user_id: u1.id, listing_id:  l5.id, body: "My favorite, together with Beurre de Roquencourt variety. Produces later than BdR but keeps going longer. Tastes great raw!", rating: 3)
r5b = Review.create(user_id: u2.id, listing_id:  l5.id, body: "I’m a lazy gardener, but I planted just three seeds - directly, in unfinished compost - and they all came up in 2-3 days. Thrilled. Still just babies, but I’m confident they’ll do fine.", rating: 5)

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


r6a = Review.create(user_id: u1.id, listing_id:  l6.id, body: "Just now got around to doing a test run of these Honduran beans, and they are real winners. Smoky flavor reminiscent of black beans but more subtle. Plants are slow to mature, but produce over a fairly long period. T", rating: 3)
r6b = Review.create(user_id: u2.id, listing_id:  l6.id, body: "I am surprised there is no info on if this is a pole or bush bean. I kinda need to know before I order....I guess I will try call and find out....I am guessing they won't know either.", rating: 2)

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


r7a = Review.create(user_id: u1.id, listing_id:  l7.id, body: "This is a beautiful fun plant. It got the best shot it could here in zone 4 with a historically warm summer, even warm nights. The best I could do is about 2 dozen fully matured pods from 2 plants. Only 2 germinated.", rating: 3)
r7b = Review.create(user_id: u2.id, listing_id:  l7.id, body: "I grew these for the first time in 2021. They do grow very high. Easily would go to 8’. They produced well despite the odd weather and fall storms.", rating: 4)


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


r8a = Review.create(user_id: u1.id, listing_id:  l8.id, body: "This was a fun growing experience. I transplanted one of my successful seeds into a 15 gallon pot that I had put a semi-circle fence trellis in as well and the plant completely engulfed it! The flowers are super delicate, but I did get enough fruit to experiment with, in the kitchen.", rating: 5)
r8b = Review.create(user_id: u2.id, listing_id:  l8.id, body: "I grew the Big Top bitter melon last year and every seed grew and thrived. However, I ended up losing every plant to hail. 2018 was a nasty year for hail, but these little plants gave me hope that I really can succeed with bitter melon and I will try again in 2019. I feel like if we hadn't of gotten so much hail, these would have been great.", rating: 4)


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


r9a = Review.create(user_id: u1.id, listing_id:  l9.id, body: "This is so easy to grow. I sowed it directly on the ground and it sprouted within 10 days. I’ve harvested a few fruits with few more on the way. The fruit is a little smaller than the regular green bitter melon, but with less bitter taste. Overall great plant! Easy to care for.", rating: 5)
r9b = Review.create(user_id: u2.id, listing_id:  l9.id, body: "Very pretty white fruit that's both juicy and scantly bitter. It's easy to grow, pest free and the leaves are very fragrant. I used the leaves to make tea.", rating: 4)


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


r10a = Review.create(user_id: u1.id, listing_id:  l10.id, body: "Hails from the scenic, southwestern bay area tip of Kyushu Island, Japan where some of the finest bitter melons are produced. This is an ideal bitter melon for making into tea or cooking. This exceptionally long and slender fruit is delicious sliced and stir fried. A potent superfood often paired with mellow flavors like cooked garlic and beans.", rating: 5)
r10b = Review.create(user_id: u2.id, listing_id:  l10.id, body: "I’m in zone 7. it did take a little while to flower and fruit. When the heat started, they took off unstoppable. Lots of beautiful flowers and fruits. I’ll definitely grow this variety again next year.", rating: 5)

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


r11a = Review.create(user_id: u1.id, listing_id:  l11.id, body: "This did well for us as a winter crop, started indoors in August and set out in late September. (An earlier planting was set out a month earlier and was hurt by 113 degree Santa Ana winds - it survived, but was never as nice.)", rating: 3)
r12b = Review.create(user_id: u2.id, listing_id:  l11.id, body: "I hereby echo one of the reviewers from Minnesota. I had very similar experience . the plants grew well, and I was hoping for the plant to make a decent size head, but the plants was grew to become a long stem and large leaves, the heads we harvested from all the plants were small. I ended up feeding the leaves to my canaries and chicken.", rating: 2)


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


r12a = Review.create(user_id: u1.id, listing_id:  l12.id, body: "I planted by direct sow with 99% germination in mid September (oops, getting a late start this year!). We left them exposed until just before the first frost, and covered them with what pretty much amounted to a cold frame, leaving them covered except the odd occasion.", rating: 5)
r12b = Review.create(user_id: u2.id, listing_id:  l12.id, body: "Very tasty, if you can get them to head. If you don't have a month or so of stable 60ish degree temperatures, that might prove very difficult. Started these in a high tunnel as transplants first week of March, thinking surely they'd be heading by mid May. Nope. Seedlings and plants were not especially vigorous. They will bolt if you look at them the wrong way, and what heads did form were pretty small.", rating: 2)

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


r13a = Review.create(user_id: u1.id, listing_id:  l13.id, body: "I direct sowed in late fall, they were tiny seedlings but overwintered with a lightweight row cover) through some negative deg temps in St. Louis(zone 6a). In the spring they took off and grew huge. I should have thinned them out earlier and spaced them apart more. I didn't realize how large they would get and that they take ~ 100days to mature.", rating: 3)
r13b = Review.create(user_id: u2.id, listing_id:  l13.id, body: "Planted in the Fall these cabbages took cold fronts, warm fronts, and heavy storms with no issues. They get nice and big and taste good. It's almost April and some are ready.", rating: 4)

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


r14a = Review.create(user_id: u1.id, listing_id:  l14.id, body: "I've been growing this for a few years here, and it's always the sharpest looking plant. Works great as an accent in flower pots", rating: 5)
r14b = Review.create(user_id: u2.id, listing_id:  l14.id, body: "Excellent cabbage that handles the capricious Texas spring weather with little issue. No problems with cabbage loopers or aphids, makes nice heads even in warmer weather than most cabbage likes. I'm going to try it again in the fall to see if that will allow the purple tones to come out a bit more vibrantly.", rating: 5)

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


r15a = Review.create(user_id: u1.id, listing_id:  l15.id, body: "This cabbage was easy and fast growing as a winter crop in central FL. No trouble with disease, and only minor damage from loopers.", rating: 5)
r15b = Review.create(user_id: u2.id, listing_id:  l15.id, body: "I grew this variety for the first time this spring and I am truly impressed. the taste and firmness outshines the regular cannonball cabbage grown in the fall. I would like to grow this type all year long.", rating: 5)


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


r16a = Review.create(user_id: u5.id, listing_id:  l16.id, body: "Easy to grow and resilient to crazy spring weather. The color fluctuates from light yellow to almost orange. Good flavor and size. I’ll definitely grow again, thanks for the free seeds!", rating: 4)
r16b = Review.create(user_id: u6.id, listing_id:  l16.id, body: "I mixed these with cosmic purple and nantes for variety. I planted the mix in September in Florida. Of all the carrots, they underperformed....HOWEVER when I planted the mix again in the spring, Amarillo WAY outperformed the other types and in fact some of the others didnt even sprout, leading to a bed of mostly Amarillo", rating: 4)


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


r17a = Review.create(user_id: u3.id, listing_id:  l17.id, body: "I'm often struggling with growing carrots, but these always come up perfectly. The taste is wonderful. Until I learn to grow other species better, this is definitely my favorite carrot to grow.", rating: 5)
r17b = Review.create(user_id: u4.id, listing_id:  l17.id, body: "I'm dismal when it comes to growing carrots, as in maybe one or two would sprout. Maybe I planted too early or too late for our grow season? I don't know. So I planted these as a lark in the early spring in part of the beet bed and, frankly, kind of forgot about them.", rating: 5)

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


r18a = Review.create(user_id: u1.id, listing_id:  l18.id, body: "One of the coolest cauliflower I've grown, as well as best tasting. Only down side is it had very low germ. but it was labeled as such so no complaints. A farmers market favorite.", rating: 5)


l19 = Listing.new(
  title: "ROBER CAULIFLOWER",
  price: 3.00,
  category: "cauliflower",
  kind: "vegetable",
  seed_count: 200,
  description: '65 Days. This is one of the most productive and adaptable cauliflower we have ever grown. Rober can produce large, 12-inch heads with tight curds, despite fluctuations in temperature that would ruin many other varieties. We harvested perfect heads in the punishing Missouri early summer. This is a reliable and tasty variety from Poland.')

l19aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/cauliflower-rober1.webp")
l19.photos.attach(io: l19aphoto, filename: "cauliflower-rober1")

l19.save


r19a = Review.create(user_id: u5.id, listing_id:  l19.id, body: "I loved growing this cauliflower! Super heat tolerant and easy to grow! Grew huge heads probably 12” across! Highly recommend. I forgot to tie the leaves around them so they are tinted yellow but still tastes great!", rating: 5)
r19b = Review.create(user_id: u6.id, listing_id:  l19.id, body: "I direct sowed my seeds right in my garden beds here in Northern California zone 9b back in late October and just started harvesting this week (mid March). This was my first time growing cauliflower so I don’t have much to compare it to but they came out just as large and beautiful as grocery store cauliflower! Absolutely delicious too.", rating: 5)

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


r20a = Review.create(user_id: u9.id, listing_id:  l20.id, body: "Excelente Producto, muy buena germinación... lo recomiendo totalmente. Requiere de bastante espacio y buen suelo para crecer muy grande. Además, es muy hermosa la planta. Excellent Product, very good germination ... I totally recommend it. It requires a lot of space and good soil to grow very large. In addition, the plant is very beautiful.", rating: 5)
r20b = Review.create(user_id: u8.id, listing_id:  l20.id, body: "", rating: 4)


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
  title: "JAPANESE WHITE EGG EGGPLANT",
  price: 3.00,
  category: "eggplant",
  kind: "vegetable",
  seed_count: 200,
  description: '70 Days. Beautiful, brilliant purple heads weigh 2-3 lbs and are a fine, sweet flavor. The heads cook to bright green. Insect-resistant, it is also easier to grow than many white varieties, and it is rich in minerals. This colorful heirloom is from select Italian seed, and is our favorite purple cauliflower every year!')
l22aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/eggplant-egg1.webp")
l22.photos.attach(io: l22aphoto, filename: "eggplant-egg1")

l22.save


r22a = Review.create(user_id: u7.id, listing_id:  l22.id, body: "The first of my four eggplant varieties to produce, and seems like it'll be the last to quit. Incredibly creamy and mild - not the choice for people who want very strong eggplant flavor, but perfect for cooking whole or halved with little to no seasoning. Small fruit, but they're very dense!", rating: 5)
r22b = Review.create(user_id: u8.id, listing_id:  l22.id, body: "I normally use 'Casper' as my white eggplant, but this year I decided to try something new. I'm glad I did. It took the seeds ~one month to germinate @ 80F and started out so slow, I only lost one seedling, but the germination was 95%. Once it was warm enought to plant out, they just took off running and I'm harvesting a few pounds a week out of 8 plants.", rating: 4)


l23 = Listing.new(
  title: "FRENCH BREAKFAST RADISH",
  price: 2.75,
  category: "radish",
  kind: "vegetable",
  seed_count: 200,
  description: '28 days. A pre-1885 French heirloom; mild, spicy flavor with a red top and a white bottom. An attractive gourmet variety. Early maturity. Sprouts in 3-6 Days. Ideal Temperature: 50-75 Degrees F.')

l23aphoto = URI.open("https://atseedworld-seeds.s3.us-west-1.amazonaws.com/atseedworld/firstImage/radish-french1.webp")
l23.photos.attach(io: l23aphoto, filename: "radish-french1")

l23.save


r23a = Review.create(user_id: u1.id, listing_id:  l23.id, body: "This radish grows great and early. Nearly perfect germination success rates. Delicious, I even used the greens for some homemade pesto.", rating: 5)
r23b = Review.create(user_id: u2.id, listing_id:  l23.id, body: "Can't say enough good things about this radish. Germination is pretty much 100%. Works well planting seeds or as transplants. Doesn't seem to get woody like other varieties. Many grow above ground and others grow partially or fully underground. Grow well as clumps of 3-4. Very mild flavor, even when grown in hotter part of season. Nice size, larger than most.", rating: 5)

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


r24a = Review.create(user_id: u1.id, listing_id:  l24.id, body: "I started 10 seeds expecting at least half not to germinate, well; They all germinated, now what?!? I kept 5 and gifted the rest. The plants are prolific. They put out white beautiful flowers. I grew them all spring, summer, fall and they’re still producing now during winter. Zone 10A highly recommend.", rating: 5)


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


r25a = Review.create(user_id: u3.id, listing_id:  l25.id, body: "These couldn’t be any easier to grow. I planted a bunch of seeds in a milk jug and transplanted them into a raised bed. The plants are well-over a foot tall now with loads of red flowers. They are extremely heat tolerant.", rating: 5)
r25b = Review.create(user_id: u6.id, listing_id:  l25.id, body: "First time growing in 2020. Love love love. Will grow these forever. Lasts a long time in a bouquet. Lovely dried. My cat even thinks they are fun to steal out of vases. Cant wait to add more colors to my collection.", rating: 5)

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

r27a = Review.create(user_id: u8.id, listing_id:  l27.id, body: "Started seeds indoors before last frost. These marigolds were the first to bloom, and are so striking to see, I have to stop and admire them whenever I pass by!", rating: 5)
r27b = Review.create(user_id: u9.id, listing_id:  l27.id, body: "I started the seeds indoors and transplanted when they were approximately 6-8” tall. They were ridiculous! I don’t want to sound like I am exaggerating, so I will just say 18”, most grew to as high as 18-24”. Planted throughout the garden. Did not have much of a pest problem this year.", rating: 5)


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

r29a = Review.create(user_id: u7.id, listing_id: l29.id, body: "(T. linneaus) A smoldering and memorable marigold with gracefully wavy stems, and smoky orange and red blooms that resemble embers in a crackling fire. This old variety has long been tended at the Linneas Botantical Gardens in Uppsala, Sweden.", rating: 5)
r29b = Review.create(user_id: u6.id, listing_id: l29.id, body: "I love these marigolds. Tall green leaves plants with many small red, orange, yellow mixed blooms. They’ve been nice for a cut bouquet and long lasting after cutting.", rating: 5)

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

r30a = Review.create(user_id: u4.id, listing_id:  l25.id, body: "First time with marigolds. Tried growing these last year (failed), and decided to keep them indoors under the grow light a little longer this year. Success! I guess I thought these topped out at 2 feet tall; my biggest one is topping at about 26 inches in early Sept.", rating: 3)
r30b = Review.create(user_id: u8.id, listing_id:  l25.id, body: "I garden in Zone 6b at the foot of the Appalachian Mountains. We had a hard late freeze, extended summer drought and extended days in the 90's this growing season, which is all unusual. I planted seeds directly in the ground in mid-May in both full sun and partial sun. The plants were gorgeous, full, leafy, and sturdy, be empty of flowers all summer. By early October, I'd given up on them but hadn't pulled them. All of a sudden, they began blooming like crazy.", rating: 5)

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

r31a = Review.create(user_id: u8.id, listing_id:  l25.id, body: "We planted a variety of Rare Seeds marigolds in our greenhouse to offset the...well...greenness of all of our other plants. These provided a stunning foreground to the peppers, eggplants, tomatoes, and basil. I don't know why others had difficulties with these, as I am not a pro by any means. They grew beautifully, and are still providing happy smiles every time I enter our greenhouse.", rating: 5)
r31b = Review.create(user_id: u8.id, listing_id:  l25.id, body: "These are as easy to grow as any other marigold but they do not have the beauty like the flower that is displayed on this site. I was disappointed in its display. I won’t grow it again.", rating: 2)

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

r32a = Review.create(user_id: u3.id, listing_id:  l32.id, body: "Great germination. The April planted bunch bolted into summer and I let it go as pollinators were enjoying. By September the bolted plants had reseeded for fall. Lots of happy mustards now (October 20) as the weather cools. I live on the edge of a wooded area and have issues with slugs. They have left the mustard alone as the flavor seems to be too strong.", rating: 5)
r32b = Review.create(user_id: u3.id, listing_id:  l32.id, body: "The seeds were sent free with my order. I planned on only trying out a few, but my granddaughter accidently scattered them everywhere. We watered, but didn't pay much attention to it. It grew wonderfully with no known bug issues. I would grow this again.", rating: 5)

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

r33 = Review.create(user_id: u5.id, listing_id:  l25.id, body: "I grew this around mid-February and had no problems at all. It grew fast and the flavor was amazing of mild wasabi and crispy texture. Also the aphids left it alone and went for the Swiss Chard right next to them.", rating: 5)
r33 = Review.create(user_id: u5.id, listing_id:  l25.id, body: "I planted 3 mustards simultaneously during the coolest time of year here in the highland tropics. This being the tropics pretty much all greens are at a disadvantage. I planted this one and the Japanese Giant Red from Baker Creek, plus Dragon's Tongue from another seller. Of the three, this one was the poorest performer. ", rating: 3)


 


  
