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
{ quote:"	Talking about art is like dancing about architecture.	", name:"	David Bowie	" },
{ quote:"	If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.	", name:"	Roald Dahl	" },
{ quote:"	I like the idea of collaboration…because it pushes you… It's a richer experience….	", name:"	Frank Gehry	" },
{ quote:"	Creativity is magical, not magic.	", name:"	Anonymous	" },
{ quote:"	The work you do while you procrastinate is probably the work you sould be doing for the rest of your life. 	", name:"	Jessica Hische	" },
{ quote:"	Find something you're passionate about and stay tremendously interested in it.	", name:"	Julia Child	" },
{ quote:"	Learn the rules like a pro, break them like an artist.	", name:"	Pablo Picasso	" },
{ quote:"	The secret to getting ahead is getting started.	", name:"	Anonymous	" },
{ quote:"	The creative adult is the child who survived.	", name:"	Ursula LeGuin	" },
{ quote:"	Please stop waiting for a map. We reward those who draw maps, not those who follow them. 	", name:"	Seth Godin	" },
{ quote:"	Life isn't about finding yourself. Life is about creating yourself.	", name:"	George Bernhard Shaw	" },
{ quote:"	The greatest inspiration is the deadline.	", name:"	Anonymous	" },
{ quote:"	Be so good they can't ignore you.	", name:"	Steve Martin	" },
{ quote:"	Whenever you leave behind failrure, you're doing good. If you think everything you've done is great, your're probably dumb.	", name:"	Louis C.K.	" },
{ quote:"	Work hard, be kind, and amazing things will happen.	", name:"	Conan O'Brien	" },
{ quote:"	Love what you do. Get good at it. Competence is a rare commodity in this day and age. 	", name:"	Jon Stewart	" },
{ quote:"	The most sophisticated people I know -- inside they are all children. 	", name:"	Jim Henson	" },
{ quote:"	Practice safe design: use a concept. 	", name:"	Unknown	" },
{ quote:"	Everthing is designed. Few things are designed well.	", name:"	Brian Reed	" },
{ quote:"	Good design is all about making other designers feel like idiots because that idea wasn't theirs. 	", name:"	Frank Chimero	" },
{ quote:"	Design is everything we make, but it's also between those things. It's a mix of craft, science, storytelling, propaganda, and philosophy.	", name:"	Erik Adigard	" },
{ quote:"	The desire to create is one of the deepest yearnings of the human soul.	", name:"	Dieter F. Uchtdorf	" },
{ quote:"	Genius is 1% inspiration, 99% perspiration.	", name:"	Thomas Edison	" },
{ quote:"	Design is so simple, that's why it is so complicated.	", name:"	Paul Rand	" },
{ quote:"	Logic wil get you from A to Z. Imagination will take you everywhere.	", name:"	Albert Einstein	" },
{ quote:"	Computers are to design as microwaves are to cooking.	", name:"	Milton Glaser	" },
{ quote:"	Good things come to those who wait, but the best things come to those who do.	", name:"	Unknown	" },
{ quote:"	The harder you work, the luckier you get.	", name:"	Unknown	" },
{ quote:"	Your future is created by what you do today not tomorrow. 	", name:"	Robert Reynolds	" },
{ quote:"	You're never given a dream without also being given the power to make it true.	", name:"	Richard Bach	" },
{ quote:"	Art is anything you can get away with.	", name:"	Andy Warhol	" },
{ quote:"	The best way to have a good idea is to have lots of ideas.	", name:"	Linus Pauling	" },
{ quote:"	The 'earth' without 'art' is just 'eh'.	", name:"	Unknown	" },
{ quote:"	To live a creative life, we must lose our fear of being wrong. 	", name:"	Josheph Chilton Pearce	" },
{ quote:"	It always seems impossible until it is done.	", name:"	Nelson Mandela	" },
{ quote:"	It's not what you look at that matters, it's what you see.	", name:"	Henry David Thoreau	" },
{ quote:"	Imagination is the beginning of creation.	", name:"	George Bernhard Shaw	" },
{ quote:"	Weird is a side-effect of awesome!	", name:"	Unknown	" },
{ quote:"	Do interesting things and interesting things will happen to you.	", name:"	Unknown	" },
{ quote:"	Success isn't just about what you accomplish in your life, it's about what you inspire others to do.	", name:"	Unknown	" },
{ quote:"	The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. 	", name:"	Steve Jobs	" },
{ quote:"	Don't be distracted by criticism. Remember, the only taste of success some people have is when they take a bite out of you.	", name:"	Zig Ziglar	" },
{ quote:"	Don't ask what the world needs. Ask what makes you come alive and go do it. What the world needs is people who have come alive.	", name:"	Howard Thurman	" },
{ quote:"	Success will never be a big step in the future; success is a small step taken just now.	", name:"	Unknown	" },
{ quote:"	Intelligence without ambition is a bird without wings.	", name:"	Salvadore Dali	" },
{ quote:"	Hard work beats talent when talent doesn't work hard.	", name:"	Anonymous	" },
{ quote:"	Design is more than a sassy typeface.	", name:"	Anonymous	" },
{ quote:"	Creativity is not a talent. It is a way of operating.	", name:"	John Cleese	" },
{ quote:"	Experience is one thing you can't get for nothing.	", name:"	Oscar Wilde	" },
{ quote:"	You were born an original. Don't die a copy.	", name:"	Luis Alfonso	" },
{ quote:"	Don't try to be original, just try to be good.	", name:"	Unknown	" },
{ quote:"	If you're not failing every now and again, it's a sign you're not doing anything very innovative.	", name:"	Woody Allen	" },
{ quote:"	Design is thinking made visual. 	", name:"	Saul Bass	" },
{ quote:"	Nothing is impossible, the word itself says i'm possible.	", name:"	Audrey Hepburn	" },
{ quote:"	Inspiration exists, but it has to find you working.	", name:"	Pablo Picasso	" }
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