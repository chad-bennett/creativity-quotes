	$(document).ready(function(){
		var quoteSource=[
{ quote:"	Believe you can and you're halfway there.	", name:"	Theodore Roosevelt	" },
{ quote:"	Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.	", name:"	Francis of Assisi	" },
{ quote:"	It does not matter how slowly you go as long as you do not stop.	", name:"	Confucius	" },
{ quote:"	Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.	", name:"	Thomas A. Edison	" },
{ quote:"	A creative man is motivated by the desire to achieve, not by the desire to beat others.	", name:"	Ayn Rand	" },
{ quote:"	Start where you are. Use what you have. Do what you can.	", name:"	Arthur Ashe	" },
{ quote:"	Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.	", name:"	Samuel Beckett	" },
{ quote:"	Be yourself; everyone else is already taken.	", name:"	Oscar Wilde	" },
{ quote:"	Above all, innovation is work rather than genius. It requires knowledge, it often requires ingenuity, and it requires focus.	", name:"	Peter Drucker	" },
{ quote:"	Creativity is a mode, not an identity.	", name:"	Neil Stevenson	" },
{ quote:"	The future cannot be predicted, but futures can be invented.	", name:"	Dennis Gabor	" },
{ quote:"	The best time to plant a tree was 20 years ago. The second best time is now.	", name:"	Chinese Proverb	" },
{ quote:"	There is no I in team, but there are two I's in Innovation and two in Creativity. It's all about people, and how you motivate them to be creative.	", name:"	Yoram Solomon	" },
{ quote:"	None of us has really the ability to understand our path until it’s over.	", name:"	Milton Glaser	" },
{ quote:"	I dream my painting, and then I paint my dream.	", name:"	Vincent van Gogh	" },
{ quote:"	An artist is an explorer.	", name:"	Henri Matisse	" },
{ quote:"	If you are willing to do something that might not work, you’re closer to being an artist.	", name:"	Seth Godin	" },
{ quote:"	Art is the only way to run away without leaving home.	", name:"	Twyla Tharp	" },
{ quote:"	Art is the most intense mode of individualism that the world has known.	", name:"	Oscar Wilde	" },
{ quote:"	I would like to paint the way a bird sings.	", name:"	Claude Monet	" },
{ quote:"	A work of art which did not begin in emotion is not art.	", name:"	Paul Cezanne	" },
{ quote:"	One can speak poetry just by arranging colors well.	", name:"	Vincent van Gogh	" },
{ quote:"	Study the science of art. Study the art of science. Develop your senses – learn how to see. Realize that everything connects to everything else.	", name:"	Leonardo DaVinci	" },
{ quote:"	Art washes away from the soul the dust of everyday life.	", name:"	Pablo Picasso	" },
{ quote:"	You can’t use up creativity. The more you use, the more you have.	", name:"	Maya Angelou	" },
{ quote:"	Art is not what you see, but what you make others see.	", name:"	Edgar Degas	" },
{ quote:"	An artist can show things that other people are terrified of expressing.	", name:"	Louise Bourgeois	" },
{ quote:"	It’s not just about creativity, it is about the person you’re becoming while you’re creating.	", name:"	Charlie Peacock	" },
{ quote:"	Art enables us to find ourselves and lose ourselves at the same time.	", name:"	Thomas Merton	" },
{ quote:"	A work of art is the trace of a magnificent struggle.	", name:"	Robert Henri	" },
{ quote:"	Ask anyone doing truly creative work, and they’ll tell you the truth: They don’t know where the good stuff comes from. They just show up and do their thing. Every day.	", name:"	Austin Kleon	" },
{ quote:"	The creation of true art requires some mysterious innate ability to thrive in chaos.	", name:"	Sharon Hubbard	" },
{ quote:"	Art isn’t everything. It’s just about everything.	", name:"	Gertrude Stein	" },
{ quote:"	A line is a dot that went for a walk.	", name:"	Paul Klee	" },
{ quote:"	To practice any art, no matter how well or badly, is a way to make your soul grow. So do it.	", name:"	Kurt Vonnegut	" },
{ quote:"	It doesn’t matter how the paint is put on, as long as something is said.	", name:"	Jackson Pollock	" },
{ quote:"	Creativity is intelligence having fun.	", name:"	Albert Einstein	" },
{ quote:"	Talking about art is like dancing about architecture.	", name:"	David Bowie	" }
            //need this piece at the end of quote list. also, no comma on last item in list.
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready