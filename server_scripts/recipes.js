// kubejs/data/server_scripts/recipes.js
// This is a compendium of various custom recipes from various mods.
// Supports /reload

// Enable recipe logging, off by default
server.logAddedRecipes = true
server.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {
    // Custom JSON Recipes for other mods:
    
    // ------------------------
    //      BOTANIA RECIPE:
    //        Terra Plate
    // ------------------------
    // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/terra_plate/terrasteel_ingot.json
    const terra_plate = (result, ingredients, mana) => {
        event.custom({
            "type": "botania:terra_plate",
            "mana": mana,
            "ingredients": Ingredient.of(ingredients).toJson(),
            "result": Item.of(result).toJson()
        });
    };
    
    // Example(s):
    terra_plate('minecraft:iron_ingot',['minecraft:dirt','minecraft:stone'], 10000);
    
    
    // ------------------------
    //      BOTANIA RECIPE:
    //        Runic Altar
    // ------------------------
    // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/runic_altar/autumn.json
    const runic_altar = (output, ingredients, mana) => {
        event.custom({
          "type": "botania:runic_altar",
          "output": Item.of(output).toJson(),
          "mana": mana,
          "ingredients": Ingredient.of(ingredients).toJson()
        });
    };
    
    // Example(s):
    runic_altar(Item.of('minecraft:iron_ingot').count(5),['minecraft:dirt','minecraft:stone'], 50000);
    
    
    // ------------------------
    //      BOTANIA RECIPE:
    //        Pure Daisy
    // ------------------------
    // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/pure_daisy/blue_ice.json
    const pure_daisy_block = (output, block_name) => {
        event.custom({
            "type": "botania:pure_daisy",
            "input": {
                "type": "block",
                "block": block_name
            },
            "output": {
                "name": output
            }
        });
    };
    // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/pure_daisy/cobblestone.json
    const pure_daisy_tag = (output, tag_name) => {
        event.custom({
            "type": "botania:pure_daisy",
            "input": {
                "type": "tag",
                "tag": tag_name
            },
            "output": {
                "name": output
            }
        });
    };
    
    // Example(s):
    pure_daisy_block('minecraft:dirt','minecraft:cobblestone');
    pure_daisy_tag('minecraft:dirt','forge:cobblestone');
    
    
    // ------------------------
    //      BOTANIA RECIPE:
    //     Petal Apothecary
    // ------------------------
    // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/petal_apothecary/hydroangeas.json
    const petal_apothecary = (output, ingredients) => {
        event.custom({
            "type": "botania:petal_apothecary",
            "output": Item.of(output).toJson(),
            "ingredients": Ingredient.of(ingredients).toJson()
        });
    };
    
    // Example(s):
    petal_apothecary('minecraft:dirt',['forge:cobblestone','forge:cobblestone','forge:cobblestone']);
    
    
    // ------------------------
    //      BOTANIA RECIPE:
    //       Mana Infusion
    // ------------------------
    // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/mana_infusion/grass_seeds.json
    const mana_infusion = (output, input, mana, catalyst, group) => {
        // Standard mana pool recipe.
        let tempRecipe = {
            "type": "botania:mana_infusion",
            "input": Item.of(input).toJson(),
            "output": Item.of(output).toJson(),
            "mana": mana
        };
        // Check if catalyst was specified.
        // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/mana_infusion/birch_leaves_dupe.json
        if(catalyst !== null && catalyst !== undefined ){
            tempRecipe["catalyst"] = {
                "name": catalyst
            }
        }
        // Check if group was provided.
        // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/mana_infusion/pink_tulip_to_oxeye_daisy.json
        if(catalyst !== null && catalyst !== undefined ){
            tempRecipe["group"] = {
                "name": catalyst
            };
        }
        event.custom(tempRecipe);
    };
    const conjuration_catalyst = (output, input, mana, group) => {
        mana_infusion(output, input, mana, 'botania:conjuration_catalyst', group)
    };
    const alchemy_catalyst = (output, input, mana, group) => {
        mana_infusion(output, input, mana, 'botania:alchemy_catalyst', group)
    };
    const mana_pool = (output, input, mana, group) => {
        mana_infusion(output, input, mana, null, group)
    };
    
    // Example(s):
    alchemy_catalyst(Item.of('minecraft:iron_ingot').count(2),'minecraft:cobblestone',4000);
    conjuration_catalyst(Item.of('minecraft:dirt').count(2),'minecraft:cobblestone',1000);
    mana_pool(Item.of('minecraft:iron_ingot').count(1),'minecraft:cobblestone',5000);
    
    // ------------------------
    //      BOTANIA RECIPE:
    //        Elven Trade
    // ------------------------
    // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/elven_trade/elementium_block.json
    const eleven_trade = (outputs, ingredients) => {
        let output = [];
        outputs.forEach( out =>{output.push(Item.of(output).toJson())});
        event.custom({
            "type": "botania:elven_trade",
            "ingredients": Ingredient.of(ingredients).toJson(),
            "output": output
        });
    };
    
    // Example(s):
    elven_trade(['minecraft:dirt'],['minecraft:cobblestone','minecraft:cobblestone']);
    
    // ------------------------
    //      BOTANIA RECIPE:
    //          Brew
    // ------------------------
    // Reference: https://github.com/Vazkii/Botania/blob/master/src/generated/resources/data/botania/recipes/brew/healing.json
    const botania_brew = (brew, ingredients) => {
        event.custom({
            "type": "botania:brew",
            "brew": brew,
            "ingredients": Ingredient.of(ingredients).toJson()
        });
    };
    
    // Example(s):
    botania_brew('botania:healing',['minecraft:cobblestone','minecraft:iron_ingot']);
    
    
});



