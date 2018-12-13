$.get('https://api.allorigins.ml/get?method=raw&url=' + encodeURIComponent('http://www.espn.com/nba/schedule') + '&callback=?', function(data){

 let myData = $.parseHTML($.trim(data))
 let half = myData[176].children[3];
 let todaysGames = half.children[2].children[0].children[0].children[0].children[2].children[2].children[0].children[1].children; 

 let gamesArray = Array.from(todaysGames);
 let numOfGames = gamesArray.length;
 let uiGames = document.querySelector('#games')
 
 

   gamesArray.forEach(function(dis){
    
  let away = dis.children[0].children[1].children[1].getAttribute('title');
  let home = dis.children[1].children[0].children[1].children[1].getAttribute('title');
  console.log ();
    
  uiGames.innerHTML += `${away} at ${home} <br/><br/>`
    
    
 })
 
  
 
 


 
});