var removeSelf = "MajesticWaffle.github.io";


function BuildRepoList(){
	var largest = 0;
	
	var listDiv = document.getElementById("Repos");
	
	projLabel = document.createElement("p");
	projLabel.textContent = "Released projects:";
	listDiv.appendChild(projLabel);
	
	$.getJSON('https://api.github.com/users/MajesticWaffle/repos',{},function(data){
		
		data.forEach(v => {
			if(v.name == removeSelf)
				return;
			
			if(v.name.length > largest)
				largest = v.name.length
		})
		
		data.forEach(v => {
			if(v.name == removeSelf)
				return;
			
			var newLabel = v.name.replace(/-/g, " ");
			
			for(var i = 0; i < (largest - v.name.length) + 1; i++){
				newLabel += " ";
			}
			
			
			textLabel = document.createElement("p");
			textLabel.textContent = newLabel;
			
			pageLabel = document.createElement("a");
			pageLabel.textContent = "[Github Page]";
			pageLabel.href = v.html_url;
			pageLabel.target = "_blank";
			
			textLabel.appendChild(pageLabel);
			
			listDiv.appendChild(textLabel);
		})
	})
	
	githubLink = document.createElement("a");
	githubLink.href = "https://github.com/MajesticWaffle/";
	githubLink.textContent = "Github Profile";
	githubLink.target = "_blank";
	document.getElementById("Profile").appendChild(githubLink);
}	