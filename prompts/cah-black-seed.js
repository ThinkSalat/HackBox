const mongoose = require('mongoose');

const BlackCardSchema = new mongoose.Schema({
  prompt: String,
  numPrompts: Number,
  cardType: String
})

 const BlackCard = mongoose.model("Card", BlackCardSchema)

 mongoose.connect('mongodb://hackbox:hackbox2018@ds117701.mlab.com:17701/hackbox');
 mongoose.connection.once('open', function() {
  createBlackCards(blackCards)
 })

 createBlackCards = (arr) => {
  arr.forEach( card => {
    console.log(card.text);
    BlackCard.create({
      prompt: card.text,
      numPrompts: card.pick,
      cardType: "CAHBlackCard"
    })
  })
}

const blackCards = [
  {
  "text": "Why can't I sleep at night?",
  "pick": 1
  },
  {
  "text": "I got 99 problems but _ ain't one.",
  "pick": 1
  },
  {
  "text": "What's a girl's best friend?",
  "pick": 1
  },
  {
  "text": "What's that smell?",
  "pick": 1
  },
  {
  "text": "This is the way the world ends / This is the way the world ends / Not with a bang but with _.",
  "pick": 1
  },
  {
  "text": "What is Batman's guilty pleasure?",
  "pick": 1
  },
  {
  "text": "TSA guidelines now prohibit _ on airplanes.",
  "pick": 1
  },
  {
  "text": "What ended my last relationship?",
  "pick": 1
  },
  {
  "text": "MTV's new reality show features eight washed-up celebrities living with _.",
  "pick": 1
  },
  {
  "text": "I drink to forget _.",
  "pick": 1
  },
  {
  "text": "I'm sorry, Professor, but I couldn't complete my homework because of _.",
  "pick": 1
  },
  {
  "text": "Alternative medicine is now embracing the curative powers of _.",
  "pick": 1
  },
  {
  "text": "What's that sound?",
  "pick": 1
  },
  {
  "text": "What's the next Happy Meal&reg; toy?",
  "pick": 1
  },
  {
  "text": "It's a pity that kids these days are all getting involved with _.",
  "pick": 1
  },
  {
  "text": "In the new Disney Channel Original Movie, Hannah Montana struggles with _ for the first time.",
  "pick": 1
  },
  {
  "text": "_. That's how I want to die.",
  "pick": 1
  },
  {
  "text": "What does Dick Cheney prefer?",
  "pick": 1
  },
  {
  "text": "What's the most emo?",
  "pick": 1
  },
  {
  "text": "Instead of coal, Santa now gives the bad children _.",
  "pick": 1
  },
  {
  "text": "Next from J.K. Rowling: Harry Potter and the Chamber of _.",
  "pick": 1
  },
  {
  "text": "A romantic, candlelit dinner would be incomplete without _.",
  "pick": 1
  },
  {
  "text": "White people like _.",
  "pick": 1
  },
  {
  "text": "_. Betcha can't have just one!",
  "pick": 1
  },
  {
  "text": "War!<br><br>What is it good for?",
  "pick": 1
  },
  {
  "text": "BILLY MAYS HERE FOR _.",
  "pick": 1
  },
  {
  "text": "_. High five, bro.",
  "pick": 1
  },
  {
  "text": "During sex, I like to think about _.",
  "pick": 1
  },
  {
  "text": "What did I bring back from Mexico?",
  "pick": 1
  },
  {
  "text": "What are my parents hiding from me?",
  "pick": 1
  },
  {
  "text": "What will always get you laid?",
  "pick": 1
  },
  {
  "text": "What would grandma find disturbing, yet oddly charming?",
  "pick": 1
  },
  {
  "text": "What did the U.S. airdrop to the children of Afghanistan?",
  "pick": 1
  },
  {
  "text": "What helps Obama unwind?",
  "pick": 1
  },
  {
  "text": "What's there a ton of in heaven?",
  "pick": 1
  },
  {
  "text": "Major League Baseball has banned _ for giving players an unfair advantage.",
  "pick": 1
  },
  {
  "text": "When I am a billionaire, I shall erect a 50-foot statue to commemorate _.",
  "pick": 1
  },
  {
  "text": "What's the new fad diet?",
  "pick": 1
  },
  {
  "text": "When I am the President of the United States, I will create the Department of _.",
  "pick": 1
  },
  {
  "text": "_. It's a trap!",
  "pick": 1
  },
  {
  "text": "How am I maintaining my relationship status?",
  "pick": 1
  },
  {
  "text": "What will I bring back in time to convince people that I am a powerful wizard?",
  "pick": 1
  },
  {
  "text": "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _.",
  "pick": 1
  },
  {
  "text": "Coming to Broadway this season, _: The Musical.",
  "pick": 1
  },
  {
  "text": "What's my secret power?",
  "pick": 1
  },
  {
  "text": "What gives me uncontrollable gas?",
  "pick": 1
  },
  {
  "text": "But before I kill you, Mr. Bond, I must show you _.",
  "pick": 1
  },
  {
  "text": "What never fails to liven up the party?",
  "pick": 1
  },
  {
  "text": "What am I giving up for Lent?",
  "pick": 1
  },
  {
  "text": "What do old people smell like? ",
  "pick": 1
  },
  {
  "text": "The class field trip was completely ruined by _.",
  "pick": 1
  },
  {
  "text": "When Pharaoh remained unmoved, Moses called down a plague of _.",
  "pick": 1
  },
  {
  "text": "I do not know with which weapons World War III will be fought, but World War IV will be fought with _.",
  "pick": 1
  },
  {
  "text": "What's Teach for America using to inspire inner city students to succeed?",
  "pick": 1
  },
  {
  "text": "In Michael Jackson's final moments, he thought about _.",
  "pick": 1
  },
  {
  "text": "Why do I hurt all over?",
  "pick": 1
  },
  {
  "text": "Studies show that lab rats navigate mazes 50% faster after being exposed to _.",
  "pick": 1
  },
  {
  "text": "Why am I sticky?",
  "pick": 1
  },
  {
  "text": "What's my anti-drug?",
  "pick": 1
  },
  {
  "text": "And the Academy Award for _ goes to _.",
  "pick": 2
  },
  {
  "text": "For my next trick, I will pull _ out of _.",
  "pick": 2
  },
  {
  "text": "_: Good to the last drop.",
  "pick": 1
  },
  {
  "text": "What did Vin Diesel eat for dinner?",
  "pick": 1
  },
  {
  "text": "_: kid-tested, mother-approved.",
  "pick": 1
  },
  {
  "text": "What gets better with age?",
  "pick": 1
  },
  {
  "text": "I never truly understood _ until I encountered _.",
  "pick": 2
  },
  {
  "text": "Rumor has it that Vladimir Putin's favorite delicacy is _ stuffed with _.",
  "pick": 2
  },
  {
  "text": "Lifetime&reg; presents _, the story of _.",
  "pick": 2
  },
  {
  "text": "Make a haiku.",
  "pick": 3
  },
  {
  "text": "In M. Night Shyamalan's new movie, Bruce Willis discovers that _ had really been _ all along.",
  "pick": 2
  },
  {
  "text": "_ is a slippery slope that leads to _.",
  "pick": 2
  },
  {
  "text": "In a world ravaged by _, our only solace is _.",
  "pick": 2
  },
  {
  "text": "That's right, I killed _. How, you ask? _.",
  "pick": 2
  },
  {
  "text": "When I was tripping on acid, _ turned into _.",
  "pick": 2
  },
  {
  "text": "_ + _ = _.",
  "pick": 3
  },
  {
  "text": "What's the next superhero/sidekick duo?",
  "pick": 2
  },
  {
  "text": "Dear Abby,<br><br>I'm having some trouble with _ and would like your advice.",
  "pick": 1
  },
  {
  "text": "After the earthquake, Sean Penn brought _ to the people of Haiti.",
  "pick": 1
  },
  {
  "text": "In L.A. County Jail, word is you can trade 200 cigarettes for _.",
  "pick": 1
  },
  {
  "text": "Maybe she's born with it. Maybe it's _.",
  "pick": 1
  },
  {
  "text": "Life for American Indians was forever changed when the White Man introduced them to _.",
  "pick": 1
  },
  {
  "text": "Next on ESPN2, the World Series of _.",
  "pick": 1
  },
  {
  "text": "Step 1: _. Step 2: _. Step 3: Profit.",
  "pick": 2
  },
  {
  "text": "Here is the church<br>Here is the steeple<br>Open the doors<br>And there is _.",
  "pick": 1
  },
  {
  "text": "How did I lose my virginity?",
  "pick": 1
  },
  {
  "text": "During his childhood, Salvador Dal&iacute; produced hundreds of paintings of _.",
  "pick": 1
  },
  {
  "text": "In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?",
  "pick": 1
  },
  {
  "text": "What don't you want to find in your Kung Pao chicken?",
  "pick": 1
  },
  {
  "text": "The Smithsonian Museum of Natural History has just opened an exhibit on _.",
  "pick": 1
  },
  {
  "text": "Daddy, why is Mommy crying?",
  "pick": 1
  },
  {
  "text": "What brought the orgy to a grinding halt?",
  "pick": 1
  },
  {
  "text": "When I pooped, what came out of my butt?",
  "pick": 1
  },
  {
  "text": "In the distant future, historians will agree that _ marked the beginning of America's decline.",
  "pick": 1
  },
  {
  "text": "What's the gift that keeps on giving?",
  "pick": 1
  },
  {
  "text": "This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only _ and his wits.",
  "pick": 1
  },
  {
  "text": "Michael Bay's new three-hour action epic pits _ against _.",
  "pick": 2
  },
  {
  "text": "And I would have gotten away with it, too, if it hadn't been for _!",
  "pick": 1
  },
  {
  "text": "In a pinch, _ can be a suitable substitute for _.",
  "pick": 2
  },
  {
  "text": "What has been making life difficult at the nudist colony?",
  "pick": 1
  },
  {
  "text": "Science will never explain the origin of _.",
  "pick": 1
  },
  {
  "text": "In Rome, there are whisperings that the Vatican has a secret room devoted to _.",
  "pick": 1
  },
  {
  "text": "I learned the hard way that you can't cheer up a grieving friend with _.",
  "pick": 1
  },
  {
  "text": "When all else fails, I can always masturbate to _.",
  "pick": 1
  },
  {
  "text": "An international tribunal has found _ guilty of _.",
  "pick": 2
  },
  {
  "text": "In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated _.",
  "pick": 1
  },
  {
  "text": "In his new self-produced album, Kanye West raps over the sounds of _.",
  "pick": 1
  },
  {
  "text": "The socialist governments of Scandinavia have declared that access to _ is a basic human right.",
  "pick": 1
  },
  {
  "text": "He who controls _ controls the world.",
  "pick": 1
  },
  {
  "text": "Dear Sir or Madam, We regret to inform you that the Office of _ has denied your request for _.",
  "pick": 2
  },
  {
  "text": "The CIA now interrogates enemy agents by repeatedly subjecting them to _.",
  "pick": 1
  },
  {
  "text": "_ would be woefully incomplete without _.",
  "pick": 2
  },
  {
  "text": "During his midlife crisis, my dad got really into _.",
  "pick": 1
  },
  {
  "text": "Before I run for president, I must destroy all evidence of my involvement with _.",
  "pick": 1
  },
  {
  "text": "My new favorite porn star is Joey \"_\" McGee.",
  "pick": 1
  },
  {
  "text": "In his newest and most difficult stunt, David Blaine must escape from _.",
  "pick": 1
  },
  {
  "text": "This is your captain speaking. Fasten your seatbelts and prepare for _.",
  "pick": 1
  },
  {
  "text": "My mom freaked out when she looked at my browser history and found _.com/_.",
  "pick": 2
  },
  {
  "text": "The Five Stages of Grief: denial, anger, bargaining, _, acceptance.",
  "pick": 1
  },
  {
  "text": "Members of New York's social elite are paying thousands of dollars just to experience _.",
  "pick": 1
  },
  {
  "text": "I went from _ to _, all thanks to _.",
  "pick": 3
  },
  {
  "text": "Little Miss Muffet Sat on a tuffet, Eating her curds and _.",
  "pick": 1
  },
  {
  "text": "This month's Cosmo: \"Spice up your sex life by bringing _ into the bedroom.\"",
  "pick": 1
  },
  {
  "text": "If God didn't want us to enjoy _, he wouldn't have given us _.",
  "pick": 2
  },
  {
  "text": "My country, 'tis of thee, sweet land of _.",
  "pick": 1
  },
  {
  "text": "After months of debate, the Occupy Wall Street General Assembly could only agree on \"More _!\"",
  "pick": 1
  },
  {
  "text": "I spent my whole life working toward _, only to have it ruined by _.",
  "pick": 2
  },
  {
  "text": "Next time on Dr. Phil: How to talk to your child about _.",
  "pick": 1
  },
  {
  "text": "Only two things in life are certain: death and _.",
  "pick": 1
  },
  {
  "text": "Everyone down on the ground! We don't want to hurt anyone. We're just here for _.",
  "pick": 1
  },
  {
  "text": "The healing process began when I joined a support group for victims of _.",
  "pick": 1
  },
  {
  "text": "The votes are in, and the new high school mascot is _.",
  "pick": 1
  },
  {
  "text": "Charades was ruined for me forever when my mom had to act out _.",
  "pick": 1
  },
  {
  "text": "Before _, all we had was _.",
  "pick": 2
  },
  {
  "text": "Tonight on 20/20: What you don't know about _ could kill you.",
  "pick": 1
  },
  {
  "text": "You haven't truly lived until you've experienced _ and _ at the same time.",
  "pick": 2
  },
  {
  "text": "Hey baby, come back to my place and I'll show you _.",
  "pick": 1
  },
  {
  "text": "My gym teacher got fired for adding _ to the obstacle course.",
  "pick": 1
  },
  {
  "text": "Finally! A service that delivers _ right to your door.",
  "pick": 1
  },
  {
  "text": "To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of _.",
  "pick": 1
  },
  {
  "text": "My life is ruled by a vicious cycle of _ and _.",
  "pick": 2
  },
  {
  "text": "During high school, I never really fit in until I found _ club.",
  "pick": 1
  },
  {
  "text": "Money can't buy me love, but it can buy me _.",
  "pick": 1
  },
  {
  "text": "Listen, son. If you want to get involved with _, I won't stop you. Just steer clear of _.",
  "pick": 2
  },
  {
  "text": "A successful job interview begins with a firm handshake and ends with _.",
  "pick": 1
  },
  {
  "text": "Call the law offices of Goldstein &amp; Goldstein, because no one should have to tolerate _ in the workplace.",
  "pick": 1
  },
  {
  "text": "Lovin' you is easy 'cause you're _.",
  "pick": 1
  },
  {
  "text": "The blind date was going horribly until we discovered our shared interest in _.",
  "pick": 1
  },
  {
  "text": "What left this stain on my couch?",
  "pick": 1
  },
  {
  "text": "Turns out that _-Man was neither the hero we needed nor wanted.",
  "pick": 1
  },
  {
  "text": "After months of practice with _, I think I'm finally ready for _.",
  "pick": 2
  },
  {
  "text": "In the seventh circle of Hell, sinners must endure _ for all eternity.",
  "pick": 1
  },
  {
  "text": "As part of his daily regimen, Anderson Cooper sets aside 15 minutes for _.",
  "pick": 1
  },
  {
  "text": "When you get right down to it, _ is just _.",
  "pick": 2
  },
  {
  "text": "Having problems with _? Try _!",
  "pick": 2
  },
  {
  "text": "And what did <i>you</i> bring for show and tell?",
  "pick": 1
  },
  {
  "text": "I'm not like the rest of you. I'm too rich and busy for _.",
  "pick": 1
  },
  {
  "text": "With enough time and pressure, _ will turn into _.",
  "pick": 2
  },
  {
  "text": "_: Hours of fun. Easy to use. Perfect for _!",
  "pick": 2
  },
  {
  "text": "_. Awesome in theory, kind of a mess in practice.",
  "pick": 1
  },
  {
  "text": "As part of his contract, Prince won't perform without _ in his dressing room.",
  "pick": 1
  },
  {
  "text": "Man, this is bullshit. Fuck _.",
  "pick": 1
  },
  {
  "text": "Dear Leader Kim Jong-un,<br>our village praises your infinite wisdom with a humble offering of _.",
  "pick": 1
  },
  {
  "text": "_ may pass, but _ will last forever.",
  "pick": 2
  },
  {
  "text": "She's up all night for good fun.<br>I'm up all night for _.",
  "pick": 1
  },
  {
  "text": "Alright, bros. Our frat house is condemned, and all the hot slampieces are over at Gamma Phi. The time has come to commence Operation _.",
  "pick": 1
  },
  {
  "text": "The Japanese have developed a smaller, more efficient version of _.",
  "pick": 1
  },
  {
  "text": "In return for my soul, the Devil promised me _, but all I got was _.",
  "pick": 2
  },
  {
  "text": "You guys, I saw this crazy movie last night. It opens on _, and then there's some stuff about _, and then it ends with _.",
  "pick": 3
  },
  {
  "text": "_ will never be the same after _.",
  "pick": 2
  },
  {
  "text": "Wes Anderson's new film tells the story of a precocious child coming to terms with _.",
  "pick": 1
  },
  {
  "text": "In the beginning, there was _.<br>And the Lord said, \"Let there be _.\"",
  "pick": 2
  },
  {
  "text": "What's fun until it gets weird?",
  "pick": 1
  },
  {
  "text": "We never did find _, but along the way we sure learned a lot about _.",
  "pick": 2
  },
  {
  "text": "You've seen the bearded lady!<br>You've seen the ring of fire!<br>Now, ladies and gentlemen, feast your eyes upon _!",
  "pick": 1
  },
  {
  "text": "How am I compensating for my tiny penis?",
  "pick": 1
  },
  {
  "text": "I'm sorry, sir, but we don't allow _ at the country club.",
  "pick": 1
  },
  {
  "text": "2 AM in the city that never sleeps. The door swings open and <i>she</i> walks in, legs up to here. Something in her eyes tells me she's looking for _.",
  "pick": 1
  },
  {
  "text": "As king, how will I keep the peasants in line?",
  "pick": 1
  },
  {
  "text": "Oprah's book of the month is \"_ For _: A Story of Hope.\"",
  "pick": 2
  },
  {
  "text": "Do <i>not</i> fuck with me! I am literally _ right now.",
  "pick": 1
  },
  {
  "text": "Adventure.<br>Romance.<br>_.<br><br>From Paramount Pictures, \"_.\"",
  "pick": 2
  },
  {
  "text": "I am become _, destroyer of _!",
  "pick": 2
  },
  {
  "text": "It lurks in the night. It hungers for flesh. This summer, no one is safe from _.",
  "pick": 1
  },
  {
  "text": "If you can't handle _, you'd better stay away from _.",
  "pick": 2
  },
  {
  "text": "This is the prime of my life. I'm young, hot, and full of _.",
  "pick": 1
  },
  {
  "text": "I'm pretty sure I'm high right now, because I'm absolutely mesmerized by _.",
  "pick": 1
  },
  {
  "text": "This year's hottest album is \"_\" by _.",
  "pick": 2
  },
  {
  "text": "Every step towards _ gets me a little closer to _.",
  "pick": 2
  },
  {
  "text": "Forget everything you know about _, because now we've supercharged it with _!",
  "pick": 2
  },
  {
  "text": "Honey, I have a new role-play I want to try tonight! You can be _, and I'll be _.",
  "pick": 2
  },
  {
  "text": "Do the Dew &reg; with our most extreme flavor yet! Get ready for Mountain Dew _!",
  "pick": 1
  },
  {
  "text": "Armani suit: $1,000. Dinner for two at that swanky restaurant: $300. The look on her face when you surprise her with _: priceless.",
  "pick": 1
  },
  {
  "text": "In his new action comedy, Jackie Chan must fend off ninjas while also dealing with _.",
  "pick": 1
  },
  {
  "text": "Well what do you have to say for yourself, Casey? This is the third time you've been sent to the principal's office for _.",
  "pick": 1
  },
  {
  "text": "Here at the Academy for Gifted Children, we allow students to explore _ at their own pace.",
  "pick": 1
  },
  {
  "text": "Heed my voice, mortals! I am the god of _, and I will not tolerate _!",
  "pick": 2
  },
  {
  "text": "I don't mean to brag, but they call me the Michael Jordan of _.",
  "pick": 1
  },
  {
  "text": "Why am I broke?",
  "pick": 1
  },
  {
  "text": "Help me doctor, I've got _ in my butt!",
  "pick": 1
  },
  {
  "text": "Hi MTV! My name is Kendra, I live in Malibu, I'm into _, and I love to have a good time.",
  "pick": 1
  },
  {
  "text": "Patient presents with _. Likely a result of _.",
  "pick": 2
  },
  {
  "text": "Life's pretty tough in the fast lane. That's why I never leave the house without _.",
  "pick": 1
  },
  {
  "text": "What's making things awkward in the sauna?",
  "pick": 1
  },
  {
  "text": "Get ready for the movie of the summer! One cop plays by the book. The other's only interested in one thing: _.",
  "pick": 1
  },
  {
  "text": "Having the worst day EVER. #_",
  "pick": 1
  },
  {
  "text": "In his farewell address, George Washington famously warned Americans about the dangers of _.",
  "pick": 1
  },
  {
  "text": "Don't forget! Beginning this week, Casual Friday will officially become \"_ Friday.\"",
  "pick": 1
  },
  {
  "text": "What killed my boner?",
  "pick": 1
  },
  {
  "text": "Yo' mama so fat she _!",
  "pick": 1
  },
  {
  "text": "Well if _ is good enough for _, it's good enough for me.",
  "pick": 2
  },
  {
  "text": "Hi, this is Jim from accounting. We noticed a $1,200 charge labeled \"_\". Can you explain?",
  "pick": 1
  },
  {
  "text": "Do you lack energy? Does it sometimes feel like the whole world is _? Zoloft.&reg;",
  "pick": 1
  },
  {
  "text": "WHOOO! God damn I love _!",
  "pick": 1
  },
  {
  "text": "Now in bookstores: \"The Audacity of _\", by Barack Obama.",
  "pick": 1
  },
  {
  "text": "And today's soup is Cream of _.",
  "pick": 1
  },
  {
  "pick": 1,
  "text": "I work my ass off all day for this family, and this is what I come home to? _!?"
  },
  {
  "pick": 1,
  "text": "I have a strict policy. First date, dinner. Second date, kiss. Third date, _."
  },
  {
  "pick": 1,
  "text": "When I was a kid, we used to play Cowboys and _."
  },
  {
  "pick": 1,
  "text": "This is America. If you don't work hard, you don't succeed. I don't care if you're black, white, purple, or _."
  },
  {
  "pick": 1,
  "text": "You Won't Believe These 15 Hilarious _ Bloopers!"
  },
  {
  "pick": 1,
  "text": "James is a lonely boy. But when he discovers a secret door in his attic, he meets a magical new friend: _."
  },
  {
  "pick": 1,
  "text": "Don't worry kid. It gets better. I've been living with _ for 20 years."
  },
  {
  "pick": 1,
  "text": "My grandfather worked his way up from nothing. When he came to this country, all he had was the shoes on his feet and _."
  },
  {
  "pick": 1,
  "text": "Behind every powerful man is _."
  },
  {
  "pick": 1,
  "text": "You are not alone. Millions of Americans struggle with _ every day."
  },
  {
  "pick": 1,
  "text": "Come to Dubai, where you can relax in our world famous spas, experience the nightlife, or simply enjoy _ by the poolside."
  },
  {
  "pick": 1,
  "text": "\"This is madness.\" \"No, THIS IS _!\""
  },
  {
  "pick": 1,
  "text": "Listen Gary, I like you. But if you want that corner office, you're going to have to show me _."
  },
  {
  "pick": 1,
  "text": "I went to the desert and ate of the peyote cactus. Turns out my spirit animal is _."
  },
  {
  "pick": 1,
  "text": "And would you like those buffalo wings mild, hot, or _?"
  },
  {
  "pick": 1,
  "text": "The six things I could never do without: oxygen, Facebook, chocolate, Netflix, friends, and _ LOL!"
  },
  {
  "pick": 1,
  "text": "Why won't you make love to me anymore? Is it _?"
  },
  {
  "pick": 1,
  "text": "Puberty is a time of change. You might notice hair growing in new places. You might develop an interest in _. This is normal."
  },
  {
  "pick": 1,
  "text": "I'm sorry, Mrs. Chen, but there was nothing we could do. At 4:15 this morning, your son succumbed to _."
  },
  {
  "pick": 1,
  "text": "I'm Miss Tennessee, and if I could make the world better by changing one thing, I would get rid of _."
  },
  {
  "pick": 1,
  "text": "Tonight we will have sex. And afterwards, If you'd like, a little bit of _."
  },
  {
  "pick": 1,
  "text": "Everybody join hands and close your eyes. Do you sense that? That's the presence of _ in this room."
  },
  {
  "pick": 1,
  "text": "To become a true Yanomamo warrior, you must prove that you can withstand _ without crying out."
  },
  {
  "pick": 1,
  "text": "Y'all ready to get this thing started? I'm Nick Cannon, and this is America's Got _."
  },
  {
  "pick": 1,
  "text": "If you had to describe the Card Czar, using only one of the cards in your hand, which one would it be?"
  },
  {
  "pick": 2,
  "text": "_ be all like _."
  },
  {
  "pick": 1,
  "text": "Art isn't just a painting in a stuffy museum. Art is alive. Art is _."
  },
  {
  "pick": 1,
  "text": "As reparations for slavery, all African Americans will receive _."
  },
  {
  "pick": 1,
  "text": "As Teddy Roosevelt said, the four manly virtues are honor, temperance, industry, and _."
  },
  {
  "pick": 1,
  "text": "Best you go back where you came from, now. We don't take too kindly to _ in these parts."
  },
  {
  "pick": 1,
  "text": "CNN breaking news! Scientists discover _."
  },
  {
  "pick": 1,
  "text": "Coming to Red Lobster&reg; this month, _."
  },
  {
  "pick": 1,
  "text": "Congratulations! You have been selected for our summer internship program. While we are unable to offer a salary, we can offer you _."
  },
  {
  "pick": 1,
  "text": "Dance like there's nobody watching, love like you'll never be hurt, and live like you're _."
  },
  {
  "pick": 1,
  "text": "Errbody in the club _."
  },
  {
  "pick": 1,
  "text": "Feeling so grateful! #amazing #mylife #_."
  },
  {
  "pick": 1,
  "text": "Girls just wanna have _."
  },
  {
  "pick": 1,
  "text": "Google Calendar alert: _ in 10 minutes."
  },
  {
  "pick": 1,
  "text": "I don't believe in God. I believe in _."
  },
  {
  "pick": 1,
  "text": "I got rhythm, I've got music, I've got _. Who could ask for anything more?"
  },
  {
  "pick": 1,
  "text": "I may not be much to look at, but I fuck like _."
  },
  {
  "pick": 1,
  "text": "I tell you, it was a non-stop fuckfest. When it was over, my asshole looked like _."
  },
  {
  "pick": 1,
  "text": "I'll take the BBQ bacon burger with friend egg and fuck it how about _."
  },
  {
  "pick": 1,
  "text": "I'm sorry, sir, but your insurance plan doesn't cover injuries caused by _."
  },
  {
  "pick": 1,
  "text": "I've had a horrible vision, father. I saw mountains crumbling, stars falling from the sky. I saw _."
  },
  {
  "pick": 1,
  "text": "If at first you don't succeed, try _."
  },
  {
  "pick": 1,
  "text": "In the 1950s, psychologists prescribed _ as a cure for homosexually."
  },
  {
  "pick": 1,
  "text": "LSD + _ = really bad time."
  },
  {
  "pick": 1,
  "text": "\"Mom's to-do list:<br/>- Buy Groceries.<br/>- Clean up _.<br/>- Soccer Practice.\""
  },
  {
  "pick": 1,
  "text": "Most Americans would not vote for a candidate who is openly _."
  },
  {
  "pick": 1,
  "text": "No, no, no, no, no, no, NO! I will NOT let _ ruin this wedding."
  },
  {
  "pick": 1,
  "text": "Oh no! Siri, how do I fix _?"
  },
  {
  "pick": 1,
  "text": "One more thing. Watch out for Big Mike. They say he killed a man with _."
  },
  {
  "pick": 1,
  "text": "Ooo, daddy like _."
  },
  {
  "pick": 1,
  "text": "Poor Brandon, still living in his parent's basement. I heard he never got over _."
  },
  {
  "pick": 1,
  "text": "Run, run, as fast as you can! You can't catch me, I'm _!"
  },
  {
  "pick": 1,
  "text": "She's a lady in the streets, _ in the sheets."
  },
  {
  "pick": 1,
  "text": "She's just one of the guys, you know? She likes beer, and football, and _."
  },
  {
  "pick": 1,
  "text": "Son, take it from someone who's been around the block a few times. Nothin' puts her in the mood like _."
  },
  {
  "pick": 1,
  "text": "Summer lovin', had me a blast. _, happened so fast."
  },
  {
  "pick": 1,
  "text": "\"The top Google auto-complete results for \"Barack Obama\":</br>- Barack Obama Height.</br>- Barack Obama net worth.</br>- Barack Obama _.\""
  },
  {
  "pick": 1,
  "text": "Then the princess kissed the frog, and all of a sudden the frog was _!"
  },
  {
  "pick": 1,
  "text": "There is no God. It's just _ and then you die."
  },
  {
  "pick": 1,
  "text": "This Friday at the Liquid Lunge, it's _ Night! Ladies drink free."
  },
  {
  "pick": 1,
  "text": "We do not shake with our left hands in this country. That is the hand we use for _."
  },
  {
  "pick": 1,
  "text": "Well if _ is a crime, then lock me up!"
  },
  {
  "pick": 1,
  "text": "Well, shit. My eyes ain't so good, but I'll eat my own boot if that ain't _!"
  },
  {
  "pick": 1,
  "text": "What are all those whales singing about?"
  },
  {
  "pick": 1,
  "text": "What sucks balls?"
  },
  {
  "pick": 1,
  "text": "What totally destroyed my asshole?"
  },
  {
  "pick": 1,
  "text": "What turned me into a Republican?"
  },
  {
  "pick": 1,
  "text": "What will end racism once and for all?"
  },
  {
  "pick": 1,
  "text": "What's a total waste of Hillary Clinton's time?"
  },
  {
  "pick": 1,
  "text": "What's about to take dance floor to the next level?"
  },
  {
  "pick": 1,
  "text": "What's the gayest?"
  },
  {
  "pick": 1,
  "text": "What's the most problematic?"
  },
  {
  "pick": 1,
  "text": "Why am I laughing and crying and taking off my clothes?"
  },
  {
  "pick": 1,
  "text": "With a one-time gift of just $10, you can save this child from _."
  },
  {
  "pick": 1,
  "text": "You know who else liked _? Hitler."
  },
  {
  "pick": 1,
  "text": "You won't believe what's in my pussy. It's _."
  }
  ]