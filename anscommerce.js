var techTeamData= [
	{'img':'assets/Ankit.jpg','name':'Ankit Jain','designation':'Software Developer'},
	{'img':'assets/Nimish-Wadhwa.jpg','name':'Nimish Wadhwa','designation':'Software Engineer - Tech Team'},
	{'img':'assets/Raj-e1531897280901.jpg','name':'Raj Kamal Chaurasiya','designation':'Senior Software Engineer - Tech Team'},
	{'img':'assets/Akhilesh-sir.jpg','name':'Akhilesh Kumar','designation':'Senior Manager - UI'},
	{'img':'assets/Randhir.jpg','name':'Randhir Kumar','designation':'UI Designer'}
];
var marketingTeamData= [
	{'img':'assets/rajiv.jpg','name':'Rajiv Kumar','designation':'Marketing Associate'},
	{'img':'assets/Shambhavi.jpg','name':'Shambhavi Saumya','designation':'Marketing Associate'},
	{'img':'assets/Lakshay.jpg','name':'Lakshaya Gaur','designation':'Marketing Associate'},
	{'img':'assets/Aman.jpg','name':'Aman Garg','designation':'Marketing Associate'},
	{'img':'assets/Aditi.jpg','name':'Aditi Soni','designation':'Customer Experience Specialist'},
	{'img':'assets/Sakshi-Kumar.jpg','name':'Shakshi Kumar','designation':'Marketing Associate'},
	{'img':'assets/Parveen-Bajaj.jpg','name':'Praveen Bhalaj','designation':'Marketing Associate'},
	{'img':'assets/Rishika.jpg','name':'Rishika','designation':'Marketing Associate'},
	{'img':'assets/WhatsApp-Image-2018-03-07-at-4.37.49-AM.jpeg','name':'Vikas','designation':'Executive Marketing'},
	{'img':'assets/Vinayak.jpeg','name':'Vinayak','designation':'Executive Digital Marketing'},
	{'img':'assets/Praful.jpeg','name':'Praful','designation':'Graphic Designer'}
];

var client=[
	{'img':'assets/being-human.jpg'},
	{'img':'assets/ceat.jpg'},
	{'img':'assets/disrupt.jpg'},
	{'img':'assets/easies.jpg'},
	{'img':'assets/integriti.jpg'},
	{'img':'assets/killer.jpg'},
	{'img':'assets/lawman.jpg'},
	{'img':'assets/liberty.jpg'},
	{'img':'assets/sattviko-1.jpg'},
	{'img':'assets/soundbot.jpg'},
	{'img':'assets/sportdekho.jpg'},
	{'img':'assets/steelo-1.jpg'},
	{'img':'assets/thedecormart.jpg'},
	{'img':'assets/varanga.jpg'},
	{'img':'assets/yfm.jpg'}
	
];
function appendTeam(arr,index,arrName){
	var divToAppend = '<div id="'+arrName+'_'+index+'" class="tech_team_content active">'
					+'<img src="'+arr[index].img+'" />'
					+'<h3>'+arr[index].name+'</h3>'
					+'<h4>'+arr[index].designation+'</h4>'
					+'</div>';
	return divToAppend;
						
}

function addCarousal(arr){
var contentClient="";
$.each(arr,function(index,data){
		contentClient+='<img src='+data.img+' style="display:inline-bloack;width:70px;height:50px;margin:5px" />';
	});
	
	$('#clientContent').append(contentClient);
}
function addContentsOnLoad(teamName){

	if(teamName==="techTeamData"){
		var c=0;
		var i=0;
		while(c<3 && i<techTeamData.length){
			$('#tech_team').append(appendTeam(techTeamData,i,'techTeamData'));
			i++;
			c++;
		}
	}
	else if(teamName==="marketingTeamData"){
		var c=0;
		var i=0;
		while(c<3 && i<marketingTeamData.length){
			$('#marketing_team').append(appendTeam(marketingTeamData,i,'marketingTeamData'));
			i++;
			c++;
		}
	}
}

function hoverMenu(){
		if($(window).scrollTop()>0 && $(window).scrollTop()<540 ){
		
			$("ul.menu li a").css({"color":"#fff","border-bottom":"none"});
		}
		if($(window).scrollTop()>540 && $(window).scrollTop()<1140){
		
			$("#aboutLink").css({"color":"#1c75bf","border-bottom":"1px solid #1c75bf"});
			$("ul.menu li a:not('#aboutLink')").css({"color":"#fff","border-bottom":"none"});
		}
		if($(window).scrollTop()>1140 && $(window).scrollTop()<1936){
		
			$("#featuresLink").css({"color":"#1c75bf","border-bottom":"1px solid #1c75bf"});
			$("ul.menu li a:not('#featuresLink')").css({"color":"#fff","border-bottom":"none"});
		}
		if($(window).scrollTop()>1936 && $(window).scrollTop()<3519){
		
			$("a[href='#team']").css({"color":"#1c75bf","border-bottom":"1px solid #1c75bf"});
			$("ul.menu li a:not('#teamLink')").css({"color":"#fff","border-bottom":"none"});
		}
		if($(window).scrollTop()>3519 && $(window).scrollTop()<4237){
		
			$("#careersLink").css({"color":"#1c75bf","border-bottom":"1px solid #1c75bf"});
			$("ul.menu li a:not('#careersLink')").css({"color":"#fff","border-bottom":"none"});
		}
		if($(window).scrollTop()>4237 && $(window).scrollTop()<4591){
		
			$("#clientsLink").css({"color":"#1c75bf","border-bottom":"1px solid #1c75bf"});
			$("ul.menu li a:not('#clientsLink')").css({"color":"#fff","border-bottom":"none"});
		}
		if($(window).scrollTop()>4591 && $(window).scrollTop()<5319){
		
			$("#contactLink").css({"color":"#1c75bf","border-bottom":"1px solid #1c75bf"});
			$("ul.menu li a:not('#contactLink')").css({"color":"#fff","border-bottom":"none"});
		}
		
		
}
$(document).ready(function(){
	
	if($(window).scrollTop()>540){
			$('header').css('background','black');
			}
	hoverMenu();
	$(document).scroll(function(){
		if($(window).scrollTop()>540){
			$('header').css('background','black');
			$('#scrollTop').animate({'right':'20px'});
		}
		else{
			$('header').css('background','#00000000');
			$('#scrollTop').animate({'right':'-28px'});
		}
		
		hoverMenu();
	});
	
	$("#scrollTop").click(function(){
		$(window).scrollTop(10);
	});
	
	addContentsOnLoad("techTeamData");
	addContentsOnLoad("marketingTeamData");
	addCarousal(client);
	setInterval(function(){
		$(".next").click();
		$(".prevTeam").click();
	},10000);
	$(".next").click(function(){
		var activeImage = $("#slider").find("div.active");
		$(activeImage).removeClass("active");
		$(activeImage).addClass("hide");
		if($(activeImage).next().length){
			$(activeImage).next().removeClass("hide");
			$(activeImage).next().addClass("active");
		}
		else{
			$("#slider >:first").removeClass("hide");
			$("#slider >:first").addClass("active");
		}
	});
	$(".prev").click(function(){
		var activeImage = $("#slider").find("div.active");
		$(activeImage).removeClass("active");
		$(activeImage).addClass("hide");
		if($(activeImage).prev().length){
			$(activeImage).prev().removeClass("hide");
			$(activeImage).prev().addClass("active");
		}
		else{
			$("#slider >:last").removeClass("hide");
			$("#slider >:last").addClass("active");
		}
	});
	
	$(".prevTeam").click(function(){
		
		var activeImage = $(this).siblings("div.active");	
		$(this).siblings("div.active").remove();
		var id = activeImage[0].id;
		var info = id.split("_");
		if(info[0]==="techTeamData"){
			var length=techTeamData.length;
		}
		else if(info[0]==="marketingTeamData"){
			var length=marketingTeamData.length;
		}
		var count= 0;
		var i =Number(info[1])+1;
		while(count<3){
			if(i<length){
				if(info[0]=="techTeamData"){
				$('#tech_team').append(appendTeam(techTeamData,i,'techTeamData'));
				}
				else if(info[0]=="marketingTeamData"){
				$('#marketing_team').append(appendTeam(marketingTeamData,i,'marketingTeamData'));
				}
				i++;
				count++;
			}
			else{
			i=0;
			if(info[0]=="techTeamData"){
			$('#tech_team').append(appendTeam(techTeamData,i,'techTeamData'));
			}
			else if(info[0]=="marketingTeamData"){
				$('#marketing_team').append(appendTeam(marketingTeamData,i,'marketingTeamData'));
				}
			i++;
			count++;
			}
		}
	
		
	});
	$(".nextTeam").click(function(){
	
		var activeImage = $(this).siblings("div.active");	
		$(this).siblings("div.active").remove();
		var id = activeImage[0].id;
		
		var info = id.split("_");
		if(info[0]==="techTeamData"){
			var length=techTeamData.length;
		}
		else if(info[0]==="marketingTeamData"){
			var length=marketingTeamData.length;
		}
		var count= 0;
		var i =Number(info[1])-1;
		
		while(count<3){
			if(i>=0 && i<length){
				
				if(info[0]=="techTeamData"){
				$('#tech_team').append(appendTeam(techTeamData,i,'techTeamData'));
				}
				else if(info[0]=="marketingTeamData"){
				$('#marketing_team').append(appendTeam(marketingTeamData,i,'marketingTeamData'));
				}
				i++;
				count++;
			}
			else if(i<0){
				
				i=length-1;
				if(info[0]=="techTeamData"){
				
				$('#tech_team').append(appendTeam(techTeamData,i,'techTeamData'));
				}
				else if(info[0]=="marketingTeamData"){
					
					$('#marketing_team').append(appendTeam(marketingTeamData,i,'marketingTeamData'));
					}
				i++;
				count++;
			}else if(i>=length){
				
				i=0;
				if(info[0]=="techTeamData"){
				
				$('#tech_team').append(appendTeam(techTeamData,i,'techTeamData'));
				}
				else if(info[0]=="marketingTeamData"){
					
					$('#marketing_team').append(appendTeam(marketingTeamData,i,'marketingTeamData'));
					}
				i++;
				count++;
			}
		}
		//$(activeImage).first().addClass("hide");
	});
});