// Example script for making Borealis webpages and adding homepage entries.
// Mod: KJS Borealis
onEvent('borealis.homepage', event => {
    let customHomePage = HomePageEntry(
        "Custom HomePage added by KubeJS Script", // Title
        "custom", // URI
        "https://media.forgecdn.net/avatars/thumbnails/341/801/64/64/637485008791691372.png" // Icon (Optional)
    );
    customHomePage.add(
        "Custom JSON Page",
        "custom.json",
        "https://i.imgur.com/OVxZy1w.png"
    )
    event.add(customHomePage); // adds your homepage entry to the borealis home page.
});
// This script 
// Mod: KJS Borealis
onEvent('borealis.page', event => {
    if(event.checkPath('custom','custom.json')){ // Check the request's path to see if the user is requesting custom/custom.json
        let customJsonPage = JSONWebPage()
        .json(
            {
                'Name': "Hi I'm a custom JSON sent from a KubeJS Server Script!",
                "Purpose" : "My purpose is to allow server/pack developers with the ability to export custom data from the minecraft server using KubeJS.",
                "Uses?" : "Some of my potential uses involve custom embeds in webpages or server usage statitistics."
            }
        );
        event.returnPage(customJsonPage);
    }else if(event.checkPath('custom')){ // Check the request's path to see if the user is requesting custom
        // Create a new HTML Page.
        let customPage = HTMLPage()
        
        .head( (head) => {
            // Style Documentation:
            // http://localhost:48574/kubejs_auto_docs/pie.ilikepiefoo2.borealis.tag.Style
            // Example: 
            let style = head.style().add("h1")
            style.set("color","red")
            
        }
        
        .body( (body) => {
            // Tag Documentation:
            // http://localhost:48574/kubejs_auto_docs/pie.ilikepiefoo2.borealis.tag.Tag
            body.h1("Welcome to my custom KubeJS page!");
            body.h3("I'm a nifty tool for server/pack developers that gives the ability to add custom homepages for their minecraft server.")
            
            let table = body.table()
            let row = table.tr()
            row.th().text("Use")
            row.th().text("Explanation")
            
            row = table.tr();
            row.td().text("Voting Links")
            row.td().text("Ever wanted a single place to put all of a server's voting links? Why not make a webpage for that?")
            .text(" It is reloadable with KubeJS scripts, meaning it can be updated without restarting the server.");
            
            row = table.tr();
            row.td().text("Whitelisted Server")
            let description = row.td().span("Are you a whitelisted server that has troubles centralizing your whitelisting information?")
            description.br()
            description.span("Why not integrate it directly into your server and just link users to your custom webpage?")
            description.br()
            description.span("The only caveat might be that the details page only exists while your server is online.");
            
            
            row = table.tr();
            row.td().a("Custom JSON Files","custom/custom.json")
            description = row.td().span("Is there some bit of minecraft data you wish you could display on your website? Or maybe could dump into a JSON?")
            description.br();
            description.span("Well you can generate the JSON in KubeJS and link it using a custom JSON Page.");
        })
        .title('KJS Custom Page') // Set the page's title.
        .addBackButton(true) // Add a back button.
        .icon('https://media.forgecdn.net/avatars/thumbnails/341/801/64/64/637485008791691372.png') // Set the page's icon.
        .description('A webpage made via KubeJS script') // Set the page's description.
        event.returnPage(customPage);
    }else if(event.checkPath('test')){
        let customPage = CustomWebPage();
        customPage.setGetContent( function(){
            return "Test";
        });
        
        event.returnPage(customPage);
    }
});