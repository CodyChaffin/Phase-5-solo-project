# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding data"
puts "seeding users"
user1= User.create(name: "Cody", email: "cmchaff14@gmail.com", password: "password")
user2= User.create(name: "Deanna", email: "cmchaff14@yahoo.com", password: "password")
puts "finished users now recipes"
recipe1= Recipe.create(name: "The Best Kale Salad", image_url: "https://www.acouplecooks.com/wp-content/uploads/2018/11/Kale-Salad-002.jpg", directions: ["Destem and chop the kale.", "Whip up the garlicky Parmesan dressing: start by using your knife blade to form the garlic into a paste. You’ll mince the garlic, then add salt and scrape the blade back and forth over the garlic until it forms into a paste.", "Mix the garlic paste with lemon, olive oil, Parmesan cheese and red pepper flakes.", "Top with lemon zest."])
recipe2= Recipe.create(name: "BBQ Chicken Done Right", image_url: "https://www.foodiecrush.com/wp-content/uploads/2019/07/BBQ-Chicken-Breasts-foodiecrush.com-012.jpg", directions: ["Pick your favorite BBQ sauce or make your own", "Reserve 1 cup of your BBQ sauce for later. Add chicken to remaining barbecue sauce. Cover and refrigerate for at least 1 hour and up to overnight.", "Make chicken: Preheat oven to 425° and line a large baking sheet with foil. Place onions on baking sheet, drizzle with oil, and toss to coat. Place chicken on top of onions, skin side up, and bake until golden and internal temperature reaches 165°, 30 to 40 minutes.", "Turn oven to broil. Brush chicken with reserved barbecue sauce on both sides and broil until skin is crispy and sauce is thickened, 5 minutes."])
recipe3= Recipe.create(name: "Best BBQ Sauce", image_url: "https://www.foxandbriar.com/wp-content/uploads/2020/05/BBq-sauce-4-of-4.jpg", directions: ["In a large pot, combine ketchup, brown sugar, water, apple cider vinegar, Worcestershire, molasses, and spices.", "Bring pot to a simmer on low heat to thicken the mixture and take off to cool when suace is to your liking"])
puts "finished recipes now for ingredients"
ingred1=Ingredient.create(recipe_id: recipe3.id, name: "ketchup", calories: 134, amount:"1 1/2 Cups")
ingred2=Ingredient.create(recipe_id: recipe3.id, name: "brown sugar", calories: 829, amount:"1 Cup packed")
ingred3=Ingredient.create(recipe_id: recipe3.id, name: "water", calories: 0, amount:"1/2 Cup")
ingred4=Ingredient.create(recipe_id: recipe3.id, name: "apple cider vinegar", calories: 13, amount:"1/4 Cup")
ingred5=Ingredient.create(recipe_id: recipe3.id, name: "Worcestershire sauce", calories: 13, amount:"1 tbsp")
ingred6=Ingredient.create(recipe_id: recipe3.id, name: "molasses", calories: 61, amount:"1 tbsp")
ingred7=Ingredient.create(recipe_id: recipe3.id, name: "kosher salt", calories: 0, amount:"1 1/2 tsp")
ingred8=Ingredient.create(recipe_id: recipe3.id, name: "garlic powder", calories: 5, amount:"1/2 tsp")
ingred9=Ingredient.create(recipe_id: recipe3.id, name: "onion powder", calories: 4, amount:"1/2 tsp")
ingred10=Ingredient.create(recipe_id: recipe3.id, name: "ground mustard", calories: 1, amount:"1/4 tsp")
ingred11=Ingredient.create(recipe_id: recipe2.id, name: "BBQ sauce", calories: 1440, amount:"3 Cups")
ingred12=Ingredient.create(recipe_id: recipe2.id, name: "bone-in, skin-on chicken thighs, drumsticks, or breasts", calories: 2055, amount:"3 lb.")
ingred13=Ingredient.create(recipe_id: recipe2.id, name: "large onions, thinly sliced", calories: 120, amount:"2")
ingred14=Ingredient.create(recipe_id: recipe2.id, name: "extra-virgin olive oil", calories: 119, amount:"1 tbsp")
ingred15=Ingredient.create(recipe_id: recipe1.id, name: "tuscan kale", calories: 113, amount:"8 ounces")
ingred16=Ingredient.create(recipe_id: recipe1.id, name: "garlic", calories: 0, amount:"1 clove")
ingred17=Ingredient.create(recipe_id: recipe1.id, name: "kosher salt", calories: 0, amount:"1/4 tsp")
ingred18=Ingredient.create(recipe_id: recipe1.id, name: "olive oil", calories: 357, amount:"3 tbsp")
ingred18=Ingredient.create(recipe_id: recipe1.id, name: "lemon", calories: 17, amount:"1")
ingred18=Ingredient.create(recipe_id: recipe1.id, name: "parmesan", calories: 110, amount:"1/4 cup")
ingred18=Ingredient.create(recipe_id: recipe1.id, name: "red pepper flakes", calories: 1, amount:"1/8 tsp")
ingred18=Ingredient.create(recipe_id: recipe1.id, name: "black pepper", calories: 7, amount:"1 tsp")
puts "finished with the ingredients finally the favs"
fav1=FavoriteRecipe.create(user_id: user2.id, recipe_id: recipe1.id)
fav1=FavoriteRecipe.create(user_id: user1.id, recipe_id: recipe2.id)
fav1=FavoriteRecipe.create(user_id: user1.id, recipe_id: recipe3.id)
puts "done seeding"
