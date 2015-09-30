/**
 * Projects by members, to be generated on the page
 * 
 * DATA:
 * title - (required) project title
 * subtitle - (required) category (app/chrome ext./website/hardware hack etc) or a short sentance summary
 * thumbnail - (required) url to thumbnail of project for the slider
 * mainImage - (required) url to fill size image for the viewer
 * link - (optional) link to the project itself if there is one
 * devpost - (optional) link to the project on devpost if it is there
 * createdAt: (required) location of development, like what hackathon + year etc.
 * memebers[]: (required) list of technole members involved in the project
 * descriptionQuote: (required) description of project in a paragraph
 * 
 */

// Define the data

module.exports = function() {
	var projects = [
		{
			title: 'Jot',
			subtitle: "Chrome Extension",
			thumbnail: undefined,
			mainImage: '/img/projects/jot.jpg',
			link: 'https://chrome.google.com/webstore/detail/jot/mnemjleajnmodijhnibpekloajfdjjja',
			devpost: undefined,
			createdAt: 'LyteHacks Fall \'14',
			members: [
				'Matt O\'Hagan'
			],
			descriptionQuote: "Quick note taking extension to replace the new tab page."
		},
		{
			title: 'FindMySlothz.me',
			subtitle: "Discover the nearest sloth to your location",
			thumbnail: undefined,
			mainImage: '/img/projects/fms.png',
			link: 'www.findmysothz.me',
			devpost: undefined,
			createdAt: 'HackGT Fall \'14',
			members: [
				'Bianca Idas',
				'Andree Dove'
			],
			descriptionQuote: "I was curious to find the nearest sloth in the area. I figured others could feel the same. Sloths are my favorite species and they became recently endangered by WWF. This is a base that could be evolved to do so much more. I'm interested in the idea that this could help us understand our wildlife better and keep people more educated in the subject of endangered species."
		},
		{
			title: 'SwagSwap',
			subtitle: "Where Hackathon Swag is Swapped.. fo' free!",
			thumbnail: undefined,
			mainImage: '/img/projects/ss.png',
			link: undefined,
			devpost: undefined,
			createdAt: 'HackGT Fall \'14',
			members: [
				'Matt O\'Hagan',
				'Rylan Caskey'
			],
			descriptionQuote: "After completing our first project together at MHacks IV, we both were itching to start another. We brainstormed ideas everyday leading up to HackGT and finally decided that we wanted to build an application to somehow make hackathons more awesomely awesome than they already are. A few days before we left for Atlanta, we agreed on the idea of building an online environment where fellow hackers can browse and swap hackathon swag (sponsor-provided shirts, stickers, etc.) locally at every individual hackathon. \nThrough our website, hackers can create an account to post, browse, and trade hackathon swag with other hackers at any specific hackathon event."
		},
		{
			title: 'HackGTGame',
			subtitle: "HackGT Sponsor Themed 2 Player Battle Arena Game.",
			thumbnail: undefined,
			mainImage: '/img/projects/gtgame.png',
			link: undefined,
			devpost: undefined,
			createdAt: 'HackGT Fall \'14',
			members: [
				'Jim Bach'
			],
			descriptionQuote: "One attending HackGT should know the significance of the content of this particular game. This game has no intention to be marketed as is but rather has been more for an appreciation of the opportunity to attend and learn, and something to enjoy with the people here, especially in B-Trium 1447. The game is a Local 2-Player battle arena game -- meaning the players are using the same keyboard! The players are the yellow hexagons from the HackGT logo. 99% of the objects are advertisement for the great companies that sponsored us. Shoot PinDrop or WhatCounts logos as bullets, grab powerups like Ionic or SendGrid, but especially watch out if your opponent gets the MailChimp! This game can be for anyone who likes games so grab a friend and play this HackGT themed 2-Player game and see who can reign champion!"
		}
	];

	// Process data
	// var i;
	projects.forEach(function(proj) {
		// Make member list
		var members = proj.members[0];
		proj.members.splice(0,1);
		proj.members.forEach(function(name) {
			members += ' & ' + name;
		});
		proj.members = members;
		
		if(!proj.thumbnail) {
			proj.thumbnail = proj.mainImage;
		}
		
	});
	
	return projects;
};