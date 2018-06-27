const whiteCards = [
  "Coat hanger abortions.",
  "Man meat.",
  "Autocannibalism.",
  "Vigorous jazz hands.",
  "Flightless birds.",
  "Pictures of boobs.",
  "Doing the right thing.",
  "The violation of our most basic human rights.",
  "Viagra&reg;.",
  "Self-loathing.",
  "Spectacular abs.",
  "A balanced breakfast.",
  "Roofies.",
  "Concealing a boner.",
  "Amputees.",
  "The Big Bang.",
  "Former President George W. Bush.",
  "The Rev. Dr. Martin Luther King, Jr.",
  "Smegma.",
  "Being marginalized.",
  "Cuddling.",
  "Laying an egg.",
  "The Pope.",
  "Aaron Burr.",
  "Genital piercings.",
  "Fingering.",
  "A bleached asshole.",
  "Horse meat.",
  "Fear itself.",
  "Science.",
  "Elderly Japanese men.",
  "Stranger danger.",
  "The terrorists.",
  "Praying the gay away.",
  "Same-sex ice dancing.",
  "Ethnic cleansing.",
  "Cheating in the Special Olympics.",
  "German dungeon porn.",
  "Bingeing and purging.",
  "Making a pouty face.",
  "William Shatner.",
  "Heteronormativity.",
  "Nickelback.",
  "Tom Cruise.",
  "The profoundly handicapped.",
  "The placenta.",
  "Chainsaws for hands.",
  "Arnold Schwarzenegger.",
  "An icepick lobotomy.",
  "Goblins.",
  "Object permanence.",
  "Dying.",
  "Foreskin.",
  "A falcon with a cap on its head.",
  "Hormone injections.",
  "Dying of dysentery.",
  "Sexy pillow fights.",
  "The invisible hand.",
  "A really cool hat.",
  "Sean Penn.",
  "Heartwarming orphans.",
  "The clitoris.",
  "The Three-Fifths compromise.",
  "A sad handjob.",
  "Men.",
  "Historically black colleges.",
  "A micropenis.",
  "Raptor attacks.",
  "Agriculture.",
  "Vikings.",
  "Pretending to care.",
  "The Underground Railroad.",
  "My humps.",
  "Being a dick to children.",
  "Geese.",
  "Bling.",
  "Sniffing glue.",
  "The South.",
  "An Oedipus complex.",
  "Eating all of the cookies before the AIDS bake-sale.",
  "Sexting.",
  "YOU MUST CONSTRUCT ADDITIONAL PYLONS.",
  "Mutually-assured destruction.",
  "Sunshine and rainbows.",
  "Count Chocula.",
  "Sharing needles.",
  "Being rich.",
  "Skeletor.",
  "A sausage festival.",
  "Michael Jackson.",
  "Emotions.",
  "Farting and walking away.",
  "The Chinese gymnastics team.",
  "Necrophilia.",
  "Spontaneous human combustion.",
  "Yeast.",
  "Leaving an awkward voicemail.",
  "Dick Cheney.",
  "White people.",
  "Penis envy.",
  "Teaching a robot to love.",
  "Sperm whales.",
  "Scrubbing under the folds.",
  "Panda sex.",
  "Whipping it out.",
  "Catapults.",
  "Masturbation.",
  "Natural selection.",
  "Opposable thumbs.",
  "A sassy black woman.",
  "AIDS.",
  "The KKK.",
  "Figgy pudding.",
  "Seppuku.",
  "Gandhi.",
  "Preteens.",
  "Toni Morrison's vagina.",
  "Five-Dollar Footlongs&trade;.",
  "Land mines.",
  "A sea of troubles.",
  "A zesty breakfast burrito.",
  "Christopher Walken.",
  "Friction.",
  "Balls.",
  "Dental dams.",
  "A can of whoop-ass.",
  "A tiny horse.",
  "Waiting 'til marriage.",
  "Authentic Mexican cuisine.",
  "Genghis Khan.",
  "Old-people smell.",
  "Feeding Rosie O'Donnell.",
  "Pixelated bukkake.",
  "Friends with benefits.",
  "The token minority.",
  "The Tempur-Pedic&reg; Swedish Sleep System&trade;.",
  "A thermonuclear detonation.",
  "Take-backsies.",
  "The Rapture.",
  "A cooler full of organs.",
  "Sweet, sweet vengeance.",
  "RoboCop.",
  "Keanu Reeves.",
  "Drinking alone.",
  "Giving 110%.",
  "Flesh-eating bacteria.",
  "The American Dream.",
  "Taking off your shirt.",
  "Me time.",
  "A murder most foul.",
  "The inevitable heat death of the universe.",
  "The folly of man.",
  "That thing that electrocutes your abs.",
  "Cards Against Humanity.",
  "Fiery poops.",
  "Poor people.",
  "Edible underpants.",
  "Britney Spears at 55.",
  "All-you-can-eat shrimp for $4.99.",
  "Pooping back and forth. Forever.",
  "Fancy Feast&reg;.",
  "Jewish fraternities.",
  "Being a motherfucking sorcerer.",
  "Pulling out.",
  "Picking up girls at the abortion clinic.",
  "The homosexual agenda.",
  "The Holy Bible.",
  "Passive-agression.",
  "Ronald Reagan.",
  "Vehicular manslaughter.",
  "Nipple blades.",
  "Assless chaps.",
  "Full frontal nudity.",
  "Hulk Hogan.",
  "Daddy issues.",
  "The hardworking Mexican.",
  "Natalie Portman.",
  "Waking up half-naked in a Denny's parking lot.",
  "God.",
  "Sean Connery.",
  "Saxophone solos.",
  "Gloryholes.",
  "The World of Warcraft.",
  "Homeless people.",
  "Scalping.",
  "Darth Vader.",
  "Eating the last known bison.",
  "Guys who don't call.",
  "Hot Pockets&reg;.",
  "A time travel paradox.",
  "The milk man.",
  "Testicular torsion.",
  "Dropping a chandelier on your enemies and riding the rope up.",
  "World peace.",
  "A salty surprise.",
  "Poorly-timed Holocaust jokes.",
  "Smallpox blankets.",
  "Licking things to claim them as your own.",
  "The heart of a child.",
  "Robert Downey, Jr.",
  "Lockjaw.",
  "Eugenics.",
  "A good sniff.",
  "Friendly fire.",
  "The taint; the grundle; the fleshy fun-bridge.",
  "Wearing underwear inside-out to avoid doing laundry.",
  "Hurricane Katrina.",
  "Free samples.",
  "Jerking off into a pool of children's tears.",
  "A foul mouth.",
  "The glass ceiling.",
  "Republicans.",
  "Explosions.",
  "Michelle Obama's arms.",
  "Getting really high.",
  "Attitude.",
  "Sarah Palin.",
  "The &Uuml;bermensch.",
  "Altar boys.",
  "My soul.",
  "My sex life.",
  "Pedophiles.",
  "72 virgins.",
  "Pabst Blue Ribbon.",
  "Domino's&trade; Oreo&trade; Dessert Pizza.",
  "A snapping turtle biting the tip of your penis.",
  "The Blood of Christ.",
  "Half-assed foreplay.",
  "My collection of high-tech sex toys.",
  "A middle-aged man on roller skates.",
  "Bitches.",
  "Bill Nye the Science Guy.",
  "Italians.",
  "A windmill full of corpses.",
  "Adderall&trade;.",
  "Crippling debt.",
  "A stray pube.",
  "Prancing.",
  "Passing a kidney stone.",
  "A brain tumor.",
  "Leprosy.",
  "Puppies!",
  "Bees?",
  "Frolicking.",
  "Repression.",
  "Road head.",
  "A bag of magic beans.",
  "An asymmetric boob job.",
  "Dead parents.",
  "Public ridicule.",
  "A mating display.",
  "A mime having a stroke.",
  "Stephen Hawking talking dirty.",
  "African children.",
  "Mouth herpes.",
  "Overcompensation.",
  "Riding off into the sunset.",
  "Being on fire.",
  "Tangled Slinkys.",
  "Civilian casualties.",
  "Auschwitz.",
  "My genitals.",
  "Not reciprocating oral sex.",
  "Lactation.",
  "Being fabulous.",
  "Shaquille O'Neal's acting career.",
  "My relationship status.",
  "Asians who aren't good at math.",
  "Alcoholism.",
  "Incest.",
  "Grave robbing.",
  "Hope.",
  "8 oz. of sweet Mexican black-tar heroin.",
  "Kids with ass cancer.",
  "Winking at old people.",
  "The Jews.",
  "Justin Bieber.",
  "Doin' it in the butt.",
  "A lifetime of sadness.",
  "The Hamburglar.",
  "Swooping.",
  "Classist undertones.",
  "New Age music.",
  "Not giving a shit about the Third World.",
  "The Kool-Aid Man.",
  "A hot mess.",
  "Tentacle porn.",
  "Lumberjack fantasies.",
  "The gays.",
  "Scientology.",
  "Estrogen.",
  "GoGurt&reg;.",
  "Judge Judy.",
  "Dick fingers.",
  "Racism.",
  "Surprise sex!",
  "Police brutality.",
  "Passable transvestites.",
  "The Virginia Tech Massacre.",
  "When you fart and a little bit comes out.",
  "Oompa-Loompas.",
  "A fetus.",
  "Obesity.",
  "Tasteful sideboob.",
  "Hot people.",
  "BATMAN!!!",
  "Black people.",
  "A gassy antelope.",
  "Sexual tension.",
  "Third base.",
  "Racially-biased SAT questions.",
  "Porn stars.",
  "A Super Soaker&trade; full of cat pee.",
  "Muhammed (Praise Be Unto Him).",
  "Puberty.",
  "A disappointing birthday party.",
  "An erection that lasts longer than four hours.",
  "White privilege.",
  "Getting so angry that you pop a boner.",
  "Wifely duties.",
  "Two midgets shitting into a bucket.",
  "Queefing.",
  "Wiping her butt.",
  "Golden showers.",
  "Barack Obama.",
  "Nazis.",
  "A robust mongoloid.",
  "An M. Night Shyamalan plot twist.",
  "Getting drunk on mouthwash.",
  "Lunchables&trade;.",
  "Women in yogurt commercials.",
  "John Wilkes Booth.",
  "Powerful thighs.",
  "Mr. Clean, right behind you.",
  "Multiple stab wounds.",
  "Cybernetic enhancements.",
  "Serfdom.",
  "Kanye West.",
  "Women's suffrage.",
  "Children on leashes.",
  "Harry Potter erotica.",
  "The Dance of the Sugar Plum Fairy.",
  "Lance Armstrong's missing testicle.",
  "Parting the Red Sea.",
  "The Amish.",
  "Dead babies.",
  "Child beauty pageants.",
  "AXE Body Spray.",
  "Centaurs.",
  "Copping a feel.",
  "Grandma.",
  "Famine.",
  "The Trail of Tears.",
  "The miracle of childbirth.",
  "Finger painting.",
  "A monkey smoking a cigar.",
  "The Make-A-Wish&reg; Foundation.",
  "Anal beads.",
  "The Force.",
  "Kamikaze pilots.",
  "Dry heaving.",
  "Active listening.",
  "Ghosts.",
  "The Hustle.",
  "Peeing a little bit.",
  "Another goddamn vampire movie.",
  "Shapeshifters.",
  "The Care Bear Stare.",
  "Hot cheese.",
  "A mopey zoo lion.",
  "A defective condom.",
  "Teenage pregnancy.",
  "A Bop It&trade;.",
  "Expecting a burp and vomiting on the floor.",
  "Horrifying laser hair removal accidents.",
  "Boogers.",
  "Unfathomable stupidity.",
  "Breaking out into song and dance.",
  "Soup that is too hot.",
  "Morgan Freeman's voice.",
  "Getting naked and watching Nickelodeon.",
  "MechaHitler.",
  "Flying sex snakes.",
  "The true meaning of Christmas.",
  "My inner demons.",
  "Pac-Man uncontrollably guzzling cum.",
  "My vagina.",
  "A homoerotic volleyball montage.",
  "Actually taking candy from a baby.",
  "Crystal meth.",
  "Exactly what you'd expect.",
  "Natural male enhancement.",
  "Passive-aggressive Post-it notes.",
  "Inappropriate yodeling.",
  "Lady Gaga.",
  "The Little Engine That Could.",
  "Vigilante justice.",
  "A death ray.",
  "Poor life choices.",
  "A gentle caress of the inner thigh.",
  "Embryonic stem cells.",
  "Nicolas Cage.",
  "Firing a rifle into the air while balls deep in a squealing hog.",
  "Switching to Geico&reg;.",
  "The chronic.",
  "Erectile dysfunction.",
  "Home video of Oprah sobbing into a Lean Cuisine&reg;.",
  "A bucket of fish heads.",
  "50,000 volts straight to the nipples.",
  "Being fat and stupid.",
  "Hospice care.",
  "A pyramid of severed heads.",
  "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.",
  "A subscription to Men's Fitness.",
  "Crucifixion.",
  "A micropig wearing a tiny raincoat and booties.",
  "Some god-damn peace and quiet.",
  "Used panties.",
  "A tribe of warrior women.",
  "The penny whistle solo from \"My Heart Will Go On.\"",
  "An oversized lollipop.",
  "Helplessly giggling at the mention of Hutus and Tutsis.",
  "Not wearing pants.",
  "Consensual sex.",
  "Her Majesty, Queen Elizabeth II.",
  "Funky fresh rhymes.",
  "The art of seduction.",
  "The Devil himself.",
  "Advice from a wise, old black man.",
  "Destroying the evidence.",
  "The light of a billion suns.",
  "Wet dreams.",
  "Synergistic management solutions.",
  "Growing a pair.",
  "Silence.",
  "An M16 assault rifle.",
  "Poopy diapers.",
  "A live studio audience.",
  "The Great Depression.",
  "A spastic nerd.",
  "Rush Limbaugh's soft, shitty body.",
  "Tickling Sean Hannity, even after he tells you to stop.",
  "Stalin.",
  "Brown people.",
  "Rehab.",
  "Capturing Newt Gingrich and forcing him to dance in a monkey suit.",
  "Battlefield amputations.",
  "An uppercut.",
  "Shiny objects.",
  "An ugly face.",
  "Menstrual rage.",
  "A bitch slap.",
  "One trillion dollars.",
  "Chunks of dead prostitute.",
  "The entire Mormon Tabernacle Choir.",
  "The female orgasm.",
  "Extremely tight pants.",
  "The Boy Scouts of America.",
  "Stormtroopers.",
  "Throwing a virgin into a volcano.",
  "Getting in her pants, politely.",
  "Gladiatorial combat.",
  "Good grammar.",
  "Hipsters.",
  "Gandalf.",
  "Genetically engineered super-soldiers.",
  "George Clooney's musk.",
  "Getting abducted by Peter Pan.",
  "Eating an albino.",
  "Enormous Scandinavian women.",
  "Fabricating statistics.",
  "Finding a skeleton.",
  "Suicidal thoughts.",
  "Dancing with a broom.",
  "Deflowering the princess.",
  "Dorito breath.",
  "One thousand Slim Jims.",
  "My machete.",
  "Overpowering your father.",
  "Ominous background music.",
  "Media coverage.",
  "Making the penises kiss.",
  "Moral ambiguity.",
  "Medieval Times&reg; Dinner &amp; Tournament.",
  "Mad hacky-sack skills.",
  "Just the tip.",
  "Literally eating shit.",
  "Leveling up.",
  "Insatiable bloodlust.",
  "Historical revisionism.",
  "Jean-Claude Van Damme.",
  "Jafar.",
  "The boners of the elderly.",
  "The economy.",
  "Statistically validated stereotypes.",
  "Sudden Poop Explosion Disease.",
  "Slow motion.",
  "Space muffins.",
  "Sexual humiliation.",
  "Sexy Siamese twins.",
  "Santa Claus.",
  "Scrotum tickling.",
  "Ripping into a man's chest and pulling out his still-beating heart.",
  "Ryan Gosling riding in on a white horse.",
  "Quivering jowls.",
  "Revenge fucking.",
  "Pistol-whipping a hostage.",
  "Quiche.",
  "Zeus's sexual appetites.",
  "Words, words, words.",
  "Tripping balls.",
  "Being a busy adult with many important things to do.",
  "The four arms of Vishnu.",
  "The shambling corpse of Larry King.",
  "The hiccups.",
  "The harsh light of day.",
  "The Gulags.",
  "The Fanta&reg; girls.",
  "A big black dick.",
  "A beached whale.",
  "A low standard of living.",
  "A nuanced critique.",
  "A bloody pacifier.",
  "A crappy little hand.",
  "Shaft.",
  "Being a dinosaur.",
  "Beating your wives.",
  "Neil Patrick Harris.",
  "Coughing into a vagina.",
  "Carnies.",
  "Nubile slave boys.",
  "Bosnian chicken farmers.",
  "A web of lies.",
  "A rival dojo.",
  "A passionate Latino lover.",
  "Panty raids.",
  "Appreciative snapping.",
  "Apologizing.",
  "Clams.",
  "A woman scorned.",
  "Being awesome at sex.",
  "Spring break!",
  "Another shot of morphine.",
  "Dining with cardboard cutouts of the cast of \"Friends.\"",
  "A soulful rendition of \"Ol' Man River.\"",
  "Making a friend.",
  "A sweaty, panting leather daddy.",
  "Intimacy problems.",
  "The new Radiohead album.",
  "Pretty Pretty Princess Dress-Up Board Game&reg;.",
  "A man in yoga pants with a ponytail and feather earrings.",
  "An army of skeletons.",
  "A squadron of moles wearing aviator goggles.",
  "Beefin' over turf.",
  "The Google.",
  "Bullshit.",
  "A sweet spaceship.",
  "A 55-gallon drum of lube.",
  "Special musical guest, Cher.",
  "The human body.",
  "Mild autism.",
  "Nunchuck moves.",
  "Whipping a disobedient slave.",
  "An ether-soaked rag.",
  "Oncoming traffic.",
  "A dollop of sour cream.",
  "A slightly shittier parallel universe.",
  "My first kill.",
  "Boris the Soviet Love Hammer.",
  "The grey nutrient broth that sustains Mitt Romney.",
  "Tiny nipples.",
  "Power.",
  "Death by Steven Seagal.",
  "A Burmese tiger pit.",
  "Basic human decency.",
  "Grandpa's ashes.",
  "One Ring to rule them all.",
  "The day the birds attacked.",
  "Fetal alcohol syndrome.",
  "Graphic violence, adult language, and some sexual content.",
  "A bigger, blacker dick.",
  "The mere concept of Applebee's&reg;.",
  "A sad fat dragon with no friends.",
  "A pi&ntilde;ata full of scorpions.",
  "Existing.",
  "Hillary Clinton's death stare.",
  "Catastrophic urethral trauma.",
  "Double penetration.",
  "Daddy's belt.",
  "Swiftly achieving orgasm.",
  "Mooing.",
  "Rising from the grave.",
  "Subduing a grizzly bear and making her your wife.",
  "Some really fucked-up shit.",
  "Weapons-grade plutonium.",
  "All of this blood.",
  "Scrotal frostbite.",
  "Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes.",
  "The mixing of the races.",
  "Pumping out a baby every nine months.",
  "Tongue.",
  "Loki, the trickster god.",
  "Whining like a little bitch.",
  "Wearing an octopus for a hat.",
  "An unhinged ferris wheel rolling toward the sea.",
  "Finding Waldo.",
  "Upgrading homeless people to mobile hotspots.",
  "A magic hippie love cloud.",
  "Fuck Mountain.",
  "Living in a trashcan.",
  "The corporations.",
  "Getting hilariously gang-banged by the Blue Man Group.",
  "Jeff Goldblum.",
  "Survivor's guilt.",
  "Me.",
  "All my friends dying.",
  "Shutting the fuck up.",
  "An ass disaster.",
  "Some kind of bird-man.",
  "The entire Internet.",
  "Going around punching people.",
  "A boo-boo.",
  "Indescribable loneliness.",
  "Having sex on top of a pizza.",
  "Chugging a lava lamp.",
  "Warm, velvety muppet sex.",
  "Running naked through a mall, pissing and shitting everywhere.",
  "Nothing.",
  "Samuel L. Jackson.",
  "Self-flagellation.",
  "The systematic destruction of an entire people and their way of life.",
  "The Quesadilla Explosion Salad&trade; from Chili's&reg;.",
  "Reverse cowgirl.",
  "Vietnam flashbacks.",
  "Actually getting shot, for real.",
  "Not having sex.",
  "Cock.",
  "Dying alone and in pain.",
  "A cop who is also a dog.",
  "The way white people is.",
  "Gay aliens.",
  "The primal, ball-slapping sex your parents are having right now.",
  "A cat video so cute that your eyes roll back and your spine slides out of your anus.",
  "A lamprey swimming up the toilet and latching onto your taint.",
  "Slapping a racist old lady.",
  "A black male in his early 20s, last seen wearing a hoodie.",
  "Jumping out at people.",
  "Three months in the hole.",
  "Blood farts.",
  "The Land of Chocolate.",
  "A botched circumcision.",
  "My manservant, Claude.",
  "Vomiting mid-blowjob.",
  "Letting everyone down.",
  "Having shotguns for legs.",
  "Bill Clinton, naked on a bearskin rug with a saxophone.",
  "Mufasa's death scene.",
  "The Harlem Globetrotters.",
  "Demonic possession.",
  "Fisting.",
  "The thin veneer of situational causality that underlies porn.",
  "Girls that always be textin'.",
  "Blowing some dudes in an alley.",
  "A spontaneous conga line.",
  "A vagina that leads to another dimension.",
  "Disco fever.",
  "Getting your dick stuck in a Chinese finger trap with another dick.",
  "Drinking ten 5-hour ENERGYs&reg; to get fifty continuous hours of energy.",
  "Sneezing, farting, and coming at the same time.",
  "Some douche with an acoustic guitar.",
  "Spending lots of money.",
  "Putting an entire peanut butter and jelly sandwich into the VCR.",
  "An unstoppable wave of fire ants.",
  "A greased-up Matthew McConaughey.",
  "Flying robots that kill people.",
  "Unlimited soup, salad, and breadsticks.",
  "Crying into the pages of Sylvia Plath.",
  "The moist, demanding chasm of his mouth.",
  "Filling every orifice with butterscotch pudding.",
  "An all-midget production of Shakespeare's <i>Richard III</i>.",
  "Screaming like a maniac.",
  "Not contributing to society in any meaningful way.",
  "A pile of squirming bodies.",
  "Buying the right pants to be cool.",
  "Roland the Farter, flatulist to the king.",
  "That ass.",
  "A surprising amount of hair.",
  "Eating Tom Selleck's mustache to gain his powers.",
  "Velcro&trade;.",
  "A PowerPoint presentation.",
  "Crazy opium eyes.",
  "10 Incredible Facts About the Anus.",
  "An interracial handshake.",
  "Moderate-to-severe joint pain.",
  "Finally finishing off the Indians.",
  "Sugar madness.",
  "Actual mutants with medical conditions and no superpowers.",
  "The secret formula for ultimate female satisfaction.",
  "The complex geopolitical quagmire that is the Middle East.",
  "Fucking a corpse back to life.",
  "Neil Diamond's Greatest Hits.",
  "Calculating every mannerism so as not to suggest homosexuality.",
  "Whatever a McRib&reg; is made of.",
  "No clothes on, penis in vagina.",
  "All the single ladies.",
  "Whispering all sexy.",
  "How awesome I am.",
  "Ass to mouth.",
  "Smoking crack, for instance.",
  "Falling into the toilet.",
  "A dance move that's just sex.",
  "The size of my penis.",
  "Some sort of Asian.",
  "A hopeless amount of spiders.",
  "Party Mexicans.",
  "Drinking responsibly.",
  "The safe word.",
  "Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night.",
  "Bouncing up and down.",
  "Jizz.",
  "Ambiguous sarcasm.",
  "A shiny rock that proves I love you.",
  "Dem titties.",
  "My worthless son.",
  "Exploding pigeons.",
  "A Ugandan warlord.",
  "My sex dungeon.",
  "A kiss on the lips.",
  "Child Protective Services.",
  "A Native American who solves crimes by going into the spirit world.",
  "Doo-doo.",
  "The peaceful and nonthreatening rise of China.",
  "Sports.",
  "A fart.",
  "Unquestioning obedience.",
  "Three consecutive seconds of happiness.",
  "Grammar nazis who are also regular Nazis.",
  "Snorting coke off a clown's boner.",
  "Africa.",
  "Depression.",
  "A horse with no legs.",
  "The euphoric rush of strangling a drifter.",
  "Khakis.",
  "Interspecies marriage.",
  "A gender identity that can only be conveyed through slam poetry.",
  "Almost giving money to a homeless person.",
  "Stuff a child's face with Fun Dip&reg; until he starts having fun.",
  "What Jesus would do.",
  "A for-real lizard that spits blood from its eyes.",
  "Blackula.",
  "The tiniest shred of evidence that God is real.",
  "My dad's dumb fucking face.",
  "Prince Ali,<br>fabulous he,<br>Ali Ababwa.",
  "A manhole.",
  "A sex goblin with a carnival penis.",
  "A bunch of idiots playing a card game instead of interacting like normal humans.",
  "A sex comet from Neptune that plunges the Earth into eternal sexiness.",
  "Sharks with legs.",
  "Injecting speed into one arm and horse tranquilizer into the other.",
  "Lots and lots of abortions.",
  "Seeing things from Hitler's perspective",
  "Too much cocaine.",
  "Doing the right stuff to her nipples.",
  "Giant sperm from outer space.",
  "Oil!",
  "Ennui.",
  "A powered exoskeleton.",
  "A disappointing salad.",
  "Mom's new boyfriend.",
  "Unrelenting genital punishment.",
  "Denzel.",
  "The swim team, all at once.",
  "The eight gay warlocks who dictate the rules of fashion.",
  "Being nine years old.",
  "The unbelievable world of mushrooms.",
  "The Abercrombie &amp; Fitch lifestyle.",
  "Vegetarian options.",
  "My first period.",
  "Having been dead for a while.",
  "Backwards knees.",
  "Being paralyzed from the neck down.",
  "Seeing my village burned and my family slaughtered before my eyes.",
  "A zero-risk way to make $2,000 from home.",
  "A crazy little thing called love.",
  "Ancient Athenian boy-fucking",
  "Out-of-this-world bazongas.",
  "The ghost of Marlon Brando.",
  "The basic suffering that pervades all of existence.",
  "Being worshipped as the one true God.",
  "Figuring out how to have sex with a dolphin.",
  "All these decorative pillows.",
  "A mouthful of potato salad.",
  "Russian super-tuberculosis.",
  "A reason not to commit suicide.",
  "Going to a high school reunion on ketamine.",
  "The passage of time.",
  "Child support payments.",
  "Changing a person's mind with logic and facts.",
  "My boyfriend's stupid penis.",
  "The tiger that killed my father.",
  "Genghis Khan's DNA.",
  "Boring vaginal sex.",
  "40 acres and a mule.",
  "A whole new kind of porn.",
  "Slowly easing down onto a cucumber.",
  "Wearing glasses and sounding smart.",
  "AIDS monkeys.",
  "A team of lawyers.",
  "Getting drive-by shot.",
  "Not believing in giraffes.",
  "Anal fissures like you wouldn't believe.",
  "A giant powdery manbaby.",
  "Cutting off a flamingo's legs with garden shears.",
  "P.F. Chang himself.",
  "An uninterrupted history of imperialism and exploitation.",
  "A one-way ticket to Gary, Indiana.",
  "Daddy's credit card.",
  "September 11th, 2001.",
  "An unforgettable quincea&ntilde;era.",
  "Deez nuts.",
  "Social justice warriors with flamethrowers of compassion.",
  "Some shit-hot guitar licks.",
  "Butt stuff.",
  "Blackface.",
  "Blowjobs for everyone.",
  "Getting eaten alive by Guy Fieri.",
  "Western standards of beauty.",
  "Ejaculating live bees and the bees are angry.",
  "My dead son's baseball glove.",
  "Getting caught by the police and going to jail.",
  "A face full of horse cum.",
  "Free ice cream, yo.",
  "The white half of Barack Obama.",
  "The black half of Barack Obama.",
  "An inability to form meaningful relationships.",
  "A bass drop so huge it tears the starry vault asunder to reveal the face of God.",
  "Growing up chained to a radiator in perpetual darkness.",
  "Shitting all over the floor like a bad, bad girl.",
  "A buttload of candy.",
  "Sucking all the milk out of a yak.",
  "Bullets.",
  "A man who is so cool that he rides on a motorcycle.",
  "Sudden penis loss.",
  "Getting all offended.",
  "Crying and shitting and eating spaghetti.",
  "One unforgettable night of passion.",
  "Being popular and good at sports.",
  "Filling a man's anus with concrete.",
  "Two whales fucking the shit out of eachother.",
  "Cool, relateable cancer teens.",
  "The amount of gay I am.",
  "A possible Muslim.",
  "Unsheathing my massive horse cock.",
  "A bowl of gourds.",
  "The male gaze.",
  "The power of the Dark Side.",
  "Ripping a dog in half.",
  "A constant need for validation.",
  "Meaningless sex.",
  "Such a big boy.",
  "Throwing stones at a man until he dies.",
  "Cancer.",
  "Like a million alligators.",
  "Eating together like a god damn family for once.",
  "Cute boys.",
  "Pussy.",
  "Being a terrible mother.",
  "Never having sex again.",
  "A pizza guy who fucked up.",
  "A whole lotta woman.",
  "The all-new Nissan Pathfinder with 0.9% APR financing!",
  "A peyote-fueled vision quest.",
  "Kale.",
  "Breastfeeding a ten year old.",
  "Crippling social anxiety.",
  "Immortality cream.",
  "Texas.",
  "Teaching a girl how to handjob the penis.",
  "A turd.",
  "Shapes and colors.",
  "Whatever you wish, mother.",
  "The haunting stare of an Iraqi child.",
  "Robots who just want to party.",
  "A self-microwaving burrito.",
  "Forgetting grandma's first name.",
  "Our new Buffalo Chicken Dippers&reg;!",
  "Treasures beyond your wildest dreams.",
  "Getting shot out of a cannon.",
  "The sweet song of sword against and the braying of mighty war beasts.",
  "Walking into a glass door.",
  "The color \"puce\".",
  "Every ounce of charisma left in Mick Jagger's tired body.",
  "The eighth graders.",
  "Setting my balls on fire and cartwheeling to Ohio.",
  "The dentist.",
  "Gwyneth Paltrow's opinions.",
  "Turning the rivers red with the blood of infidels.",
  "Rabies.",
  "Important news about Taylor Swift.",
  "Ejaculating inside another man's wife.",
  "Owls, the perfect predator.",
  "Being John Malkovich.",
  "Bathing in moonsblood and dancing around the ancient oak.",
  "An oppressed people with a vibrant culture.",
  "An overwhelming variety of cheeses.",
  "Reading the entire End-User License Agreement.",
  "Morpheus.",
  "Peeing into a girl's butt to make a baby.",
  "Generally having no idea of what's going on.",
  "No longer finding any Cards Against Humanity card funny.",
  "10 football players with erections barreling towards you at full speed.",
  "10,000 shrieking teenage girls.",
  "A big ol' plate of fettuccine alfredo.",
  "A big, beautiful mouth packed to the brim with sparkling teeth.",
  "A black friend.",
  "A burrito that's just sour cream.",
  "A cheerfulness that belies a deep-seated self-loathing.",
  "A cold and indifferent universe.",
  "A creature made of penises that must constantly arouse itself to survive.",
  "A creepy child singing a nursery rhyme.",
  "A dolphin that learns to talk and becomes the Dead of Harvard Law School.",
  "A duffel bag full of lizards.",
  "A finger up the butt.",
  "A genetic predisposition for alcoholism.",
  "A gun that shoots cobras.",
  "A hug.",
  "A long business meeting with no obvious purpose.",
  "A man in a suit with perfect hair who tells you beautiful lies.",
  "A man with the head of a goat and the body of a goat.",
  "A massive collection of child pornography.",
  "A medium horchata.",
  "A negative body image that is totally justified.",
  "A slowly encroaching circle of wolves.",
  "A strong horse and enough rations for thirty days.",
  "A terrified fat child who won't come out of the bushes.",
  "A tiny fireman who puts out tiny fires.",
  "A weird guy who says weird stuff and weirds me out.",
  "A woman's right to choose.",
  "A woman's perspective.",
  "Aborting the shit out of a fetus.",
  "Albert Einstein but if he had a huge muscles and a rhinoceros cock.",
  "All these people I've killed.",
  "An arrangement wherein I give a person money they have sex with me.",
  "An empowered woman.",
  "An incurable homosexual.",
  "An old dog full of tumors.",
  "An older man.",
  "An X-Man whose power is that he has sex with dogs and children.",
  "Anal.",
  "Antidepressants.",
  "Art.",
  "Assassinating the president.",
  "Awesome pictures of planets and stuff.",
  "Bad emotions I don't want.",
  "Becoming the President of the United States.",
  "Being sexually attracted to children.",
  "Being turned into sausages.",
  "Beyonc&eacute;.",
  "Big, smart money boys tap-tapping on their keyboards.",
  "Blossoming into a beautiful young woman.",
  "Breastfeeding in public like a radiant earth goddess.",
  "Brunch.",
  "Catching a live salmon in your mouth.",
  "Child labor.",
  "China.",
  "Chipotle.",
  "Chris Hemsworth.",
  "Comprehensive immigration reform.",
  "Condoleezza Rice.",
  "Consensual, nonreproductive incest.",
  "Content.",
  "Crazy anal orgasms.",
  "Creamy slices of real, California avocado.",
  "Critical thinking.",
  "Crushing the patriarchy.",
  "Daddy going away forever.",
  "Defeating a gorilla in single combat.",
  "Denying the Holocaust.",
  "Dis bitch.",
  "Discovering that what I really want in life is to kill people and have sex with their corpses.",
  "Doing a somersault and barfing.",
  "Dominating a man by peeing on his eldest son.",
  "Doritos and a Fruit Roll-Up.",
  "Dropping dead in a Sbarro's bathroom and not being found for 72 hours.",
  "Dumpster juice.",
  "Eating ass.",
  "Eating people.",
  "Eating too many Cinnabons and then vomiting and then eating the vomit.",
  "Ejaculating at the apex of a cartwheel.",
  "Esmeralda, my most beautiful daughter.",
  "Eternal screaming madness.",
  "Every man's ultimate fantasy: a perfectly cylindrical vagina.",
  "Everything.",
  "Exploring each other's buttholes.",
  "Facilitating dialogue and deconstructing binaries.",
  "Falling into a pit of waffles.",
  "Farting a huge shit out of my pussy.",
  "Farting all over my face with your tight little asshole.",
  "Feeling the emotion of anger.",
  "Feminism.",
  "Film roles for actresses over 40.",
  "Finding a nice elevator to poop in.",
  "Forty-five minutes of finger blasting.",
  "Founding a major world religion.",
  "Fucking me good and taking me to Red Lobster&reg;.",
  "Fucking my therapist.",
  "Gary.",
  "Gay thoughts.",
  "Gayle from HR.",
  "Gazpacho.",
  "Getting aborted.",
  "Getting blasted in the face by a t-shirt cannon.",
  "Getting eaten out by a dog.",
  "Getting high with mom.",
  "Getting killed and dragged up a tree by a leopard.",
  "Getting laid like all the time.",
  "Getting naked too soon.",
  "Getting pegged.",
  "Getting the Dorito crumbs out of my purse.",
  "Getting this party started!",
  "Getting trapped in a conversation about Ayn Rand.",
  "Going around pulling people's tampons out.",
  "Going to bed at a reasonable hour.",
  "Gregor, my largest son.",
  "Grunting for ten minutes and then peeing sand.",
  "Guns.",
  "Happy daddies with happy sandals.",
  "Hating Jews.",
  "Having a vagina.",
  "Having an awesome time drinking and driving.",
  "Having sex with a beautiful person.",
  "Having sex with a man and then eating his head.",
  "Having sex with your mom.",
  "Holding the proper political beliefs of my time to attract a mate.",
  "Homework.",
  "Hot lettuce.",
  "How good lead paint taste.",
  "How great my ass looks in these jeans.",
  "How sad it will be when Morgan Freeman dies.",
  "How strange it is to be anything at all.",
  "Huge big balls full of jizz.",
  "Informing you that I am a registered sex offender.",
  "ISIS.",
  "It being too late to stop having sex with a horse.",
  "Jason, the teen mayor.",
  "Jazz.",
  "Just now finding out about the Armenian Genocide.",
  "Late-stage dementia.",
  "Libertarians.",
  "Loud, scary thunder.",
  "Making out and stuff.",
  "Math.",
  "Meatloaf, the food.",
  "Meatloaf, the man.",
  "Menopause.",
  "Mental illness.",
  "Microaggressions.",
  "Misogyny.",
  "Mixing M&Ms and Skittles like some kind of psychopath.",
  "Mommy and daddy fighting all the time.",
  "Moon people.",
  "Muchin' puss.",
  "My brother's hot friends.",
  "My dog dying.",
  "My huge penis and substantial fortune.",
  "Objectifying women.",
  "One of them big-city Jew lawyers.",
  "One of those \"blow jobs\" I've been hearing so much about.",
  "Onions.",
  "Opening your mouth to talk and a big penis fops out.",
  "Our baby.",
  "Out-of-control teenage blowjob parties.",
  "Overthrowing the democratically-elected government of Chile.",
  "Participating.",
  "Period poops.",
  "Picking up a glass of water and taking a sip and being the president.",
  "Playing my asshole like a trumpet.",
  "Plowing that ass like a New England corn farmer.",
  "Political correctness.",
  "Pooping in a leotard and hoping no one notices.",
  "Pooping in the potty.",
  "Prematurely ejaculating like a total loser.",
  "Pretending to be one of the guys but actually being the spider god.",
  "Putting more black people in jail.",
  "Quacking like a duck in lieu of a cogent argument.",
  "Quinoa.",
  "Raising three kids on minimum wage.",
  "Reaching an age where barbecue chips are better than sex.",
  "Regurgitating a half-digested sparrow.",
  "Restoring Germany to its former glory.",
  "Rock-hard tits and a huge vagina.",
  "Rolling so hard.",
  "Rubbing my bush all over your bald head.",
  "Salsa Night at Dave's Cantina.",
  "Scissoring, if that's a thing.",
  "Seizing control of the means of production.",
  "Self-identifying as a DJ.",
  "Showing all the boys my pussy.",
  "Slamming a dunk.",
  "Smashing my balls at the moment of climax.",
  "Some of that good dick.",
  "Some real spicy shrimps.",
  "Starting a shitty podcast.",
  "Straight blazin' 24/7.",
  "Sucking each other's penises for hours on end.",
  "Sudden and unwanted slam poetry.",
  "Swearing praise upon the Sultan's hideous daughters.",
  "Systems and policies designed to preserve centuries-old power structures.",
  "Tables.",
  "Taking the form of a falcon.",
  "Tender chunks of all-white-meat chicken.",
  "That bitch, Stacy.",
  "The amount of baby carrots I can fit up my ass.",
  "The best, deepest quotes from The Dark Knight.",
  "The body of a 46-year-old man.",
  "The bond between a woman and her horse.",
  "The chicken from Popeyes&reg;.",
  "The clown that followed me home from the grocery store.",
  "The fear and hatred in men's hearts.",
  "The feeling of going to McDonald's as a 6-year-old.",
  "The flaming wreckage of the International Space Station.",
  "The full blown marginalization of ugly people.",
  "The full force of the American military.",
  "The government.",
  "The graceful path of an autumn leaf as it falls to its earthen cradle.",
  "The hottest MILF in Dallas.",
  "The LGBT community.",
  "The lived experience of African Americans.",
  "The mysterious fog rolling into town.",
  "The ol' penis-in-the-popcorn surprise.",
  "The Rwandan Genocide.",
  "The secret to truly resilient hair.",
  "The sweet, forbidden meat of the monkey.",
  "The wind.",
  "Thinking about what eating even is.",
  "Three hours of nonstop penetration.",
  "Tiny, rancid girl farts.",
  "Trees.",
  "Trevor, the world's greatest boyfriend.",
  "Turning 32.",
  "Twenty bucks.",
  "Twenty cheerleaders laughing at your tiny penis.",
  "Twisting my cock and balls into a balloon poodle.",
  "Two beautiful pig sisters.",
  "Two shitty kids and a garbage husband.",
  "Waking up inside of a tornado.",
  "Watching a hot person eat.",
  "Watching you die.",
  "Water.",
  "When the big truck goes \"Toot! Toot!\"",
  "Who really did 9/11.",
  "Whomsoever let the dogs out.",
  "Whooping your ass at Mario Kart.",
  "Working so hard to have muscles and then having them.",
  "You.",
  "Several Michael Keatons.",
  "A bus that will explode if it goes under 50 miles per hour.",
  "Sucking the President's dick.",
  "Sunny D! Alright!",
  "A mulatto, an albino, a mosquito, and my libido.",
  "Log&trade;.",
  "Jerking off to a 10-second RealMedia clip.",
  "The Y2K bug.",
  "Deregulating the mortgage market.",
  "Stabbing the shit out of a Capri Sun.",
  "Wearing Nicolas Cage's face.",
  "Freeing Willy.",
  "Kurt Cobain's death.",
  "The Great Cornholio.",
  "Liking big butts and not being able to lie about it.",
  "Yelling \"girl power!\" and doing a high kick.",
  "Pure Moods, Vol. 1.",
  "Pizza in the morning, pizza in the evening, pizza at supper time.",
  "Pamela Anderson's boobs running in slow motion.",
  "Getting caught up in the CROSSFIRE&trade;.",
  "Angels interfering in an otherwise fair baseball game.",
  "Cool 90s up-in-the-front hair.",
  "Patti Mayonnaise.",
  "The biggest, blackest dick.",
  "A box within a box.",
  "A boxing match with a giant box.",
  "A box.",
  "Pandora's vagina.",
  "Former President George W. Box.",
  "Being a motherfucking box.",
  "A falcon with a box on its head.",
  "Two midgets shitting into a box.",
  "A box without hinges, key, or lid, yet golden treasure inside is hid.",
  "The J15 Patriot Assault Box.",
  "An alternate universe in which boxes store things inside of people.",
  "A box that is conscious and wishes it weren't a box.",
  "Something that looks like a box but turns out to be a crate.",
  "A man-shaped box.",
  "A box-shaped man.",
  "Boxing up my feelings.",
  "A world without boxes.",
  "The Boxcar Children.",
  "An outbreak of smallbox.",
  "A box of biscuits, a box of mixed biscuits, and a biscuit mixer.",
  "A CGI dragon.",
  "A dwarf who won't leave you alone until you compare penis sizes.",
  "A gay sorcerer who turns everyone gay.",
  "A ghoul.",
  "A Hitachi Magic Wand.",
  "A magical kingdom with dragons and elves and no black people.",
  "A mysterious, floating orb.",
  "A weed elemental who gets everyone high.",
  "Accidentally conjuring a legless horse that can't stop ejaculating.",
  "Bathing naked in a moonlit grove.",
  "Dinosaurs who wear armor and you ride them and they kick ass.",
  "Eternal darkness.",
  "Freaky, pan-dimensional sex with a demigod.",
  "Gender equality.",
  "Going on an epic adventure and learning a valuable lesson about friendship.",
  "Handcuffing a wizard to a radiator and dousing him with kerosene.",
  "Hodor.",
  "How hot Orlando Bloom was in <i>Lord of the Rings</i>.",
  "Kneeing a wizard in the balls.",
  "Make-believe stories for autistic white men,",
  "Reading The Hobbit under the covers while mom and dad scream at each other downstairs.",
  "Shitting in a wizard's spell book and jizzing in his hat.",
  "Shooting a wizard with a gun.",
  "The all-seeing Eye of Sauron.",
  "The card game Neil Gaiman wrote: \"Three elves at a time.\"",
  "True love's kiss.",
  "A sobering quantity of chili cheese fries.",
  "Going vegetarian and feeling so great all the time.",
  "Kale farts.",
  "Licking the cake batter off of grandma's fingers.",
  "Real cheese flavor.",
  "Swishing the wine around and sniffing it like a big fancy man.",
  "The Dial-A-Slice Apple Divider from Williams-Sonoma.",
  "What to do with all of this chocolate on my penis.",
  "A belly full of hard-boiled eggs.",
  "A joyless vegan patty.",
  "A table for one at The Cheesecake Factory.",
  "Being emotionally and physically dominated by Gordon Ramsay.",
  "Kevin Bacon Bits.",
  "Not knowing what to believe anymore about butter.",
  "Soup that's better than pussy.",
  "Sucking down thousands of pounds of krill every day.",
  "A Mexican child trapped inside of a burrito.",
  "Clamping down on a gazelle's jugular and tasting its warm life waters.",
  "Committing suicide at the Old Country Buffet.",
  "Father's forbidden chocolates.",
  "Jizz Twinkies.",
  "The Hellman's Mayonnaise Corporation.",
  "The hot dog I put in my vagina ten days ago.",
  "The inaudible screams of carrots.",
  "A supermassive black hole.",
  "Reconciling quantum theory with general relativity.",
  "Electroejaculating a capuchin monkey.",
  "Insufficient serotonin.",
  "Evolving a labyrinthine vagina.",
  "Getting really worried about global warming for a few seconds.",
  "Infinity.",
  "Oxytocin release via manual stimulation of the nipples.",
  "Uranus.",
  "Being knowledgeable in a narrow domain that nobody understands or cares about.",
  "Achieving reproductive success.",
  "Slowly evaporating.",
  "The quiet majesty of the sea turtle.",
  "A 0.7 waist-to-hip ratio.",
  "Fun and interesting facts about rocks.",
  "Photosynthesis.",
  "Developing secondary sex characteristics.",
  "Failing the Turing test.",
  "Explosive decompression.",
  "Driving into a tornado to learn about tornadoes.",
  "David Attenborough watching us mate.",
  "3.7 billion years of evolution.",
  "The Sun engulfing the Earth.",
  "A complete inability to understand anyone else's perspective.",
  "A fun, sexy time at the nude beach.",
  "A man from Craigslist.",
  "A night of Taco Bell and anal sex.",
  "A respectful discussion of race and gender on the Internet.",
  "Cat massage.",
  "Destroying Dick Cheney's last horcrux.",
  "<i>Game of Thrones</i> spoilers.",
  "Getting teabagged by a fifth grader in Call of Duty.",
  "Goats screaming like people.",
  "Googling.",
  "Internet porn analysis paralysis.",
  "Matching with Mom on Tinder.",
  "My browser history.",
  "My privileged white penis.",
  "Pretending to be black.",
  "Smash Mouth.",
  "Taking a shit while running at full speed.",
  "That thing on the Internet everyone's talking about.",
  "Three years of semen in a shoebox.",
  "YouTube comments.",
  "A legitimate reason to commit suicide.",
  "A back-alley abortion from a Mexican cyborg doctor.",
  "Whipping lower-class white men into a xenophobic frenzy.",
  "Rage.",
  "Trying to remember what music was.",
  "Roaming through a wasteland of windblown trash and deserted highways.",
  "Bringing millions of dangerous low-paying manufacturing jobs back to America.",
  "A gnawing sense of dread.",
  "Drinking urine to survive.",
  "Nuclear winter.",
  "President Donald Trump.",
  "Casual dismissiveness.",
  "Extra rations for my little girl.",
  "World Wars 3 through 5.",
  "Finding out that democracy might not be such a great idea.",
  "Mild amusement.",
  "Burying my only son.",
  "The purging of the disloyal.",
  "Trying to wake up from this nightmare.",
  "A father and son fighting each other over the last scrap of bread.",
  "Making Islam illegal.",
  "Desperately hurling insults at Donald Trump as he absorbs them into his rapidly expanding body.",
  "Santa's heavy sack.",
  "Clearing a bloody path through Walmart with a scimitar.",
  "Another shitty year.",
  "Whatever Kwanzaa is supposed to be about.",
  "A Christmas stocking full of coleslaw.",
  "Elf cum.",
  "The tiny, calloused hands of the Chinese children that made this card.",
  "Taking down Santa with a surface-to-air missle.",
  "Several intertwining love stories featuring Hugh Grant.",
  "Mall Santa.",
  "My hot cousin.",
  "The Star Wars Holiday Special.",
  "Krampus, the Austrian Christmas monster.",
  "Pretending to be happy.",
  "Socks. ",
  "Eating an entire snowman.",
  "A toxic family environment.",
  "A visually arresting turtleneck.",
  "Fucking up \"Silent Night\" in front of 300 parents.",
  "Immaculate conception.",
  "Space Jam on VHS.",
  "Gift-wrapping a live hamster.",
  "A Hungry-Man&trade; Frozen Christmas Dinner for One.",
  "Swapping bodies with mom for a day.",
  "Making up for 10 years of shitty parenting with a PlayStation.",
  "Finding out that Santa isn't real.",
  "Slicing a ham in icy silence.",
  "The shittier, Jewish version of Christmas.",
  "The Hawaiian goddess Kapo and her flying detachable vagina.",
  "Having a strong opinion about Obamacare.",
  "The royal afterbirth.",
  "Congress's flaccid penises withering away beneath their suit pants.",
  "Piece of shit Christmas cards with no money in them.",
  "Moses gargling Jesus's balls while Shiva and the Buddha penetrate his divine hand holes.",
  "Giving money and personal information to strangers on the Internet.",
  "These low, low prices!",
  "A magical tablet containing a world of unlimited pornography.",
  "People with cake in their mouths talking about how good cake is.",
  "Jizzing into Santa's beard.",
  "A simultaneous nightmare and wet dream starring Sigourney Weaver.",
  "Being blind and deaf and having no limbs.",
  "Rudolph's bright red balls.",
  "The Grinch's musty, cum-stained pelt.",
  "Breeding elves for their priceless semen.",
  "Forcing a handjob on a dying man. ",
  "A homoerotic subplot.",
  "An origami swan that's some kind of symbol?",
  "25 shitty jokes about House of Cards.",
  "My constituents.",
  "Punching a congressman in the face.",
  "Strangling a dog to make a point to the audience.",
  "A childless marriage.",
  "A much younger woman.",
  "Getting eaten out while on the phone with Dad.",
  "Making it look like a suicide.",
  "Carbon monoxide poisoning. ",
  "Discharging a firearm in a residential area.",
  "Ribs so good they transcend race and class.",
  "The sensitive European photographer who's fucking my wife.",
  "<b>A Bad Haircut</b><br/><small>The perfect start to a bad hair day.</small>",
  "<b>A Bull Fight</b><br/><small>Also known as \"la fiesta brava\" (the brave festival). A whole lot of bull..</small>",
  "<b>A Car Crash</b><br/><small>\"Hey, it was an accident!\"</small>",
  "<b>A Cheap Motel</b><br/><small>No charge for the cockroaches.</small>",
  "<b>A Crawl Space</b><br/><small>Where you'll find something the cat dragged in.</small>",
  "<b>A Dozen Red Roses</b><br/><small>When eleven just won't do.</small>",
  "<b>A Flat Tire</b><br/><small>\"Whaddya mean, there's no spare?\"</small>",
  "<b>A Full Moon</b><br/><small>\"When the moon hits your eye like a big pizza pie, that's amore!\" -Dean Martin</small>",
  "<b>A Haunted House</b><br/><small>Maybe if people would STOP building their dream homes on ancient burial grounds ...</small>",
  "<b>A High School Bathroom</b><br/><small>\"Fools rush in where angels fear to tread\" -Alexander Pope</small>",
  "<b>A Honeymoon</b><br/><small>America's top honeymoon spots are Hawaii, Niagara Falls, Las Vegas and Florida. You can get there by air, land, sea ... or shotgun.</small>",
  "<b>A Locker Room</b><br/><small>Steamy atmosphere ... bawdy humor ... sweaty bodies ... HEY! Sounds like Cable TV!</small>",
  "<b>A Morgue</b><br/><small>\"Given strange eons, even death may die...\" -H.P. Lovecraft</small>",
  "<b>A Nine Iron</b><br/><small>A golf club best used on short shots or large opponents.</small>",
  "<b>A School Bus</b><br/><small>The only thing we have to fear is fear itself. -Franklin D. Roosevelt</small>",
  "<b>A School Cafeteria</b><br/><small>Food fight!.</small>",
  "<b>A Sunrise</b><br/><small>\"But he who kisses the joy as it flies/ Lives in eternity's sunrise.\" -William Blake</small>",
  "<b>A Sunset</b><br/><small>The sun never set on the British Empire ... because God didn't trust the English in the dark.</small>",
  "<b>A Tree House</b><br/><small>Your first high-rise apartment.</small>",
  "<b>A Used Car Lot</b><br/><small>One of the most honest places around. Honest ...</small>",
  "<b>Abraham Lincoln</b><br/><small>1809-65, 16th U.S. president, led the Union to victory in the American Civil War and abolished slavery. Was assassinated for his efforts.</small>",
  "<b>Adam Sandler</b><br/><small>1966- , American comedian, film star, and Saturday Night Live alumnus. Genius or goofball - you make the call.</small>",
  "<b>Adolph Hitler</b><br/><small>1889-1945, turned Germany into a militarized dictatorship, caused the slaughter of millions and launched World War II.</small>",
  "<b>AIDS</b><br/><small>Acquired Immune Deficiency Syndrome.</small>",
  "<b>Airline Food</b><br/><small>Since when is a bag of peanuts considered a meal?</small>",
  "<b>Al Pacino</b><br/><small>1940- , Oscar winning American actor and star of \"The Godfather,\" \"Dog Day Afternoon\" and \"Scent Of A Woman.\" One very intense guy.</small>",
  "<b>Albert Einstein</b><br/><small>1879-1955, German-born American physicist and Nobel laureate who created theories of relativity. Nice hair.</small>",
  "<b>Alfred Hitchcock</b><br/><small>1899-1980, British-born American director and producer of brilliant psychological thrillers. Right, mother? MOTHER!</small>",
  "<b>Alien Abductions</b><br/><small>There was a blinding light -and she was gone!</small>",
  "<b>Americans</b><br/><small>How many Americans does it take to screw in a light bulb? THAT'S NOT FUNNY! WE'RE SUING!</small>",
  "<b>Amputations</b><br/><small>\"A SCRATCH? Your arm's off!\" - Monty Python and the Holy Grail.</small>",
  "<b>Angry Hornets</b><br/><small>Who put the bees in their bonnets?.</small>",
  "<b>Andy Warhol</b><br/><small>1928-87, American painter and filmmaker, a leader of the pop art movement. Famous for slightly more than 15 minutes.</small>",
  "<b>Anne Frank</b><br/><small>1929-45, German Jewish girl who wrote in her diary about her family hiding from the Nazis. She died in a concentration camp.</small>",
  "<b>Antarctica</b><br/><small>Home to the lowest temperature ever recorded on earth, -126.9 F.</small>",
  "<b>Anthony Hopkins</b><br/><small>1937- , British actor starred in The Elephant Man, Howard's End, and, of course, The Silence Of The Lambs. Knighted in 1992.</small>",
  "<b>Apple Pie</b><br/><small>It's as American as ... as ... something ...</small>",
  "<b>Apples</b><br/><small>More than 40 million metric tons are produced worldwide every year. How 'bout them apples?</small>",
  "<b>Armed Robbery</b><br/><small>You got your Robbery, your Armed Robbery, your Strong Armed Robbery, and, of course, the five finger discount.</small>",
  "<b>Assembly Lines</b><br/><small>Faster. FASTER!</small>",
  "<b>At My Parent's House</b><br/><small>Like never-never land, you're never seen as an adult here.</small>",
  "<b>Atlantis</b><br/><small>Mythological city where the folks had that sinking feeling.</small>",
  "<b>Atomic Bombs</b><br/><small>The Italian physicist Enrico Fermi succeeded in producing the first nuclear chain reaction in 1942, at the University of Chicago.</small>",
  "<b>Attack On Pearl Harbor</b><br/><small>\"Yesterday, December 7th, 1941, a date which will live in infamy ...\" -Franklin D. Roosevelt</small>",
  "<b>Austin Powers</b><br/><small>Fictional British man of mystery. Yeah, bay-beee, yeah!</small>",
  "<b>Australian Outback</b><br/><small>Beware of dangerous temperatures, strange animals, and didgeridoos.</small>",
  "<b>Babe Ruth</b><br/><small>1895-1948, American baseball legend, and one heck of a candy bar!</small>",
  "<b>Babies</b><br/><small>Little bundles of joy ... and who needs sleep, anyway?</small>",
  "<b>Baby Showers</b><br/><small>Baby showers may bring flowers ...</small>",
  "<b>Backstreet Boys</b><br/><small>The latest American pop boy band. Which one do you think is the cutest?</small>",
  "<b>Bad Dogs</b><br/><small>Bad dog, bad dog. What'cha gonna do?</small>",
  "<b>Bagpipes</b><br/><small>A shrill-toned musical instrument consisting of a leather bag and pipes. Also available in plaid.</small>",
  "<b>Baked Beans</b><br/><small>Add a little bacon, brown sugar and Beano!</small>",
  "<b>Baked Potatoes</b><br/><small>Hot potato, couch potato, potato head, twice baked, half-baked, ... whatever.</small>",
  "<b>Baking Cookies</b><br/><small>An experience only surpassed by eating them.</small>",
  "<b>Bald Eagles</b><br/><small>Known for their majestic appearance and powerful flight. In 1782, the bald eagle was chosen as the emblem of the United States.</small>",
  "<b>Ballerinas</b><br/><small>Beautiful, graceful dancers who are always on their toes.</small>",
  "<b>Bangkok</b><br/><small>Capital of Thailand. Location: near the Gulf of Siam. Population: five million. Reputation: seedy.</small>",
  "<b>Bankruptcy</b><br/><small>It'll be the debt of you.</small>",
  "<b>Barbara Walters</b><br/><small>1931- , American television journalist and author. Voted one of the most important women of the century by \"Ladies Home Journal.\"</small>",
  "<b>Barbed Wire</b><br/><small>Wire with sharp points, used for fences. Created havoc on the western frontier.</small>",
  "<b>Barfing</b><br/><small>We didn't want to bring that up ...</small>",
  "<b>Barney</b><br/><small>Purple dinosaur. \"I love you, you love me, blah, blah, blah ... \"</small>",
  "<b>Bart Simpson</b><br/><small>Fictional animated character. Don't have a cow, man!\"</small>",
  "<b>Bates Motel</b><br/><small>The haunt of Alfred Hitchcock's psycho, Norman Bates ... and mother, of course ...</small>",
  "<b>Batman</b><br/><small>How does Batman's mother call him home? \"Dinner, dinner, dinner, dinner, dinner, dinner, dinner, dinner - BATMAN!\"</small>",
  "<b>Bats</b><br/><small>The little brown bat consumes as many as 600 mosquitoes in an hour. The vampire bat dines elsewhere ...</small>",
  "<b>Beach Parties</b><br/><small>Up for some \"Beach Blanket Bingo,\" Annette?</small>",
  "<b>Beanie Babies</b><br/><small>Tiny plush collectibles to love and cherish. Don't take that tag off!</small>",
  "<b>Beauty And The Beast</b><br/><small>A tale as old as time ... so Disney didn't have to pay royalties.</small>",
  "<b>Beer</b><br/><small>\"Beer is proof that God loves us and wants us to be happy.\" - Benjamin Franklin</small>",
  "<b>Beer Bellies</b><br/><small>Just think of them as microbreweries.</small>",
  "<b>Beethoven</b><br/><small>1770-1827, German composer, considered one of the greatest of the western world.</small>",
  "<b>Beets</b><br/><small>Beats Brussels sprout.</small>",
  "<b>Being In Love</b><br/><small>\"Love's like the measles, all the worse when it comes late.\" -Douglas Jerrold</small>",
  "<b>Bell-Bottoms</b><br/><small>Bell-bottoms and pea coats -who would have thought the Navy could be such a trendsetter?</small>",
  "<b>Ben Stiller</b><br/><small>1965-, American actor, director, and funny guy of Reality Bites, There's Something About Mary, and Meet The Parents</small>",
  "<b>Berlin</b><br/><small>1945 - Adolph Hitler's last stand. Bunker ... I mean -hunker down, soldier.</small>",
  "<b>Big Bang Theory</b><br/><small>A cosmological theory for the origin of the universe. An explosive idea!</small>",
  "<b>Big Macs</b><br/><small>T w o a l l b e e f p a t t i e s s p e c i a l s a u c e l e t t u c e c h e e s e p i c k l e s o n i o n s o n a s e s a m e s e e d b u n .</small>",
  "<b>Bigfoot</b><br/><small>Legendary North American monster, a.k.a. Sasquatch or the Abominable Snowman.</small>",
  "<b>Bill Clinton</b><br/><small>1946- , popular, yet embattled, 42nd president of the United States.</small>",
  "<b>Bill Gates</b><br/><small>1955-, chairman and chief software architect of Microsoft Corporation. A very rich guy.</small>",
  "<b>Bill Murray</b><br/><small>1950-, American actor and comedian. Star of Ghostbusters, Stripes, Groundhog Day, and Lost In Translation.</small>",
  "<b>Billboards</b><br/><small>Only 1,254 miles to Wall Drug ...</small>",
  "<b>Bingo</b><br/><small>\"There was a farmer, had a dog, and Bingo was his name-o ...\"</small>",
  "<b>Bird Watching</b><br/><small>A hobby that relies on a wing and a prayer.</small>",
  "<b>Black Holes</b><br/><small>The gravitational field of a black hole is so strong that nothing, including light, can escape from its vicinity.</small>",
  "<b>Black Velvet</b><br/><small>Smooth, silky and sophisticated ... until you paint an Elvis on it.</small>",
  "<b>Blizzard</b><br/><small>Extreme cold, strong winds, and a head snowfall. Also known as Canada.</small>",
  "<b>Blood</b><br/><small>A healthy human body contains between five and six quarts of blood. Bloody right they do!</small>",
  "<b>Board Games</b><br/><small>Games have been played for thousands of years. Some games of Monopoly just SEEM that long.</small>",
  "<b>Body Odor</b><br/><small>Over $1.6 billion is spent each year on antiperspirants in the United States. That stinks!</small>",
  "<b>Body Piercing</b><br/><small>YOU STUCK WHAT? WHERE?</small>",
  "<b>Body Surfing</b><br/><small>When you're too cheap to buy a surfboard.</small>",
  "<b>Bonbons</b><br/><small>Sweets for the sweet ...</small>",
  "<b>Bongos</b><br/><small>Small drums played with the fingers. Used in Latin American and African music. The choice of American beat poets.</small>",
  "<b>Bottled Water</b><br/><small>How much are you willing to pay for something you can get for free?</small>",
  "<b>Boxing</b><br/><small>An ancient and honorable sport - not just for boys anymore ...</small>",
  "<b>Boy Scouts</b><br/><small>International organization for boys and young men founded in England in 1908, to foster character, citizenship and outdoor life.</small>",
  "<b>Boyfriends</b><br/><small>\"My boyfriend's back and you're gonna be in trouble.\" - The Angels</small>",
  "<b>Brad Pitt</b><br/><small>1963- , American actor and heart-throb.</small>",
  "<b>Brain Surgeons</b><br/><small>Hey, it ain't brain surgery ... oh ... wait a second ...</small>",
  "<b>Brains</b><br/><small>Vital to human existence and mad scientists.</small>",
  "<b>Britney Spears</b><br/><small>1981-, American singer. From mouseketeer to international pop star.</small>",
  "<b>Broadway</b><br/><small>The New York theater district. \"They say the neon lights shine bright on Broadway.\" -Barry Mann</small>",
  "<b>Bruce Willis</b><br/><small>1955- , Diehard American action movie star who has moonlighted on TV. He also starred in Pulp Fiction, Armageddon and The Sixth Sense.</small>",
  "<b>Bubble Gum</b><br/><small>Crack it, snap it, pop it, and blow it!</small>",
  "<b>Bubbles</b><br/><small>\"Tiny bubbles, in the wine/ Tiny bubble make me feel fine ...\" -Don Ho</small>",
  "<b>Bullwinkle</b><br/><small>As in the cartoon \"The Adventures of Rocky and Bullwinkle\" - the moose half of moose and squirrel.</small>",
  "<b>Bumper Stickers</b><br/><small>Your personal billboard!</small>",
  "<b>Bungee Jumping</b><br/><small>Another sport hanging on by a thread.</small>",
  "<b>Buying A House</b><br/><small>If only we had the money, we could get a mortgage.</small>",
  "<b>Cabbage</b><br/><small>From the French word caboche, meaning \"big head.\"</small>",
  "<b>Cactus</b><br/><small>Require little care and exhibit bizarre forms. As such, they are often mistaken for Survivalists.</small>",
  "<b>California</b><br/><small>Sacramento is its capital, Los Angeles its largest city. Here we come.</small>",
  "<b>Camping Trip</b><br/><small>When you just have to get s'more nature.</small>",
  "<b>Canada</b><br/><small>Federated country of North America. The Great White North - eh?</small>",
  "<b>Canadians</b><br/><small>How many Canadians does it take to screw in a lightbulb? Fifteen. Fourteen to chip it out of the ice, and one to screw it in.</small>",
  "<b>Captain Kirk</b><br/><small>Fictional starship captain. \"Beam me up Scotty, there is no intelligent life on this planet!\" - bumper sticker, 1980s</small>",
  "<b>Car Bombs</b><br/><small>Not including the Ford Pinto, of course.</small>",
  "<b>Car Horns</b><br/><small>Blow it, buddy!</small>",
  "<b>Carl Sagan</b><br/><small>1934-96, American astronomer and pioneer exobiologist. Touched many lives. Billions and billions of them.</small>",
  "<b>Carnival Workers</b><br/><small>Step right up ...</small>",
  "<b>Cary Grant</b><br/><small>1904-86, British-born American actor known for his debonair manner. He can be found North by Northwest.</small>",
  "<b>Casablanca</b><br/><small>The largest city in Morocco, and one heck of a good movie. \"Of all the gin joints in all the towns in all the world...\"</small>",
  "<b>Casinos</b><br/><small>Slots and slots of fun.</small>",
  "<b>Castles</b><br/><small>Kings, queens, knights in shining armor, and little square hamburgers.</small>",
  "<b>Caves</b><br/><small>Stalactites, stalagmites. Which go up and which go down?</small>",
  "<b>Celine Dion</b><br/><small>1968-, Canadian singer whose heart will go on, and on ...</small>",
  "<b>Cell Phones</b><br/><small>Get off the phone or get off the road!</small>",
  "<b>Cesar Chavez</b><br/><small>1927-93, American labor leader who led the 1965 nationwide boycott of California grapes ... a bunch of sour grapes!</small>",
  "<b>Chain Letters</b><br/><small>Send this game to ten of your friends and good luck will follow. Honest!</small>",
  "<b>Chains</b><br/><small>Gold or iron: name your shackles.</small>",
  "<b>Challenger Explosion</b><br/><small>\"Without a wish, without a will/ I stood upon that silent hill/ and stared into the sky ...\" - Ralph Hodgeson</small>",
  "<b>Chameleons</b><br/><small>The chameleon is a lizard that changes color when frightened -or is that a politician?</small>",
  "<b>Charging Rhinos</b><br/><small>How do you stop a rhino from charging? Take away its credit cards.</small>",
  "<b>Cheesecake</b><br/><small>A really tasty dish.</small>",
  "<b>Cher</b><br/><small>1946- , American singer and actor, she makes aging look good.</small>",
  "<b>Chicago</b><br/><small>Third largest city in the United States. Our kind of town.</small>",
  "<b>Chicken Pox</b><br/><small>Infectious disease usually contracted in childhood. Just don't scratch 'em!</small>",
  "<b>Chickens</b><br/><small>From incubator to rotisserie in 56 days! Run, chicken, run!</small>",
  "<b>Chimpanzees</b><br/><small>Sure, they're related to us; but they don't write, and they NEVER call!</small>",
  "<b>China</b><br/><small>The most populous country in the world. More than one-fifth of the world's total population lives within its borders.</small>",
  "<b>Chinatown</b><br/><small>International travel, just around the corner.</small>",
  "<b>Choir Boys</b><br/><small>They sound angelic, but ...</small>",
  "<b>Chorus Girls</b><br/><small>Long legs and high kicks!</small>",
  "<b>Cigarette Burns</b><br/><small>Another reason to give up smoking.</small>",
  "<b>Cigarettes</b><br/><small>Mind if I smoke?</small>",
  "<b>Cinco de Mayo</b><br/><small>Marks the victory of the Mexican Army over the French at the Battle of Puebla, in 1862.</small>",
  "<b>Cindy Crawford</b><br/><small>1966- , American Supermodel. What dreams are made of.</small>",
  "<b>Clark Gable</b><br/><small>1901-60, American film actor, noted as a romantic lead. Frankly, my dear, he didn't give a damn.</small>",
  "<b>Claude Monet</b><br/><small>1840-1926, French painter, regarded as one of the leaders on the impressionist movement.</small>",
  "<b>Cleaning The Bathroom</b><br/><small>It's YOUR turn!</small>",
  "<b>Cleopatra</b><br/><small>c. 69-30 BC, Queen of Egypt, noted for love affairs with Julius Caesar and Mark Antony, which came back to bite her in the asp.</small>",
  "<b>Clint Eastwood</b><br/><small>1930-, American film actor and director, past mayor of Carmel, California. Has earned fistfuls of dollars.</small>",
  "<b>Clowns</b><br/><small>They would be really funny if they weren't so darn scary.</small>",
  "<b>Cocaine</b><br/><small>Alkaloid obtained from leaves of the coca plant and used as a local anesthetic and abused as a drug.</small>",
  "<b>Cockroaches</b><br/><small>Annoying insects that can survive a nuclear war. Fortunately, they can't survive the heel of your shoe.</small>",
  "<b>Coconuts</b><br/><small>\"Put the lime in the coconut, and drank them both up.\" -Harry Nillson</small>",
  "<b>Cold Pizza</b><br/><small>The breakfast of champions.</small>",
  "<b>Communists</b><br/><small>\"From each, according to their ability, to each according to their need.\" I need a new Ferrari.</small>",
  "<b>Commuting</b><br/><small>The daily grind. And we're not talking coffee.</small>",
  "<b>Computer Hackers</b><br/><small>We didn't mean to shut down the entire government ...</small>",
  "<b>Computers</b><br/><small>British mathematician Charles Babbage worked out the principles of the modern digital computer in the late 1800s.</small>",
  "<b>Confucius</b><br/><small>c. 551-479 BC, K'ung Fu-Tzu, Chinese philosopher and one of the most influential figures in Chinese history.</small>",
  "<b>Conspiracy Theories</b><br/><small>Oh, that was just a coincidence!</small>",
  "<b>Construction Workers</b><br/><small>Hard hats -hard bodies.</small>",
  "<b>Corn On The Cob</b><br/><small>A grain native to the Americas, corn was a staple food for many centuries before corn holders were invented.</small>",
  "<b>Corvettes</b><br/><small>In 1953, Chevrolet introduced the Corverre, the first mass-produced sports car with a fiberglass body. The perfect cure for a midlife crisis.</small>",
  "<b>Count Dracula</b><br/><small>\"I vant to suck your blood!\"</small>",
  "<b>Country Music</b><br/><small>Encompassing styles such as western swing, honky-tonk, bluegrass and rockabilly. Should mention a pickup truck and a dog named \"Bo.\"</small>",
  "<b>Cow-Pies</b><br/><small>When dried, these \"cow chips\" are hurled discus-like over great distances. It's true.</small>",
  "<b>Crazy Horse</b><br/><small>1849?-77, chief of the Oglala Sioux. A leader in the Native American resistance to the westward expansion on the United States.</small>",
  "<b>Creamed Corn</b><br/><small>Eat it, it's good for you.</small>",
  "<b>Crystal Balls</b><br/><small>I see a Green Apple card in your future.</small>",
  "<b>Cuba</b><br/><small>Island republic in the Caribbean, just south of Florida. Beans and rice never tasted so good.</small>",
  "<b>Cults</b><br/><small>They seemed nice ...</small>",
  "<b>Custer's Last Stand</b><br/><small>1866, Little Big Horn. Very big mistake.</small>",
  "<b>Dandruff</b><br/><small>Dry skin on your scalp? Sounds a bit flaky.</small>",
  "<b>Danielle Steel</b><br/><small>1947- , Prolific romance novelist. \"Suddenly, Stephanie spotted Lance on the beach ...\"</small>",
  "<b>Danny DeVito</b><br/><small>1944- , American television, motion-picture actor, and director. Star of Taxi, Romancing The Stone, Twins, and Get Shorty.</small>",
  "<b>Dark Alleys</b><br/><small>Don't go there!</small>",
  "<b>Darth Vader</b><br/><small>\"Luke ... (wheeze) .. I am ... (wheeze) ... your father ... and you don't write, you don't call ... NOTHING.\"</small>",
  "<b>Dating</b><br/><small>First stage of the human mating ritual.</small>",
  "<b>David Letterman</b><br/><small>1947- , American television entertainer and talk-show host. And ... the Number One reason to watch him (drum roll, please): TOP TEN LISTS!</small>",
  "<b>Daytime TV</b><br/><small>Soap operas, game shows, talk shows and reruns ... is this a great country or what?</small>",
  "<b>Death Valley</b><br/><small>Arid, desolate and hellish region of California. Named by a survivor of an attempted 1849 crossing.</small>",
  "<b>Deer Hunting</b><br/><small>Nooo! Nooooo! Not BAMBI'S MOTHER!</small>",
  "<b>Demi Moore</b><br/><small>1962-, American actor in St. Elmo's Fire, Ghost and GI Jane.</small>",
  "<b>Democrats</b><br/><small>Their symbol is the donkey, or ass. Insert your own joke here.</small>",
  "<b>Denzel Washington</b><br/><small>1954- , American actor known for his powerful roles in such movies as Cry Freedom, Malcolm X, and Mississippi Masala.</small>",
  "<b>Detroit</b><br/><small>The Motor City is the world's foremost automobile manufacturing center, and the tenth largest city in the U.S.</small>",
  "<b>Diamonds</b><br/><small>The hard fact: they are just highly refractive crystalline allotropes.</small>",
  "<b>Discos</b><br/><small>Where you go to catch \"Saturday Night Fever.\"</small>",
  "<b>Discovering America</b><br/><small>1492, Christopher Columbus discovered that America was discovered centuries before he arrived.</small>",
  "<b>Disneyland</b><br/><small>You've just won the \"Apples to Apples(R) Grand Masters Tournament.\" Where're you gonna go?</small>",
  "<b>Divorce</b><br/><small>It's a trial separation that goes to trial.</small>",
  "<b>Doctors</b><br/><small>Over twenty years of education and they're still \"practicing\" medicine?</small>",
  "<b>Doing The Dishes</b><br/><small>You wash, I'll watch.</small>",
  "<b>Dolly Parton</b><br/><small>1967- , American singer, songwriter, and actor. Known as much for her personal style as for her successful career.</small>",
  "<b>Dr. Kevorkin</b><br/><small>1928- , Controversial advocate of doctor-assisted suicide.</small>",
  "<b>Dr. Seuss</b><br/><small>1904-1991, Theodor Suess Geisel , the cat who came up with \"The Cat in the Hat.\"</small>",
  "<b>Driving Off A Cliff</b><br/><small>It was either that or hire someone to do my takes.</small>",
  "<b>Duct Tape</b><br/><small>All-purpose, ... all the time ...</small>",
  "<b>E-Mail</b><br/><small>You've got JUNK mail!</small>",
  "<b>Ear Wax</b><br/><small>A waxy, yellowish substance that protects the ear from dust, bacteria, and from hearing things you don't want to hear.</small>",
  "<b>Earthquakes</b><br/><small>The Richter scale is named after the American seismologist Charles Richter. Did the earth move for you?</small>",
  "<b>Earwigs</b><br/><small>Nocturnal insects with abdominal pincers. Nothing to do with ears or wigs.</small>",
  "<b>East Coast</b><br/><small>From New England to Florida. They're not like folks 'round here ...</small>",
  "<b>Eddie Murphy</b><br/><small>1961-, American comedian, actor, and producer. Best known for his work in 48 Hours, Beverly Hills Cop and on Saturday Night Live.</small>",
  "<b>Eleanor Roosevelt</b><br/><small>1884-1962, first lady, social activist, author, lecturer, and U.S. representative to the United Nations.</small>",
  "<b>Electric Eels</b><br/><small>Slippery and slimy snakelike fishes that emit electrical charges. The shocking truth!</small>",
  "<b>Electricity</b><br/><small>The repulsive or attractive force between two stationary bodies. No problem unless one of those bodies is yours.</small>",
  "<b>Elephants</b><br/><small>The largest living land mammal, with two species: Indian and African. Not counting Dumbo, there are no American elephants.</small>",
  "<b>Elizabeth Taylor</b><br/><small>1932- , American actor, noted for her lush beauty, emotional performances and multiple husbands.</small>",
  "<b>Elvis Presley</b><br/><small>1935-77, American singer and actor and the king of rock-and-roll. His death left the music world all shook up.</small>",
  "<b>Emily Dickinson</b><br/><small>1830-86, American poet, whose lyrics are psychologically astute treatments of love, death, and immortality. So there.</small>",
  "<b>Ernest Hemingway</b><br/><small>1899-1961, American novelist and short-story writer, whose macho style is crisp, laconic and understated.</small>",
  "<b>Europe</b><br/><small>The Old Country ... except to people who live there.</small>",
  "<b>Exorcism</b><br/><small>To ceremoniously expel an evil spirit.</small>",
  "<b>Eyes</b><br/><small>Light-sensitive organ of vision in animals. See?</small>",
  "<b>Falling Down</b><br/><small>\"What we call failure is not the falling down, but the staying down.\" -Mary Pickford</small>",
  "<b>Family Reunions</b><br/><small>Just to remind you why you moved away in the first place ...</small>",
  "<b>Family Vacations</b><br/><small>Dad? Dad? Are we there yet? Are we there yet? Are we? Huh? Dad?</small>",
  "<b>Family Values</b><br/><small>Often said but seldom understood.</small>",
  "<b>Fast Food</b><br/><small>You want fries with that?</small>",
  "<b>Feathers</b><br/><small>Which weighs more, a pound of feathers or a pound of rocks?</small>",
  "<b>Feminists</b><br/><small>Political and social activists who support selected women's causes.</small>",
  "<b>Festering Wounds</b><br/><small>Quit picking at that!</small>",
  "<b>Fidel Castro</b><br/><small>1927-, Cuban revolutionary and Communist dictator since 1976. He earned a PhD in law in 1950.</small>",
  "<b>Firefighters</b><br/><small>Emperor Augustus instituted a corps of fire-fighting \"watchmen\" in 24 B.C. Nero, on the other hand, fiddled while Rome burned.</small>",
  "<b>Firestorms</b><br/><small>Some severe wildfires require more than 10,000 firefighters. And, wouldn't ya know it, some idiot parked in front of the hydrant!</small>",
  "<b>Fireworks</b><br/><small>Includes firecrackers, Roman candles, and bottle rockets. It's all fun until someone loses an eye ... and a nose ... and an arm ...</small>",
  "<b>First Man On The Moon</b><br/><small>July 20, 1969. \"That's one small step for a man, one giant leap for mankind.\" -Neil A. Armstrong</small>",
  "<b>Flipper</b><br/><small>American television dolphin of the 1960's ... like Lassie, only wetter.</small>",
  "<b>Fly Fishing</b><br/><small>... if you can\"t catch flies any OTHER way ...</small>",
  "<b>Flying Monkeys</b><br/><small>The reason why \"The Wizard Of Oz\" still gives us nightmares.</small>",
  "<b>Forest Fires</b><br/><small>\"Only YOU can prevent forest fires.\" The heat is on!</small>",
  "<b>Fort Knox</b><br/><small>American military post in Kentucky, containing the greater part of the gold reserve of the U.S. government.</small>",
  "<b>Fourth Of July</b><br/><small>\"Independence Day\" in the United States. \"Thank Goodness We Got Rid of Them Day\" in Britain.</small>",
  "<b>Frank Lloyd Wright</b><br/><small>1867-1959, pioneering American architect. Considered one of the greatest designers of the 20th century.</small>",
  "<b>Frank Sinatra</b><br/><small>1915-98, the greatest American pop singer of his generation, award winning film and television actor. Do-be do-be do, baby.</small>",
  "<b>Freckles</b><br/><small>No matter what they tell you, freckles won't grow together to form a great-looking tan.</small>",
  "<b>Freedom</b><br/><small>Express yourself!</small>",
  "<b>French Wines</b><br/><small>The perfect complement to an overpriced meal.</small>",
  "<b>Fresh Water Pearls</b><br/><small>String them along ...</small>",
  "<b>Friction</b><br/><small>Resistance to the motion of a body in contact with another body ... any body will do.</small>",
  "<b>Fund Raising</b><br/><small>Hello ... my name is Jonathan, would you like to buy some fruit, magazines, candy bars, wreaths, pizzas ... ?</small>",
  "<b>Funerals</b><br/><small>\"He who dies with the most toys is, nonetheless, still dead.\" - Anonymous</small>",
  "<b>Fur</b><br/><small>The characteristic covering of mammals and people with money.</small>",
  "<b>Fuzz</b><br/><small>Lint ... Policemen ... Whatever ...</small>",
  "<b>Gall Bladder</b><br/><small>Where excess bile is stored. Stored for what, we don't know.</small>",
  "<b>Gang Members</b><br/><small>\"When you're a Jet, you're a Jet all the way...\" -West Side Story</small>",
  "<b>Garrison Keillor</b><br/><small>1942- , American author and radio star. He shares the Midwest perspective with 2.6 million listeners each week on A Prairie Home Companion.</small>",
  "<b>Garth Brooks</b><br/><small>1962- , American country music singer and songwriter. He's got friends in low places.</small>",
  "<b>Geishas</b><br/><small>Japanese women training in traditional singing, dancing, and entertaining. Of course, you would never recognize them without all that make-up.</small>",
  "<b>Gen. George S. Patton</b><br/><small>1885-1945, the commander of the American Third Army during World War II. -a.k.a. Olf Blood and Guts</small>",
  "<b>Genetic Engineering</b><br/><small>What DO you get when you cross a monkey with a potato?</small>",
  "<b>George W. Bush</b><br/><small>1946- , 43rd president of the United States. The second time ever that the son of a former president was elected to the office.</small>",
  "<b>George Washington</b><br/><small>1732-99, First President of the United States. He chopped down a cherry tree to make false teeth, or something like that ...</small>",
  "<b>Georgia O'Keeffe</b><br/><small>1887-1986, American abstract painter known for her still life compositions. Her skull paintings prove that beauty is more than skin deep.</small>",
  "<b>Getting A Hug</b><br/><small>Hmmmm ... nice.</small>",
  "<b>Ghost Towns</b><br/><small>Population unknown.</small>",
  "<b>Ghosts</b><br/><small>Nonmaterial embodiments or the essence of organisms (mostly human beings). Quite spirited</small>",
  "<b>Giant Squid</b><br/><small>Going fishing for giant squid? Nautilus I have to ...</small>",
  "<b>Gila Monsters</b><br/><small>The largest, and only poisonous lizard found in the United States.</small>",
  "<b>Gingko Trees</b><br/><small>An Asiatic tree, Gingko biloba, known for its fan shaped leaves. We can't remember what it's good for.</small>",
  "<b>Ginseng</b><br/><small>Common name for plants of the ginseng family, source of a stimulant and a supposed aphrodisiac.</small>",
  "<b>Girl Scouts</b><br/><small>I'll take six boxes of Thin Mints and three of the ... you know, the kind with the peanut butter.</small>",
  "<b>Girlfriends</b><br/><small>Girlfriend - let's talk!</small>",
  "<b>Giving A Hug</b><br/><small>\"One may give without loving; but none can love without giving.\" -Anonymous</small>",
  "<b>Glaciers</b><br/><small>It'll be a cold day when we see THEM again ...</small>",
  "<b>Glazed Donuts</b><br/><small>If you're going to be late, take a box of donuts.</small>",
  "<b>Global Warming</b><br/><small>Is it hot in here, or is it just me?</small>",
  "<b>Going To Church</b><br/><small>Weddings, funerals, bazaars, and bingo!</small>",
  "<b>Going To Grandma's</b><br/><small>\"Grandmother, what big teeth you have!\" -Little Red Riding Hood</small>",
  "<b>Going To School</b><br/><small>Secondary education? It's elementary.</small>",
  "<b>Going To The Dentist</b><br/><small>This won't hurt a bit ...</small>",
  "<b>Going To The Gym</b><br/><small>No pain, no gain.</small>",
  "<b>Gold Chains</b><br/><small>The more, the better.</small>",
  "<b>Goldfish</b><br/><small>The pet, the carnival prize, or the snack cracker.</small>",
  "<b>Golf-Ball-Sized Hail</b><br/><small>... which is almost as impressive as hail-sized golf balls ...</small>",
  "<b>Grace Kelly</b><br/><small>1929-82, Princess of Monaco and American film star of Dial M for Murder, Rear Window, and To Catch a Thief. Always chic, always elegant.</small>",
  "<b>Graffiti</b><br/><small>Art in a can. We\"re drawn to it.</small>",
  "<b>Grass Skirts</b><br/><small>Hula loves you, baby?</small>",
  "<b>Grave Robbers</b><br/><small>Famous for their bodies of work.</small>",
  "<b>Gravity</b><br/><small>In 1684, the law of gravitation was formulated by English physicist Sir Isaac Newton, who recognized the gravity of the situation.</small>",
  "<b>Greenpeace</b><br/><small>International organization dedicated to preserving the Earth's natural resources, and its diverse plant and animal life.</small>",
  "<b>Gym Teachers</b><br/><small>\"I am a Physical Education Teacher. Call me a gym teacher again and you can drop and give me ten!\"</small>",
  "<b>Hair Transplants</b><br/><small>Oh, it looks so natural ...</small>",
  "<b>Hairballs</b><br/><small>Cough it up, kitty ...</small>",
  "<b>Halloween</b><br/><small>October 31, the eve of All Saints' Day, celebrated with costumes, treats, and scary stuff. Not just for kids any more!</small>",
  "<b>Hand Grenades</b><br/><small>Close only counts in horseshoes and hand grenades!</small>",
  "<b>Handcuffs</b><br/><small>\"You have the right to remain silent...\"</small>",
  "<b>Handguns</b><br/><small>Source of a never-ending controversy as to how to get them out of the hands of the bad guys and into the hands of the good guys.</small>",
  "<b>Hangnails</b><br/><small>We've fingered the cause of the pain.</small>",
  "<b>Having A Baby</b><br/><small>\"Rock-a-bye baby, on the tree top ...\" Who would put a kid on a tree top?</small>",
  "<b>Having An Operation</b><br/><small>What a cutup! A real stitch.</small>",
  "<b>Hawaii</b><br/><small>The eight islands that make up America's 50th state entered the Union on August 21, 1959.</small>",
  "<b>Helen Keller</b><br/><small>1880-1968, American author and lecturer who overcame deafness and blindness with the help of her companion, Anne Sullivan.</small>",
  "<b>Hiccups</b><br/><small>How do you, hic, get em? How do you, hic, get rid of \"em?</small>",
  "<b>High School Football</b><br/><small>The whole ten yards!</small>",
  "<b>High School Reunions</b><br/><small>See also: \"root canal, as fun as ...\"</small>",
  "<b>Hillary Rodham Clinton</b><br/><small>1947- , New York Senator, lawyer, and former American First Lady.</small>",
  "<b>Hiroshima</b><br/><small>1945 - \"I am become death, the destroyer of worlds\" - J. Robert Oppenheimer, on the detonation of the first atmoic bomb.</small>",
  "<b>HMOs</b><br/><small>Heath Maintenance Organizations. Here's to your health ...</small>",
  "<b>Hockey</b><br/><small>Did you hear about the big fight last night? All of a sudden, a hockey game broke out!</small>",
  "<b>Hollywood</b><br/><small>Motion picture and television industry center of the world. Hooray for Hollywood!</small>",
  "<b>Homeless Shelters</b><br/><small>In the United States, nearly three-quarters of the help for the homeless comes from the private sector, mostly from church soup kitchens.</small>",
  "<b>Homer Simpson</b><br/><small>Fictional cartoon character created by Matt Groening. D'oh!</small>",
  "<b>Homework</b><br/><small>Something to do during comercials.</small>",
  "<b>Hooligans</b><br/><small>\"Hey! Kids! Get outta my yard!\"</small>",
  "<b>Horseback Riding</b><br/><small>WHOAAA!!!</small>",
  "<b>Hot Lava</b><br/><small>There's no better way to serve it.</small>",
  "<b>House Guests</b><br/><small>How many visitors does it take to drive you crazy? Go on -take a guest!</small>",
  "<b>Hummingbirds</b><br/><small>Why do hummingbirds hum? Because they don't know the words ... ... da-dum, dum!</small>",
  "<b>Humphrey Bogart</b><br/><small>1899-1957, American film actor, starred in such classics as The Maltese Falcon and Casablanca. \"Here's looking at you kid.\"</small>",
  "<b>Icebergs</b><br/><small>May reach 300 to 500 feet above the oceans's surface. Ask the captain of the Titanic about the 90 percent that's UNDER water.</small>",
  "<b>In A Coma</b><br/><small>A deep, prolonged state of unconsciousness ... sometimes you just feel that way.</small>",
  "<b>Incense</b><br/><small>Incense is better than no sense at all.</small>",
  "<b>India</b><br/><small>The world's seventh largest country by area, but the second most populous, with one billion people.</small>",
  "<b>Indiana Jones</b><br/><small>Fictional archeologist and action hero. Proof that a good hat and a whip can take you a long way.</small>",
  "<b>Industrial Revolution</b><br/><small>The first Industrial Revolution occurred in Great Britain at the end of the 1700s. The second came with the invention of the \"Clapper.\"</small>",
  "<b>Infomercials</b><br/><small>One of these days, one of them may even say something informative.</small>",
  "<b>Inside The Sun</b><br/><small>Consisting mostly of hydrogen, the temperature reaches almost 16,000,000 K (about 29,000,000 F).</small>",
  "<b>Intellectuals</b><br/><small>They think they're so smart.</small>",
  "<b>Ireland</b><br/><small>Island of the British Isles, west of Great Britain. Known for its distinctive traditional dance and music.</small>",
  "<b>Israel</b><br/><small>Located on the Mediterranean, the state of Israel was reated by a 1948 U.N. mandate.</small>",
  "<b>Italy</b><br/><small>European Republic, shaped like a boot - a very fashionable boot.</small>",
  "<b>Jack Nicholson</b><br/><small>1937- , American motion-picture actor of \"Chinatown,\" \"Terms Of Endearment\" and \"The Shining.\" He's as good as it gets!</small>",
  "<b>Jack The Ripper</b><br/><small>Accused of murdering six women in 1888, and suspected in other murders. Still at large.</small>",
  "<b>Jackie Chan</b><br/><small>1954-, actor, director, martial artist. Screen name, Sing Lung, means \"Becoming the Dragon.\" That's \"MISTER Becoming the Dragon\" to you!</small>",
  "<b>Jacques Cousteau</b><br/><small>1910-97, French naval officer, marine explorer, and author. Best known as a documentary filmmaker.</small>",
  "<b>Jamaica</b><br/><small>Third largest island of the Greater Antilles, south of Cuba. Tropical climate, reggae music, and jerk cooking.</small>",
  "<b>James Bond</b><br/><small>Fictional British secret agent created by English author Ian Fleming. Shaken, but never stirred.</small>",
  "<b>James Dean</b><br/><small>1931-55, American actor of film, stage, and television. His role in Rebel Without a Cause helped define \"cool.\"</small>",
  "<b>Japan</b><br/><small>An Asian constitutional monarchy. The capital city is Tokyo. Let's see ... sushi, Godzilla, earthquakes ...</small>",
  "<b>Japanese</b><br/><small>How many Japanese does it take to screw in a light bulb? Who needs light bulbs when you've got OUR new technology!</small>",
  "<b>Jelly Beans</b><br/><small>Well, as long as we HAVE to eat our vegetables ...</small>",
  "<b>Jennifer Lopez</b><br/><small>1970-, American singer and actor of Selena, Money Train, and Maid In Manhattan.</small>",
  "<b>Jerry Springer</b><br/><small>1944- , controversial talk-show host. Don't those people know that millions of us are watching?</small>",
  "<b>Jesse Jackson</b><br/><small>1941-, American civil rights leader. Named to \"The Gallup List of Ten Most Respected by Americans\" for ten years.</small>",
  "<b>Jesse Ventura</b><br/><small>1951-, wrestler, Navy Seal, and former governor of Minnesota. Author of I Ain't Got Time To Bleed.</small>",
  "<b>Jim Carrey</b><br/><small>1962- , Canadian comedian and actor. Famous for outrageous faces, and dumb and dumber characters.</small>",
  "<b>Jimmy Stewart</b><br/><small>1908-97, America's favorite self-image. Mr. Smith Goes to Washington, Rear Window, Vertigo, and It's a Wonderful Life, ... and it probably was.</small>",
  "<b>Joan Of Arc</b><br/><small>1412-31, patron saint of France who decisively turned the tide of the Hundred Years' War, which really burned her up.</small>",
  "<b>Jodie Foster</b><br/><small>1962- , American actor began her career on Mayberry, R.F.D. and went on to win Academy Awards for The Accused and Silence Of The Lambs.</small>",
  "<b>John F. Kennedy</b><br/><small>1917-63, 35th president of the US. \"Ask not what your country can do for you; ask what you can do for your country.\"</small>",
  "<b>John Glenn</b><br/><small>1921- , The first U.S. astronaut to orbit the earth in 1962, and a U.S. Senator. Never too old to shoot for the moon!</small>",
  "<b>John Philip Sousa</b><br/><small>1854-1932, American bandmaster and composer of Stars and Stripes Forever. Known as \"The March King.\"</small>",
  "<b>John Travolta</b><br/><small>1954 - , American actor of \"Welcome Back, Kotter,\" \"Grease,\" \"Saturday Night Fever\" and \"Pulp Fiction.\" That man can dance!</small>",
  "<b>Judge Judy</b><br/><small>Ms. Sheindlin presides over real-life cases on this TV courtroom show. \"I'm the boss, applesauce!\"</small>",
  "<b>Julia Roberts</b><br/><small>1967-, American actor and Pretty Woman. Also starred in Steel Magnolias, My Best Friend's Wedding, and Erin Brockovich.</small>",
  "<b>Junk Mail</b><br/><small>Contests, credit card applications, solicitations and political ads.</small>",
  "<b>Jupiter</b><br/><small>Story Problem: If one year on Jupiter equals 11.86 Earth years, and one day equals 9.92 Earth hours, how many Earth hours are there in a Jupiter year?</small>",
  "<b>Katherine Hepburn</b><br/><small>1909-2003, American actor and winner of four Academy Awards. She starred in such classics as The African Queen.</small>",
  "<b>Keanu Reeves</b><br/><small>1964- , American actor of Bill And Ted's Excellent Adventure, The Matrix and Speed. Keanu means \"cool breeze over the mountains.\"</small>",
  "<b>Killer Whales</b><br/><small>Black and white predatory whales. Boy, can they sing!</small>",
  "<b>Kilts</b><br/><small>If Mel Gibson can wear one, so can you.</small>",
  "<b>King Arthur</b><br/><small>Legendary British king best known for Camelot and round tables.</small>",
  "<b>King Henry VIII</b><br/><small>1491-1547, King of England, and founder of the Church of England. Six wives, no waiting.</small>",
  "<b>Knock-Knock Jokes</b><br/><small>Who's there?</small>",
  "<b>Labor Unions</b><br/><small>Look for the Union label. And, while you're at it, look for Jimmy Hoffa ...</small>",
  "<b>Large Mouth Bass</b><br/><small>Oh, please, let it not sing ...</small>",
  "<b>Las Vegas</b><br/><small>The first casino opened in Las Vegas in 1946. Las Vegas ... or it that Lost Wages?\"</small>",
  "<b>Lawyers</b><br/><small>We'd throw some joke in here, but we're afraid of getting sued.</small>",
  "<b>Leaf Blowers</b><br/><small>Toro, Toro, Toro!</small>",
  "<b>Leather</b><br/><small>Animal hide. Leather you like it or not.</small>",
  "<b>Leeches</b><br/><small>Any mention of lawyers, agents, or reporters would be FAR too easy ...</small>",
  "<b>Lemons</b><br/><small>When life gives you lemons, make lemonade ... or, in the case of a car, take it back. There's a law, you know!</small>",
  "<b>Lenin's Tomb</b><br/><small>We'd love to visit Lenin's Tomb, but it's probably just another communist plot.</small>",
  "<b>Leonardo Da Vinci</b><br/><small>1452-1519, Florentine artist, sculptor, architect, engineer, scientist, and all-around smartypants.</small>",
  "<b>Lightning</b><br/><small>Electrical discharge between rain clouds, or between a rain cloud and the earth, or between a rain cloud and an idiot with a kite.</small>",
  "<b>Loan Sharks</b><br/><small>As dangerous as \"Jaws\", but without the charisma.</small>",
  "<b>Lobster</b><br/><small>Crustaceans closely related to freshwater crayfishes. Market price.</small>",
  "<b>Local Police</b><br/><small>They know who you are and they know where you live.</small>",
  "<b>Log Cabins</b><br/><small>Among the many Americans born in log cabins were Preisdents Harrison, Lincoln, and Grant. Just pass the maple syrup.</small>",
  "<b>Lollipops</b><br/><small>Sucker!</small>",
  "<b>London</b><br/><small>Founded even before the Romans reached England's shores, now the capital of Great Britain.</small>",
  "<b>Looking For A Job</b><br/><small>Will work for fool ...</small>",
  "<b>Los Angeles</b><br/><small>LA LA Land.</small>",
  "<b>Losing Your Job</b><br/><small>They just didn't understand me!</small>",
  "<b>Lucille Ball</b><br/><small>1911-89, American actor and comedian. You love Lucy? I love Lucy.</small>",
  "<b>Machine Guns</b><br/><small>Automatic, rapid-fire, repeating weapons. The Gatling gun was used as early as the American Civil War.</small>",
  "<b>Mad Cow Disease</b><br/><small>Degenerative brain disorder in cattle. The reason they don't know enough to come in out of the rain?</small>",
  "<b>Madame Curie</b><br/><small>1867-1934, French chemist and physicist who won a Nobel Prize for her work on radiation. Fun fact: A \"curie\" is a unit of radioactivity.</small>",
  "<b>Madonna</b><br/><small>1958-, American singer, songwriter, actor, writer, and 1980s pop icon. Blond Ambition.</small>",
  "<b>Magic Tricks</b><br/><small>\"Nothin' up my sleeve ...\" - Bullwinkle</small>",
  "<b>Mahatma Gandhi</b><br/><small>1869-1948, Indian leader and philosopher who preached nonviolence. Was assassinated for his efforts.</small>",
  "<b>Manhattan</b><br/><small>I'll take Manhattan!.</small>",
  "<b>Mardi Gras</b><br/><small>Fat Tuesday marks the final day before the Christian fast of Lent, a 40-day period of self-denial and abstinence. SO LET'S PARTY!</small>",
  "<b>Marilyn Monroe</b><br/><small>1926-62, American movie star, pinup and sex symbol. Just ask the Kennedys.</small>",
  "<b>Mark Twain</b><br/><small>1835-1910, American writer and humorist, best known for the adventures of Tom Sawyer and Huckleberry Finn.</small>",
  "<b>Marriage</b><br/><small>If love and marriage go together like a horse and carriage ... who's the horse?</small>",
  "<b>Mars</b><br/><small>The fourth planet from the sun. Where men come from.</small>",
  "<b>Martha Stewart</b><br/><small>1941-, television personality, magazine editor, and author. Domestic arts are her stock-in-trade.</small>",
  "<b>Martin Luther King, Jr.</b><br/><small>1929-68, American civil rights leader and advocate of nonviolent resistance. Was assassinated for his efforts.</small>",
  "<b>Meat Cleavers</b><br/><small>No relation to Ward, June, or the Beaver ...</small>",
  "<b>Meatloaf</b><br/><small>Large and intimidating -the dish not the singer!</small>",
  "<b>Meg Ryan</b><br/><small>1961- , American actor and girl-next-door star of When Harry Met Sally, Sleepless In Seattle, and You've Got Mail.</small>",
  "<b>Mel Gibson</b><br/><small>1956-, Australian actor. Known for The Road Warrior, Braveheart and :eatha; Weapon I, II, III, IV ...</small>",
  "<b>Men</b><br/><small>REAL Men.</small>",
  "<b>Men In Black</b><br/><small>We're not here. You don't see us. The government did NOT send us.</small>",
  "<b>Meryl Streep</b><br/><small>1959-, accomplished American actor, two-time Oscar winner, with over a dozen Academy Award nominations.</small>",
  "<b>Mexico</b><br/><small>Federal republic in North America. The capital and largest city is Mexico City.</small>",
  "<b>Mice</b><br/><small>\"The best-laid schemes o' mice an' men ...\" -Robert Burns</small>",
  "<b>Michael Jackson</b><br/><small>1958-, American popular singer, dancer, and songwriter. Welcome to Neverland.</small>",
  "<b>Michael Jordon</b><br/><small>1963- , American professional basketball legend, led Chicago to six world championships. No bull.</small>",
  "<b>Michelangelo</b><br/><small>1475-1564, inspired Italian sculptor, architect, painter, and poet. A REAL Renaissance man.</small>",
  "<b>Michelle Pfeiffer</b><br/><small>1957-, American actor whose career began with Grease 2. She'd like us to forget that but remember her Oscar nominations.</small>",
  "<b>Microsoft</b><br/><small>A leading American software company. We'd say more but we don't want to monopolize your time ...</small>",
  "<b>Midlife Crisis</b><br/><small>\"Here comes your 19th nervous breakdown ...\" -The Rolling Stone</small>",
  "<b>Mike Tyson</b><br/><small>1966- , American heavyweight boxer. Lend him your ear ...</small>",
  "<b>Miles Davis</b><br/><small>1926-91, innovative, influential, and respected American jazz trumpter player and band layer.</small>",
  "<b>Milk</b><br/><small>Three glasses a day will give you ... the gratitude of the dairy industry.</small>",
  "<b>Milk Duds</b><br/><small>Chocolate and caramel candy balls. Tooth extractions at no extra charge!</small>",
  "<b>Mirrors</b><br/><small>And now, a moment for reflection.</small>",
  "<b>Mold</b><br/><small>Fuzzy growth produced on organic matter by several types of fungi. Particularly attracted to students' refrigerators</small>",
  "<b>Money</b><br/><small>\"The best things in life are free/ But you can give them to the birds and bees/ Just give me money ...\" -Bradford and Gordy</small>",
  "<b>Morticians</b><br/><small>Why do you hang around with THOSE stiffs ...?</small>",
  "<b>Mosquitoes</b><br/><small>They suck.</small>",
  "<b>Motorcycles</b><br/><small>The air in your hair and bugs in your teeth.</small>",
  "<b>Mount Rushmore</b><br/><small>Memorial carved into the side of the Black Hills in South Dakota. Heads above all other monuments.</small>",
  "<b>MTV</b><br/><small>\"Video killed the radio star.\" -The Buggles</small>",
  "<b>Mud</b><br/><small>Water. Dirt. You do the math.</small>",
  "<b>Mudslides</b><br/><small>Chocolate drink or natural disaster ... both occur frequently in California.</small>",
  "<b>Muhammad Ali</b><br/><small>1942- , American heavyweight boxing champion. \"Floats like a butterfly, stings like a bee.\"</small>",
  "<b>Musicals</b><br/><small>South Pacific, The King and I, The Sound of Music, A Chorus Line, Cats, Rent ...</small>",
  "<b>My 16th Birthday</b><br/><small>Dad, can I have the keys to the car, please?</small>",
  "<b>My Bank Account</b><br/><small>Speaking of theoretical mathematics and unreal numbers ...</small>",
  "<b>My Bathroom</b><br/><small>\"The bathroom was drenched with their splashings\" -Aldous Huxley</small>",
  "<b>My Bedroom</b><br/><small>\"No one knows what goes on behind closed doors.\" -Charlie Rich</small>",
  "<b>My Body</b><br/><small>Mine is a temple. Specifically, the Temple of Doom ...</small>",
  "<b>My Boss</b><br/><small>... is an idiot. You know it; we know it.</small>",
  "<b>My Dreams</b><br/><small>\"What dreams may come ...\" -Shakespeare's Hamlet</small>",
  "<b>My Family</b><br/><small>They'll drive you nuts. As long as you do the same to them, it's all even.</small>",
  "<b>My First Kiss</b><br/><small>Sparks were flying. Of course, that could have been the braces ...</small>",
  "<b>My Friends</b><br/><small>With friends like there, who needs enemies?</small>",
  "<b>My Future</b><br/><small>\"The future's so bright, I gotta wear shades ...\" -Timbuk-3</small>",
  "<b>My Hair</b><br/><small>Hair today, gone tomorrow ...</small>",
  "<b>My High School Prom</b><br/><small>As if adolescence isn't awkward and painful enough ...</small>",
  "<b>My Job</b><br/><small>Love it or leave it.</small>",
  "<b>My Love Life</b><br/><small>\"All you need is love ...\" -The Beatles</small>",
  "<b>My Mind</b><br/><small>It's a terrible thing to waste.</small>",
  "<b>My Neighborhood</b><br/><small>\"Please, won't you be my neighbor?\" -Fred Rogers</small>",
  "<b>My Past</b><br/><small>What's past is past ... unless you're a politician ...</small>",
  "<b>My Personality</b><br/><small>\"I'm good enough, smart enough and, gosh darn it, people like me.\" -Stewart Smalley played by Al Franken</small>",
  "<b>My Refrigerator</b><br/><small>It's a science experiment!</small>",
  "<b>Napoleon Bonaparte</b><br/><small>1769-1821, Emperor of France. Met his Waterloo at the Battle of Waterloo. The name should have tipped him off ...</small>",
  "<b>NASCAR</b><br/><small>Stock car racing began after World War II, breaking records for speed and for the number of advertisements on a single jacket.</small>",
  "<b>Neil Simon</b><br/><small>1927-, American producer, playwright, and screenwriter of The Odd Couple, Biloxi Blues, The Sunshine Boys, California Suite, and many more.</small>",
  "<b>New Orleans</b><br/><small>The Big Easy.</small>",
  "<b>New Shoes</b><br/><small>Make you feel like dancing ...</small>",
  "<b>New York City</b><br/><small>America's most populous city. So good, they named it twice.</small>",
  "<b>Niagara Falls</b><br/><small>Niagara Falls was formed about 12,000 years ago, when glaciers retreated north, and honeymooners approached from the south.</small>",
  "<b>Nicholas Cage</b><br/><small>1964- , American actor known for his edgy characters in Leaving Los Vegas, Raising Arizona, and Moonstruck.</small>",
  "<b>Ninjas</b><br/><small>Teenage mutant turtles need not apply.</small>",
  "<b>Nobel Peace Prize</b><br/><small>Established by Alfred Nobel. Swedish industrialist and inventor of dynamite. Led to an explosion of peace efforts.</small>",
  "<b>Noisy Neighbors</b><br/><small>WHAT? I CAN'T HEAR YOU!</small>",
  "<b>Normal Rockwell</b><br/><small>1894-1978, American painter, illustrator and all-around interpreter of small town American life.</small>",
  "<b>Nuclear Power Plants</b><br/><small>\"You've turned a potential Chernobyl into a mere Three Mile Island.\" -Montgomery Burns, \"The Simpsons\"</small>",
  "<b>NYPD</b><br/><small>The New York Police Department. They're so good, they have their own TV show.</small>",
  "<b>Oil Spills</b><br/><small>The American oil tanker, Exxon Valdez, went aground in Prince William Sound, Alaska, Mar. 24, 1989. Slick Move.</small>",
  "<b>Olive Oil</b><br/><small>Derived from fresh ripe fruit, which contain about 20% oil. Better than \"olive\" the other oils.</small>",
  "<b>On-Line Shopping</b><br/><small>Enter your credit card number now. This is a secure site ... Sure it is ...</small>",
  "<b>Oprah Winfrey</b><br/><small>1954- , Television talk show host, actor and all-around American success story.</small>",
  "<b>Oral Surgery</b><br/><small>You said a mouthful.</small>",
  "<b>Oranges</b><br/><small>Face it ... nothing rhymes with orange.</small>",
  "<b>Oxygen</b><br/><small>Oxygen was discovered in 1774. You'd think someone would have noticed it earlier.</small>",
  "<b>Pablo Picasso</b><br/><small>1881-1973, Spanish painter and sculptor, one of the greatest artists of the 20th century. If only he could draw eyes ...</small>",
  "<b>Parenting</b><br/><small>The process of discovering you are becoming just like YOUR parents.</small>",
  "<b>Paris, France</b><br/><small>The governmental, cultural and gastronomic capital of France. Or the world. Just ask the French.</small>",
  "<b>Paying Bills</b><br/><small>Also known as \"Debt Restructuring.\"</small>",
  "<b>Paying Taxes</b><br/><small>Death or Taxes? Do we have to choose right away?</small>",
  "<b>Penguins</b><br/><small>Flightless, aquatic birds that reside in the Southern Hemisphere. All dressed up and no place to go.</small>",
  "<b>Picking Your Nose</b><br/><small>Noses run in our family.</small>",
  "<b>Pigeons</b><br/><small>Birds with small heads, short necks, stout bodies, and an incredible attraction to statues.</small>",
  "<b>Pigs</b><br/><small>Domesticated mammal of the swine family. Thaaa ... thaaa ... that's all, folks!</small>",
  "<b>Piranha</b><br/><small>Carnivorous fish found in rivers of South America. When you feel like a bite ...</small>",
  "<b>Pirates</b><br/><small>\"Yo, ho, yo, ho, a pirate's life for me ...\" - Pirates of the Caribbean</small>",
  "<b>Pit Bulls</b><br/><small>Any of several crossbreeds of bulldogs with terriers. Or, several radio hosts we could mention.</small>",
  "<b>Plane Crashes</b><br/><small>Statistically safer than driving ... unless you crash.</small>",
  "<b>Plastic</b><br/><small>Giant molecules of organic polymeric materials. Bags and bags of the stuff.</small>",
  "<b>Playing Chess</b><br/><small>Has tantalized many of the world's greatest minds for almost 14 centuries. It just confuses the rest of us.</small>",
  "<b>Poison Ivy</b><br/><small>Itching for a walk in the woods?</small>",
  "<b>Pokemon</b><br/><small>Cute cartoon monsters you gotta catch. What you do with them is up to you ...</small>",
  "<b>Pond Scum</b><br/><small>Simple organisms that carry out photosynthesis ... or spammers.</small>",
  "<b>Poodles</b><br/><small>The only breed that is better groomed than their owners.</small>",
  "<b>Popcorn</b><br/><small>Air poppers are for air heads ... I say bring on the butter!</small>",
  "<b>Porsche Boxster</b><br/><small>A two-seat, six cylander roadster - elegant design and superior drivability.</small>",
  "<b>Postal Workers</b><br/><small>\"Neither snow, nor rain, nor heat, nor gloom of night, stays these couriers from the swift completion of their appointed rounds.\"</small>",
  "<b>Power Tools</b><br/><small>\"More power! More power! Argh! Argh!\" -Tim, the Tool Man, Taylor, \"Home Improvement\"</small>",
  "<b>Prince Charming</b><br/><small>The perfect man ... mythical, of course.</small>",
  "<b>Princess Di</b><br/><small>1962-97, beloved English Princess who died in an auto crash. \"Good-bye England's Rose ...\" -Elton John</small>",
  "<b>Pro Wrestling</b><br/><small>They're just faking it. But then, so are we.</small>",
  "<b>Psychiatrists</b><br/><small>\"And how do you feel about that?\"</small>",
  "<b>Psychics</b><br/><small>The Psychic Friends Network went bankrupt in 1997. Perhaps they should have seen it coming ...</small>",
  "<b>Public Radio</b><br/><small>\"Good morning . . . . . This morning . . . . . . . . . . . .we have Wolfgang . . . Amadeus Mozart . . . for your listening pleasure . . .\"</small>",
  "<b>Puff Daddy</b><br/><small>1971- , American rap artist. \"I'll be Missing You\" shot him to stardom; no pun intended.</small>",
  "<b>Pulling Weeds</b><br/><small>It's either this or chemical warfare.</small>",
  "<b>Pumping Iron</b><br/><small>When a great weight needs to be lifted.</small>",
  "<b>Pushups</b><br/><small>Exercises, a type of bra, or the ice cream treat.</small>",
  "<b>Pyramids</b><br/><small>Built by ancient civilizations, found mainly in Egypt, Guatemala, Honduras, Mexico and Peru. Probably the result of some pyramid scheme.</small>",
  "<b>Quentin Terantino</b><br/><small>1963- , Groundbreaking American director and actor. Nice movies, but not nearly enough blood.</small>",
  "<b>Quicksand</b><br/><small>Just don't let it get you down.</small>",
  "<b>Ragweed</b><br/><small>A weed of the genus Ambrosia. Nothing to sneeze at.</small>",
  "<b>Rain</b><br/><small>\"When the rain comes, they run and hide their heads; they might as well be dead.\" -The Beatles</small>",
  "<b>Rainbows</b><br/><small>\"Someday they'll find it/ The Rainbow Connection/ The lovers, the dreamers and me ...\" -Kermit the Frog</small>",
  "<b>Rappers</b><br/><small>PAENTAL ADVISORY EXPLICIT CONTENT Hasn't seemed to hurt sales...</small>",
  "<b>Reading A Good Book</b><br/><small>So many books, so little time.</small>",
  "<b>Recreational Vehicles</b><br/><small>If they're trying to get away from it all, why are they taking it all with them?</small>",
  "<b>Recycling</b><br/><small>More than one million tons of aluminum are NOT recycled each year. Where do you throw your cans?</small>",
  "<b>Red Raspberries</b><br/><small>Worth a few scratches.</small>",
  "<b>Rednecks</b><br/><small>\"You might be a redneck if ...\" -Jeff Foxworthy</small>",
  "<b>Redwood Forests</b><br/><small>\"From the Redwood Forests to the Gulf Stream Waters/ This land was made for you and me.\" -Woody Guthrie</small>",
  "<b>Reggae Music</b><br/><small>This contemporary Caribbean music, originating in Jamaica, remains an influential style of popular music. Ya mon!</small>",
  "<b>Regis Philbin</b><br/><small>1934- , American talk and game show host. Who wants to be a millionaire? Regis, apparently.</small>",
  "<b>Remote Controls</b><br/><small>The world's handiest invention. That is, if you can find it.</small>",
  "<b>Republicans</b><br/><small>A U.S. political party symbolized by an elephant ... and don't forget it!</small>",
  "<b>Richard Nixon</b><br/><small>1913-94, 37th President of the United States and the only president to have resigned from office. At least that's what the tapes say ...</small>",
  "<b>Robert DeNiro</b><br/><small>1943- , Pre-eminent American actor who earned Academy Awards for The Godfather II and Raging Bull. \"Are you looking at me?\"</small>",
  "<b>Road Kill</b><br/><small>Mmmmmm. Them's good eatin'.</small>",
  "<b>Road Trips</b><br/><small>\"Get Your Kicks on Route 66.\" -Nelson Riddle</small>",
  "<b>Robin Williams</b><br/><small>1952- , versatile American comedian and actor. The furriest man in show business.</small>",
  "<b>Rock And Roll -It's here to stay!",
  "Rock Concert</b><br/><small>If it's too loud - you're too old.</small>",
  "<b>Rocket Scientists</b><br/><small>Hey! They're not rocket scie ... oh ... never mind.</small>",
  "<b>Rocky Mountains</b><br/><small>These extend 2,000 miles from northeastern British Columbia to central New Mexico, and keep the Californians away from everyone else ...</small>",
  "<b>Rolling The Car</b><br/><small>You'll flip for this one ...</small>",
  "<b>Roman Numerals</b><br/><small>There's a I in VII chance you'll know them.</small>",
  "<b>Romeo And Juliet</b><br/><small>William Shakespeare's best known play, written in 1595. Youthful love and hasty temperaments.</small>",
  "<b>Root Beer Floats</b><br/><small>Actually, it's the ice cream that floats!</small>",
  "<b>Rosa Parks</b><br/><small>1913-, civil rights icon arrested in 1956 for violating U.S. segregation laws by refusing to give up her bus seat to a white passenger.</small>",
  "<b>Rosie O'Donnell</b><br/><small>1962-, American actor and comedian. She's in a league of her own!</small>",
  "<b>Rubber Gloves</b><br/><small>Just in case ...</small>",
  "<b>Running A Marathon</b><br/><small>26 miles, 385 yards: the distance run by a Greek soldier from the town of Marathon to Athens in 490 BC.</small>",
  "<b>Rush Limbaugh</b><br/><small>1951- , conservative talk-radio personality. Claims to host his radio show with half his brain tied behind his back, just to make it fair.</small>",
  "<b>Russia</b><br/><small>The world's largest country, spanning 11 time zones. Famous for borscht, ballet, chess and vodka -just don't mix them.</small>",
  "<b>Rust</b><br/><small>\"Rust never sleeps.\" -Neil Young</small>",
  "<b>Saddam Hussein</b><br/><small>1937-, dictator of Iraq 1979-2003.</small>",
  "<b>Sailors</b><br/><small>\"In the Navy, you can sail the seven seas ...\" -The Village People</small>",
  "<b>Salads</b><br/><small>Lettuce not knock the vegetarians.</small>",
  "<b>Salsa Dancing</b><br/><small>Popular form of Latin American dance. A little jazz, a little blues, a touch of rock and lots of heat.</small>",
  "<b>Salvador Dali</b><br/><small>1904-89, Spansih artist best known for his dream imagery and surrealism, including the limp watches in The Persistence Of Memory.</small>",
  "<b>Samuel L. Jackson</b><br/><small>1948-, powerful American actor of Pulp Fiction, Jackie Brown, and The Negotiator.</small>",
  "<b>Saturday Cartoons</b><br/><small>Get your blanket, a bowl of cereal and snuggle in for three hours of commercials.</small>",
  "<b>San Francisco</b><br/><small>California's City by the Bay. Where many hearts are left.</small>",
  "<b>Saturn</b><br/><small>Sixth planet from the sun, and the second largest in the solar system. Has a nice ring to it, don't you think?</small>",
  "<b>Scavenger Hunt</b><br/><small>OK kids, here's your list: a marshmallow, a safety pin, a red rubber band, and a moon rock. Go find 'em!</small>",
  "<b>Scene Of The Crime</b><br/><small>It was Colonel Mustard, in the library, with the candlestick.</small>",
  "<b>Schindler's List</b><br/><small>1993 Steven Spielberg film. Powerful real-life story of a Catholic businessman who eventually saved over 1000 Jews in Nazi Poland.</small>",
  "<b>Science Fair Projects</b><br/><small>No human subjects, please!</small>",
  "<b>Science Fiction</b><br/><small>In a galaxy far, far away ...</small>",
  "<b>Screeching</b><br/><small>Please stop.</small>",
  "<b>Sean Connery</b><br/><small>1930- , Accomplished Scottish actor, although best known as the REAL Bond, JAMES Bond ...</small>",
  "<b>Shania Twain</b><br/><small>1965- , Canadian country singer and songwriter. \"Shania\" means \"I'm on my way\" in Ojibwa.</small>",
  "<b>Sharks</b><br/><small>Many species living today are similar to those from 100 million years ago. Because change is scary.</small>",
  "<b>Shopping Mall</b><br/><small>Three-quarters of the North American population visit a shopping mall at least once a month.</small>",
  "<b>Silk</b><br/><small>Produced as a cocoon covering by the silk worm, and used in fine fabrics and textiles.</small>",
  "<b>Silly Putty</b><br/><small>It's putty in your hands!</small>",
  "<b>Skateboarding</b><br/><small>It's just going downhill ... down stairs ... down ramps ...</small>",
  "<b>Skiing</b><br/><small>The Super Giant Slalom: Swiss for \"suicide.\"</small>",
  "<b>Skinheads</b><br/><small>Shaved heads, big boots. Some are Nazis, some are not.</small>",
  "<b>Skunks</b><br/><small>Black and white striped mammals known for their offensive smelling defensive spray.</small>",
  "<b>Skydiving</b><br/><small>Parachute canopies are usually made from nylon fabric that lasts for thousands of jumps - whether the skydiver does or not.</small>",
  "<b>Sleeping Pills</b><br/><small>I remember taking them ... I just ... don't rememmer ... how mamy.</small>",
  "<b>Slivers</b><br/><small>Also known as splinters. The worst ones are under your fingernails.</small>",
  "<b>Sloppy Joes</b><br/><small>My favorite recipe -open the can.</small>",
  "<b>Smithsonian Institution</b><br/><small>Located in Washington, D.C., the largest museum complex in the world. Wouldn't that be a great garage sale?</small>",
  "<b>Snakes</b><br/><small>Surprising, snakes move rapidly without legs. Also surprising, they find OTHER snakes attractive.</small>",
  "<b>Snow</b><br/><small>Transparent ice crystals which form around dust and other small particles. Get my drift?</small>",
  "<b>Social Security</b><br/><small>American program designed to provide income and services in the event of retirement, sickness, disability, death or unemployment.</small>",
  "<b>Socks</b><br/><small>\"Black socks, they never get dirty, the longer you wear them the stronger they get.\" -Bill Harley</small>",
  "<b>South Africa</b><br/><small>Two oceans, rugged mountains, traditional villages, game sanctuaries, wineries...forget the past and bring on the tourists.</small>",
  "<b>South Park</b><br/><small>Highly-rated, highly offensive animated cartoon series. \"Oh my God! We killed Kenny!\"</small>",
  "<b>Soy Sauce</b><br/><small>A brewed seasoning made from soybeans, wheat, and salt.</small>",
  "<b>Spam</b><br/><small>Mystery meat, or mystery E-mails ...</small>",
  "<b>Speeding Tickets</b><br/><small>\"No, officer, I don't have any idea how fast I was going.\"</small>",
  "<b>Spiders</b><br/><small>There are more than 34,000 species of spiders. Try not to think about THAT right before bedtime.</small>",
  "<b>Spike Lee</b><br/><small>1957-, American film maker and Knicks fan. Best known for Do the Right Thing, Malcolm X, and 4 Little Girls.</small>",
  "<b>Spilled Milk</b><br/><small>Got milk? WHOOPS! Apparently not ...</small>",
  "<b>Spit</b><br/><small>Ladies and gentlemen, straight from the Salivary Glands ...</small>",
  "<b>Spontaneous Combustion</b><br/><small>The ignition of substances without application of an external heat source. A good plot for \"The X-Files.\"</small>",
  "<b>Sport Utility Vehicles</b><br/><small>Need new tires?</small>",
  "<b>Sports Channels</b><br/><small>Any team, any time.</small>",
  "<b>Star Fruit</b><br/><small>Looks like plastic, tastes like lemons.</small>",
  "<b>Starry Night</b><br/><small>A sky bright with stars, a classic Van Gogh painting, and a Don McLean song. Three cards in one!</small>",
  "<b>State Fair</b><br/><small>Aw, gee whiz, a blue ribbon for Bessie!</small>",
  "<b>Steak And Potatoes</b><br/><small>Hot off the grill!</small>",
  "<b>Stephen King</b><br/><small>1947- , American author of horror novels, who's sold more than 100 million copies of his books. Talk about frightening ...</small>",
  "<b>Steve Martin</b><br/><small>1945- , American comedian, actor, writer, and \"wild and crazy guy.\"</small>",
  "<b>Steven Spielberg</b><br/><small>1947-, American movie director and producer, and overachiever. From E.T. to Schindler's List... too many to list.</small>",
  "<b>Stonehenge</b><br/><small>Prehistoric stone monument located north of Salisbury, England.</small>",
  "<b>Strawberry Shortcake</b><br/><small>Summertime and the eating is easy ...</small>",
  "<b>Stubbed Toes</b><br/><small>It'll feel better when it quits hurting.</small>",
  "<b>Stunt People</b><br/><small>When you need someone to take the fall.</small>",
  "<b>Summer Camp</b><br/><small>If the bugs don't get you, the poison ivy will!</small>",
  "<b>Sunday Drivers</b><br/><small>Now available ANY day of the week!</small>",
  "<b>Superman</b><br/><small>Fictional comic book superhero loved by Lois Lane and Jerry Seinfeld.</small>",
  "<b>Supermodels</b><br/><small>Long legs = big bucks.</small>",
  "<b>Surfing The Net</b><br/><small>www.otb-games.com</small>",
  "<b>Sushi</b><br/><small>Who would ever have guessed that raw fish could be so fashionable?</small>",
  "<b>Swiss Bank Accounts</b><br/><small>Do you think everyone in Switzerland has one?</small>",
  "<b>Swiss Chocolate</b><br/><small>\"What use are cartridges in battle? I always carry chocolate instead.\" -George Bernard Shaw</small>",
  "<b>Swiss Cheese</b><br/><small>Guess it comes from holey cows ...</small>",
  "<b>Taking A Bath</b><br/><small>Bathing facilities have been found in excavations in India from before 2000 BC. Soap-on-a-Rope hasn't.</small>",
  "<b>Talk Radio</b><br/><small>Talk about air pollution.</small>",
  "<b>Teachers</b><br/><small>If you can play this game, thank a teacher.</small>",
  "<b>Telemarketers</b><br/><small>\"No, thank you ... No, I'm not interested ... No, I have to go now ...\"</small>",
  "<b>Televangelists</b><br/><small>Not to be confused with Teletubbies.</small>",
  "<b>Television</b><br/><small>One-hundred and sixty-four channels, and nothing worth watching.</small>",
  "<b>Telling The Truth</b><br/><small>\"There are two kinds of truth. There are real truths and there are made-up truths.\" -Marion Barry, ex-mayor of Washington, D.C.</small>",
  "<b>Terrorist Attack</b><br/><small>We will never negotiate with terrorists.</small>",
  "<b>Thanksgiving Day</b><br/><small>The fourth Thursday of November in the U.S.; the second Monday in October in Canada.</small>",
  "<b>The 1920s</b><br/><small>Pros: the Jazz Age. Cons: Presidents who look like librarians.</small>",
  "<b>The 1950s</b><br/><small>Pros: Barbies, barbecues, and bikinis. Cons: McCarthy, the Korean War, television.</small>",
  "<b>The 1960s</b><br/><small>Pros: the Moon Lsnding, the music. Cons: hippies who refuse to believe they're over.</small>",
  "<b>The 1970s</b><br/><small>Pros ... uh ... pros ... uh ... GIVE US A MINUTE, OKAY?</small>",
  "<b>The 1980s</b><br/><small>Pros: meant the end of the 1970s. Cons: '80s nostalgia.</small>",
  "<b>The 21st Century</b><br/><small>The future is NOW!</small>",
  "<b>The Academy Awards</b><br/><small>The statue known as \"Oscar\" weighs only eight and a half pounds. So why does it carry so much weight?</small>",
  "<b>The Beach</b><br/><small>A day at the beach is no day at the beach, ya know?</small>",
  "<b>The Beatles</b><br/><small>1960s British band. Only the most revolutionary, influential and universally acclaimed group of the 20th century. That's all.</small>",
  "<b>The CIA</b><br/><small>The Central Intelligence Agency is responsible for keeping the U.S. government informed of foreign actions affecting the nation's interest.</small>",
  "<b>The Cold War</b><br/><small>The post-World War II struggle between the US and its allies, and the former USSR and its allies. Things could have gotten hot.</small>",
  "<b>The Common Loon</b><br/><small>A spotted, red-eyed diving bird -or various friends or family.</small>",
  "<b>The Dallas Cowboys</b><br/><small>National Football League team known for their cheerleaders and their performance, both on and off the field.</small>",
  "<b>The Dump</b><br/><small>Just remember to recycle.</small>",
  "<b>The Eiffel Tower</b><br/><small>Designed and built by French engineer Alexandre Gustave Eiffel for the Paris World's Fair of 1889.</small>",
  "<b>The Electric Chair</b><br/><small>In U.S. prisons, an alternating current of about 2000 volts is used for electrocution.</small>",
  "<b>The End Of The World</b><br/><small>\"It's the end of the world as we know it, and I feel fine ...\" -REM</small>",
  "<b>The Everglades</b><br/><small>A vast marsh covering much of southern Florida. Watch out for alligators!</small>",
  "<b>The Far Left</b><br/><small>They get high Marx from some.</small>",
  "<b>The Far Right</b><br/><small>Far right for some and far wrong for others.</small>",
  "<b>The FBI</b><br/><small>The Federal Bureau of Investigation: the investigative agency for the U.S. Department of Justice. They're listening ...</small>",
  "<b>The First Day Of School</b><br/><small>\"Fear has many eyes.\" -Cervantes</small>",
  "<b>The French Riviera</b><br/><small>Holiday home of the rich, the famous, and the half-naked.</small>",
  "<b>The Godfather</b><br/><small>The 1972 critically acclaimed Mafia movie that made us as offer we couldn't refuse.</small>",
  "<b>The Grand Canyon</b><br/><small>217 miles long, 4 to 18 miles wide, and more than 1 mile deep. Now THAT'S grand.</small>",
  "<b>The Grateful Dead</b><br/><small>American rock band, founded in 1965 and best known for their \"Dead Head\" fans.</small>",
  "<b>The Great Chicago Fire</b><br/><small>The noteworthy fire of 1871 ... a hot time in the old town ...</small>",
  "<b>The Great Depression</b><br/><small>Prozac was invented six decades too late.</small>",
  "<b>The Green Bay Packers</b><br/><small>Twelve time National Football League world champions, beloved by \"Cheeseheads\" everywhere. Are those brats done yet?</small>",
  "<b>The Gulf War</b><br/><small>January - February, 1991. This six week conflict with Iraq was also known as \"Desert Storm.\"</small>",
  "<b>The Indy 500</b><br/><small>Contestants must drive the full 500 miles. Bathroom breaks ARE allowed.</small>",
  "<b>The Internet</b><br/><small>Computer-based worldwide information network, and global shopping market.</small>",
  "<b>The IRS</b><br/><small>The Internal Revenue Service: agency of the U.S. Department of the Treasury responsible for collecting taxes. A human audity.</small>",
  "<b>The JFK Assassination</b><br/><small>November 22, 1963. The funeral of President Kennedy was watched on television by millions around the world.</small>",
  "<b>The KKK</b><br/><small>If they're supposed to be the master race, why do they keep misspelling \"Clan\"?</small>",
  "<b>The Land Of Oz</b><br/><small>\"I've a feeling we're not in Kansas anymore, Toto.\" -Dorothy, \"The Wizard Of Oz\"</small>",
  "<b>The Little Mermaid</b><br/><small>The 1837 story by Hans Christian Anderson or the 1989 animated film by Disney. Guess which made more money?</small>",
  "<b>The Mafia</b><br/><small>A loose association of criminal groups, bound by a blood oath and sworn to secrecy. Of course, now we have to kill you.</small>",
  "<b>The Marx Brothers</b><br/><small>Chico, Groucho, Harpo, amd sometimes Zeppo. Their 1930s films include Duck Soup and Animal Crackers.</small>",
  "<b>The Metric System</b><br/><small>No, thank you. We like our inches and feet!</small>",
  "<b>The Midwest</b><br/><small>America's central plains states. They're not like folks 'round here ...</small>",
  "<b>The Milky Way</b><br/><small>The galaxy that includes the sun, its solar system, and a chewy layer of caramel.</small>",
  "<b>The Mississippi River</b><br/><small>The Algonquin words \"Misi sipi\" mean \"big river.\" What's Algonquin for \"muddy\"?</small>",
  "<b>The National Enquirer</b><br/><small>American tabloid newspaper. Inquiring minds want to know ... Why the heck does this thing sell?</small>",
  "<b>The New York Yankees</b><br/><small>Legendary American baseball team. With so much success, it's obvious why they're reviled.</small>",
  "<b>The NRA</b><br/><small>National Rifle Association. They're gunning for your vote.</small>",
  "<b>The Ocean</b><br/><small>How deep is the ocean? 12,000 feet. If they'd known that, maybe they wouldn't have written that stupid song.</small>",
  "<b>The Old Man And The Sea</b><br/><small>Ernest Hemingway's classic novel - fishing, hunger, fishing, torment, fishing, personal loss ... fishing ...</small>",
  "<b>The Olympics</b><br/><small>An international athletic competition held every four years. The thrill of victors and the agony of defeat.</small>",
  "<b>The Opera</b><br/><small>It ain't over 'til the fat lady sings. Unfortunately, sometimes, not even then.</small>",
  "<b>The Ozone Layer</b><br/><small>Short for ozonosphere. Theories about the ozone layer are full of holes.</small>",
  "<b>The Pentagon</b><br/><small>The five-sided home of the U.S. Department of Defense.</small>",
  "<b>The Pyramids</b><br/><small>The Egyptian pyramids were built from about 2700 BC to about 1000 BC. Tut, tut, tut ...</small>",
  "<b>The Renaissance</b><br/><small>Beginning in the 1300s, started in Italy and spread across Europe. Kind of like Espresso bars ...</small>",
  "<b>The Rolling Stones</b><br/><small>British \"bad boy\" rock band formed in 1962. Still touring?</small>",
  "<b>The San Andreas Fault</b><br/><small>Geological feature in California stretching 600 miles. Like the state doesn't have enough faults already.</small>",
  "<b>The South</b><br/><small>Dixie: South of the Mason-Dixon line, that is. They're not like folks 'round here ...</small>",
  "<b>The Statue Of Liberty</b><br/><small>\"Give me your tired, your poor/ Your huddled masses yearning to breathe free ...\" -Emma Lazarus</small>",
  "<b>The Super Bowl</b><br/><small>Who needs another national holiday?</small>",
  "<b>The Supreme Court</b><br/><small>The highest court in the United States. Robes, but no wigs.</small>",
  "<b>The Three Tenors</b><br/><small>Opera stars Placido Domingo, Jose Carreras, and Luciano Pavarotti began recording as The Three Tenors in 1990.</small>",
  "<b>The Titanic</b><br/><small>It sank in 1912. Get over it!</small>",
  "<b>The Universe</b><br/><small>Everything. The big \"It.\" Huge. Massive. THAT big.</small>",
  "<b>The Vatican</b><br/><small>The Papal State in the middle of Rome. Home of the Pope, Swiss Guards, and lots of pigeons.</small>",
  "<b>The Vietnam Memorial</b><br/><small>\"The Wall,\" built in 1982, was designed by 21-year-old architecture student, Maya Lin.</small>",
  "<b>The Williams Sisters</b><br/><small>Venus, 1980-, and Serena, 1981-, Williams, American tennis champs. One heck of a sister act.</small>",
  "<b>The Wright Brothers</b><br/><small>In 1903, Wilbur and Orville made the first powered airplane flights in history. Although there were delays at the airport.</small>",
  "<b>The YMCA</b><br/><small>The Young Men's Christian Association has 30 million members in 110 countries. \"It's fun to stay at the Y-M-C-A.\" -The Village People</small>",
  "<b>Thomas Edison</b><br/><small>1847-1931, American inventor, developed a light bulb, generator, sound-recorder, and motion picture projector. Show off.</small>",
  "<b>Thunder</b><br/><small>\"Here it comes again, Thunder and Lightning...\" -ELO.</small>",
  "<b>Tibet</b><br/><small>Mountainous region of China and religious enclave for a form of Buddhism called Lamaism. Known as the roof of the world.</small>",
  "<b>Ticks</b><br/><small>All ticks are bloodsucking parasites, but not all bloodsucking parasites are ticks.</small>",
  "<b>Tidal Waves</b><br/><small>The gigantic ocean waves that strike with tremendous force, and cause considerable damage to life and property. Kind of like Spring Break.</small>",
  "<b>Tiger Woods</b><br/><small>1975- , American star of the golf circuit. Known for his athletic skill, and youthful, classic style.</small>",
  "<b>Toasted Marshmallows</b><br/><small>How do you like yours - golden brown or flaming?</small>",
  "<b>Toasters</b><br/><small>Wait -don't stick that fork in there!</small>",
  "<b>Tobacco Companies</b><br/><small>Who says tobacco's not addictive? THEY can't give it up ...</small>",
  "<b>Toes</b><br/><small>\"This little piggy went to market ...\"</small>",
  "<b>Tom Cruise</b><br/><small>1962-, American actor. It looked like Ricky Business early on, but by 1986 he was Top Gun. No Mission Impossible for him.</small>",
  "<b>Tom Hanks</b><br/><small>1956-, American actor and star of such varied films as Big, Philadelphia, Forrest Gump, Saving Private Ryan and Castaway.</small>",
  "<b>Top Of A Rollercoaster</b><br/><small>Just remember: what goes UP ...</small>",
  "<b>Tornadoes</b><br/><small>Funnel-shaped cloud whirling destructively at speeds up to 300 mph. \"Honey, do you hear a freight train ... Honey?\"</small>",
  "<b>Toys</b><br/><small>They're not just for kids, anymore ...</small>",
  "<b>Trailer Parks</b><br/><small>Also known as tornado magnets.</small>",
  "<b>Trampolines</b><br/><small>Trampolines have been used in circuses wince the 18th century. Despite slumps in popularity, they always seem to bounce back!</small>",
  "<b>Tree Huggers</b><br/><small>\"Environmentalists\" to the left. \"Wackos\" to the right.</small>",
  "<b>Truck Stops</b><br/><small>Breakfast 24 hours a day and you're on your way.</small>",
  "<b>Tyrannosaurus Rex</b><br/><small>Large carnivorous dinosaur of the latter part of the Mesozoic era. My, what big teeth you have!</small>",
  "<b>Underwear</b><br/><small>\"Let's keep this brief.\"</small>",
  "<b>United Nations</b><br/><small>The U.N. was founded in 1945, after World War II ended. Its mission is to maintain world peace. If we ever achieve it, that is ...</small>",
  "<b>Vacations</b><br/><small>\"Vacation, all I ever wanted, Vacation, had to get away ...\" -Go-Go's</small>",
  "<b>Vampires</b><br/><small>Legendary bloodsucking monsters.</small>",
  "<b>Victorian England</b><br/><small>An era characterized by moral severity and pompous conservatism.</small>",
  "<b>Video Games</b><br/><small>Just how DO you get to the thirteenth level of \"Doom\"?</small>",
  "<b>Vietnam, 1968</b><br/><small>More than 30,000 Americans had been killed in the Vietnam War by the end of 1968.</small>",
  "<b>Vincent Van Gogh</b><br/><small>1853-90, Dutch post-impressionist painter known for dramatic sunflowers and self-portraits. Only one of his paintings sold during his lifetime.</small>",
  "<b>Violins</b><br/><small>It's a pain in the neck, but keep practicing.</small>",
  "<b>VW Beetles</b><br/><small>The prototype for the original VW Beetle was developed in 1934, and production begin in 1945. Functional, yet so fashionable.</small>",
  "<b>Waco, Texas</b><br/><small>Texas city near where a 51-day standoff between law-enforcement officials and members of the Branch Davidians occurred in 1993.</small>",
  "<b>Wall Street</b><br/><small>The financial center of the United States. See also: roller coaster.</small>",
  "<b>Walt Disney</b><br/><small>1901-1966, the head of some Mickey Mouse company.</small>",
  "<b>Warts</b><br/><small>Small, benign, circumscribed tumors of the outer layer of the skin. Warts and all!</small>",
  "<b>Watching Football</b><br/><small>Sheer athletic prowess by players in peak physical condition is a glorious thing to behold. Pass the chips and beer.</small>",
  "<b>Water Parks</b><br/><small>You can go down Dead Man's Drop and I'll take the Lazy River.</small>",
  "<b>Waterbeds</b><br/><small>Could serve as a safety precaution for those who smoke in bed.</small>",
  "<b>Waterfalls</b><br/><small>\"Don't go chasing waterfalls...\" -TLC</small>",
  "<b>Watermelons</b><br/><small>Pardeeville, WI - home of the Watermelon Seed-Spitting & Speed-Eating Championship. The record is 2.5 lbs. of melon eaten in 3.5 seconds.</small>",
  "<b>Weapons Dealers</b><br/><small>OK, what kind you need? Assault, Automatic, Atomic ...?</small>",
  "<b>Weddings</b><br/><small>\"Ding, dong, the bells are gonna chime ...\" -My Fair Lady</small>",
  "<b>Wheat</b><br/><small>Mainly used in flour. World output of wheat is more than 600 million metric tons a year ... so someone's making a lot of dough.</small>",
  "<b>Wheel Of Fortune</b><br/><small>American TV game show, BIG MONEY! BIG MONEY!.</small>",
  "<b>Whipped Cream</b><br/><small>Great on strawberry shortcake, banana splits, chocolate pudding ...</small>",
  "<b>Whips</b><br/><small>\"Crack that whip ... whip it, whip it good.\" -Devo</small>",
  "<b>Whoopie Goldberg</b><br/><small>1950-, American actor and comedian. Starred in such movies as Ghost, which earned her an Academy Award. Whoopee!</small>",
  "<b>Will Smith</b><br/><small>1968- , Successful American rap star, TV star and wildly successful motion picture star. He's got it all. We hate him.</small>",
  "<b>William Shakespeare</b><br/><small>1564-1616, The English poet and playwright. And all the world IS a stage ...</small>",
  "<b>Wimbledon</b><br/><small>Strawberries ... cream ... temper tantrums ...</small>",
  "<b>Windsurfing</b><br/><small>Really just surfing for lazy people.</small>",
  "<b>Wine Tasting</b><br/><small>Spit or swallow?</small>",
  "<b>Winning The Lottery</b><br/><small>The more you play, the more THEY win.</small>",
  "<b>Witch Hunts</b><br/><small>Popular locations: Salem, Massachusetts and Washington, D.C.</small>",
  "<b>Women</b><br/><small>REAL Women.</small>",
  "<b>Women's Soccer</b><br/><small>The 1999 World Cup finals was the most-watched women's sporting event in history.</small>",
  "<b>Wood Chippers</b><br/><small>\"I guess that was your accomplice in the wood chipper.\" -Marge Gunderson, Fargo</small>",
  "<b>Woodstock</b><br/><small>The 1969 love, music and mud festival attended by 400,000. Or, the little yellow bird.</small>",
  "<b>Woody Allen</b><br/><small>1935- , American comedian, actor and director, of Bananas, Annie Hall, Hannah and Her Sisters, and lots of New York Stories.</small>",
  "<b>Worms</b><br/><small>\"A man may fish with the worm that hath eat of a king, and eat of the fish that has fed of that worm.\" -\"Hamlet\" Shakespeare</small>",
  "<b>X-Ray Vision</b><br/><small>Available to Superman -for emergency use only.</small>",
  "<b>X-Rays</b><br/><small>X-Rays were discovered in 1895 by the German physicist Wilhelm Conrad Roentgen. Now if they could just get those X-ray glasses down.</small>",
  "<b>Yellowstone Park</b><br/><small>Home to 3000 geysers and hot springs. More gas and hot air than Washington, D.C.</small>",
  "<b>Zen</b><br/><small>Japanese form of Buddhism, originated in China. Zen again, maybe not.</small>",
  "<b>Zucchini</b><br/><small>A squashed vegetable.</small>",
  "<i>Hakuna matata</i>, motherfucker.",
  "A $50 cup of coffee literally made from cat shit.",
  "A <i>really</i> bad yeast infection.",
  "A 5 lb. bag of gummy bears.",
  "A bachelor's degree in communication.",
  "A ball pit filled with testicles.",
  "A banana. You know, for scale.",
  "A beard longer than 12 inches.",
  "A Benedict Cumberbatch RealDoll&trade;.",
  "A bit o' the ol' slap and tickle.",
  "A bitchin' Camaro.",
  "A black fly in your chardonnay.",
  "A blanket with a hole in it.",
  "A braille vajazzling.",
  "A breakfast sausage with serious emotional problems.",
  "A bunch of snot-nosed, know-it-all twentysomethings.",
  "A burning sensation.",
  "A butt-plug in the shape of a rolled-up copy of the U.S. Constitution.",
  "A cage fight with Nicolas Cage.",
  "A Category 5 assnado.",
  "A chair that likes to rape people.",
  "A combination bounce house and fumigation tent.",
  "A crusty old sock.",
  "A cunning stunt.",
  "A donkey show.",
  "A fear-boner.",
  "A fishy taste.",
  "A Fleshlight&reg;.",
  "A fluffy little butt.",
  "A four-inch clit.",
  "A good schtupping.",
  "A gratuitous claymation sequence.",
  "A hairshirt.",
  "A hamster with a throbbing erection.",
  "A history of abuse.",
  "A husband bulge.",
  "A jury of your peers.",
  "A literal shaved beaver.",
  "A mazel tov cocktail.",
  "A meat popsicle.",
  "A moist towlette.",
  "A nugget of poo roughly the size and shape of a crouton.",
  "A pineapple with chlamydia.",
  "A powerful gag reflex.",
  "A prehensile penis.",
  "A purple nurple.",
  "A secret blend of eleven herbs and spices.",
  "A sense of resignation.",
  "A sexually aggressive koala.",
  "A shit-ton of glitter.",
  "A shockingly flatulent bobcat.",
  "A silly old sea captain who's just <i>full</i> of stories.",
  "A single, shiny Bitcoin.",
  "A slack-jawed yokel.",
  "A song about how great Nebraska is.",
  "A stinky pinky.",
  "A stripper named &quot;Anchovy.&quot;",
  "A strong, independent woman who don't need no man.",
  "A tender rodgering.",
  "A thirsty, sperm-jacking wanna-be baby mama.",
  "A tip of my fedora.",
  "A tongue punch in the ol' fart box.",
  "A tossed salad.",
  "A urine-filled bong.",
  "A Waco, Texas-themed novelty barbecue pit and smoker.",
  "A warm, gently fragrant biscuit.",
  "A were-salmon.",
  "A younger, vastly more attractive spouse.",
  "Africans, the racist white kind.",
  "An absinthe enema.",
  "An actual gravy train.",
  "An actual invisible knapsack.",
  "An adorable baby sloth.",
  "An angry little man.",
  "An asexual bonobo.",
  "An effeminate southern homophobe.",
  "An emergency root canal.",
  "An emperor penguin with <i>no</i> sense of shame.",
  "An entire bottle of J&auml;germeister&reg;.",
  "An erotic novel about the Loch Ness Monster.",
  "An extra-large can of Bone Bashful&trade; brand Chinchilla Pudding Sauce.",
  "An itsy-bitsy teeny weenie.",
  "An obscene amount of butter.",
  "An Oosik, or Inuit war club made from the penis bone of a walrus.",
  "An orcgasm.",
  "An overly-enthusiastic prostate exam.",
  "An unexpected finger in the anus.",
  "An unsurprising rash.",
  "Anything with a hole.",
  "Applying to a new guild.",
  "Asian girls with names like &quot;Christina&quot; or &quot;Elizabeth&quot;.",
  "Auto-erotic asphyxiation.",
  "Axl Rose.",
  "Baby carrots.",
  "Bacon that can feel pain.",
  "Bacon-flavored lube",
  "Barfing into a tiny, bejewled handbag.",
  "Being able to name <i>all</i> of the different kinds of olives.",
  "Being born with a tail.",
  "Being circumcised with a deli slicer.",
  "Being heteroflexible.",
  "Being kicked in the ovaries.",
  "Being punk in drublic.",
  "Being raped to sleep by dickwolves.",
  "Being small but perfectly well formed.",
  "Being so far in the closet, you can see Narnia.",
  "Being waterboarded with Wild Turkey&reg; 101.",
  "Belching out the lyrics to &quot;Hey Jude.&quot;",
  "Bitch tits.",
  "Bitchy resting face.",
  "Blistering barnacles!",
  "Bono. Just... Bono.",
  "Bourbon pong.",
  "Bronies.",
  "Cake farts.",
  "Charles Darwin.",
  "Chasing waterfalls.",
  "Chemtrails.",
  "Chesticles.",
  "Child-sized coffins.",
  "Chloroform.",
  "Cockasaurus rex: the horniest dinosaur of them all.",
  "Cockissimo Fantastico, the legendary lover with the wonderous wang.",
  "Cocktimus Prime: the laser-guided dildo rocket.",
  "Cockulous Maximus, tremendous tallywacker of Tripoli.",
  "Combing out the dingleberries.",
  "Costco&reg; food samples.",
  "Crabs Adjust Humidity.",
  "Cumalot.",
  "Curb-stomping.",
  "Danger pheremones.",
  "Death by snu-snu.",
  "Dennis Rodman, professional diplomat.",
  "DOOOOOMM!!!!!!!",
  "Double vaginal, double anal.",
  "Dr. Jellyfinger.",
  "Droppin' the mic.",
  "Duchess Von Fingerbang.",
  "Enrolling in clown school.",
  "Erotic balloon animals.",
  "Erotic Star Trek fan fiction where all the characters are furries, like Kirk is an ocelot or something.",
  "Explaining how I got the nickname &quot;Nibbleberries.&quot;",
  "Ezekiel 23:20 &quot;There she lusted after her lovers, whose genitals were like those of donkeys and whose emission was like that of horses.&quot;",
  "Fat Man and Little Boy.",
  "Felching.",
  "Flop sweat.",
  "Front row seats to the Shit Show.",
  "Gargling noises.",
  "Gazpacho tactics.",
  "Gettin' down there and bein' all like &quot;this shit is nasty, yo. Fuck this, yo.&quot;",
  "Getting ganked.",
  "Gilbert Gottfried's voice.",
  "Giving Anne Frank a drum kit for her birthday.",
  "Giving the tumor a cutesy name.",
  "Giving your pet lamb a Brazilian.",
  "Googling &quot;Betty White nude.&quot;",
  "Grandma's wet, sloppy kisses.",
  "Ham night!",
  "Her dry, scaly hands.",
  "Hey, fuck you buddy.",
  "Hilarious foreigners!",
  "Honey Boo Boo shotgunning a 2-litre bottle of &quot;go-go juice.&quot;",
  "Hookers and blow.",
  "Hooking up at a Tegan and Sara concert.",
  "Hulking out.",
  "Insisting that Jesus is technically a zombie.",
  "Japanese rope technique.",
  "Jennifer Lawrence.",
  "JJ Abrams putting lens flares all over everything.",
  "Joe Biden getting his freak on.",
  "Joffrey Baratheon, the loathsome little shit.",
  "Juggalos.",
  "Kentucky Fried Children.",
  "Killing hobos.",
  "LeBron James' vast, enveloping hands.",
  "Lego&reg; recreations of famous porn scenes.",
  "Living among us... Learning our ways. Watching. Waiting.",
  "Long Schlong Silver.",
  "Low-hanging fruit.",
  "Lt. Worf's naturally-ribbed Klingon schlong.",
  "Lucky Pierre.",
  "M'lady.",
  "Making airplane noises.",
  "Making sweet, sweet love all night long.",
  "Making vigorous love to a Taco Bell&reg; Beefy 5-Layer Burrito&trade;.",
  "Mesothelioma.",
  "Michele Bachmann furiously masturbating with a coathanger.",
  "Minimum wage.",
  "Mitt Romney doing a burlesque routine in a giant champagne glass.",
  "Mongolian &quot;beef.&quot;",
  "Monkey torture.",
  "More dots!",
  "Mr. Right Now.",
  "My apparent inability to read a few simple words out loud.",
  "My big juicy fuck potatoes.",
  "My level 90 night elf, Leafshit Puddingsbane.",
  "My silent twin, the afterbirth.",
  "Natalie Portman naked, petrified, and covered in hot grits.",
  "Nazi unicorns.",
  "Neil deGrasse Tyson.",
  "Not being too smelly, you know, in the cellar. Down Below.",
  "Obamacare.",
  "OH EM GEE, TOTES ADORBS!!!",
  "One Direction.",
  "One whose nether regions are vast and beckoning, like unto a corridor down which a frankfurter might be thrown.",
  "Opening for Sigur R&oacute;s.",
  "Origami erotica.",
  "Painal.",
  "Paula Deen's dietician.",
  "Peanut Butter Jelly Time.",
  "Pelvic sorcery.",
  "Plato's Allegory of the Cave or some other pretentious bullshit.",
  "Poop soup.",
  "Pooping in public.",
  "Posting on www.reddit.com/r/gonewild/",
  "Pretending to be a malfunctioning robot.",
  "Pretending to have the hiccups.",
  "Primo schlick material.",
  "Pronouncing &quot;quinoa&quot; properly.",
  "Protective custody.",
  "Putting Baby in a corner.",
  "Racist ninjas.",
  "Rainbow cumdrops.",
  "Raptor Jesus.",
  "Realistic expectations.",
  "Reluctant anal.",
  "Reptilians.",
  "Rich Corinthian leather.",
  "Robin Thicke.",
  "Rock bottom.",
  "Romantic cancer.",
  "Running around like a guy with his chicken cut off.",
  "S'more Schnapps.",
  "Scissoring.",
  "Self-medicating.",
  "Self-replicating fudge.",
  "Selling out.",
  "September 11th.",
  "Sexy witches.",
  "Six pounds of raw, peeled garlic.",
  "Slightly more than 3 ounces of cum.",
  "Slowly waving an oversized Jamaican flag.",
  "Some punk-ass little bitch.",
  "Something Elon Musk thought up while floating six inches above the floor in a meditative trance.",
  "Something so offensive, I don't even want to say it.",
  "Spiking the juice at AA.",
  "Sploosh!",
  "Sriracha.",
  "State-of-the-art animatronics.",
  "Steaming hot lemonade.",
  "Struggle snuggles.",
  "Susan, that bitch.",
  "Swallowing a cue ball.",
  "Tacos.",
  "Taking one for the team.",
  "Tampons in every hole.",
  "Ted Nugent's cold, dead hands.",
  "That &quot;not-so-fresh&quot; feeling.",
  "That thing with the spoon.",
  "The (technically) Virgin Mary.",
  "The age of consent.",
  "The Chronicles of Red-Dick.",
  "The cliterati.",
  "The combined fat from all of the Kardashians' liposuction procedures.",
  "The creative use of a pool noodle.",
  "The crotches of strangers.",
  "The echoing silence left by SIDS.",
  "The express written consent of Major League Baseball.",
  "The fabled Mongolian Death Worm.",
  "The few shreds of tinsel still clinging to my asshole.",
  "The Gaza Strip.",
  "The graveyard shift at 7-Eleven&reg;.",
  "The green apple splatters.",
  "The hole in my chest where my heart used to be.",
  "The Large Hard-On Collider.",
  "The love that dare not speak its name.",
  "The noise a cat makes before vomiting.",
  "The ol' reach-around.",
  "The patriarchal social construct of physical genitalia.",
  "The Slender Man.",
  "The smooth, unblemished skin of a child.",
  "The soft love-honks of a lust goose.",
  "The sound of one hand fapping.",
  "The sticky icky.",
  "The sweet release of death.",
  "The TARDIS.",
  "The taste of human flesh.",
  "The whole goddamned thing.",
  "Those creamy atheist thighs.",
  "Titty sprinkles.",
  "Touching each other's butts.",
  "Trickle-down economics.",
  "Trouser chili.",
  "Tufted ears.",
  "Turning it all into a sexy dance.",
  "TWENTY MILLION U.S. DOLLARS.",
  "Uncontrollably retching at the mere mention of mayonnaise.",
  "Using a live squid as a condom.",
  "Using a zip-tie as an impromptu cock-ring.",
  "Using tears as lubricant.",
  "Using teeth.",
  "Van Gogh's severed ear.",
  "Wanghis Kahn, cocklord of the Mongols.",
  "Weaponized ebola.",
  "Wearing a blue fox fursuit on Casual Friday.",
  "Wearing your IUD into an MRI.",
  "Welfare.",
  "What happens in Vegas.",
  "Whatever is left.",
  "Wielding a toddler as a weapon.",
  "Wiggling.",
  "WINNING!!",
  "Wuv.",
  "www.clownpenis.fart",
  "Yiffing.",
  "Yoga pants.",
  "You know, one of <i>them</i> sorts of things.",
  "Zatopeepee, the Blind Fucksman.",
  "Ze Germans.",
  "Blaring Gangnam Style on repeat.",
  "Low sperm motility.",
  "A drunk relative muttering racial slurs.",
  "The sudden need to conceal a massive boner.",
  "A long, awkward pause before she says \"I do.\"",
  "A see-through wedding gown.",
  "A pair of rusty handcuffs and a bottle of lube.",
  "That bridesmaid that won't stop crying.",
  "A good old-fashioned case of whiskey dick.",
  "Undying love and eternal affection.",
  "Herpes.",
  "Your father-in-law's erectile dysfunction pills.",
  "Holding hands when you get old.",
  "Swinging.",
  "Cat-like night vision.",
  "Not knowing what a rusty trombone is.",
  "Finding out you're actually cousins.",
  "Saving yourself for marriage.",
  "Over 5,000 flavored condoms.",
  "Unplanned pregnancy!",
  "Getting high and making out.",
  "Married sex.",
  "Vaginal juices.",
  "A tasteful spray tan.",
  "A gag ball and a riding crop.",
  "Way too much sensual massage oil.",
  "Premature ejaculation.",
  "One too many blow job shots.",
  "Skinny dipping in a vat of bubble solution.",
  "Your creepy uncle with the wandering hands.",
  "That time the bride thought she was a lesbian.",
  "Life in a nudist vegan hippie commune.",
  "Deep existential loneliness.",
  "Post-coital bliss.",
  "Too damn many kids.",
  "A \"business trip.\"",
  "A little too much glitter.",
  "Testosterone-induced rage.",
  "A drunk karaoke version of \"Take My Breath Away\".",
  "A groomsman in a kilt ...and nothing else.",
  "A half-finished Brazilian wax job.",
  "Being kind of hormonal.",
  "Running out of things to talk about.",
  "Paralyzing, all-consuming fear of commitment.",
  "Leaving little love notes around the house.",
  "Unicorns and lollipops.",
  "Sleeping with your therapist.",
  "The Chicken Dance.",
  "A hickey from a stripper.",
  "Drinking your troubles away nightly.",
  "High-fiving after sex.",
  "Nipple clamps on the gift registry.",
  "Refusing to shave.",
  "Sleeping on the couch.",
  "Falling a little more in love every day forever.",
  "Faking a pregnancy.",
  "Making out in public.",
  "A mustache ride.",
  "Long walks at sunset ON DRUGS.",
  "Far too many dildos.",
  "A penis that's almost too big.",
  "Fighting over whether or not you're fighting.",
  "Multiple orgasms.",
  "Doing what Jesus would do.",
  "Storm trooper centerpieces.",
  "Marrying an axe murderer.",
  "Hogging the bathroom.",
  "Some innocent wife-swapping among friends.",
  "Weekly date nights at the local BDSM dungeon.",
  "Falling asleep during oral sex.",
  "Not remembering your wedding night.",
  "A little same-sex experimentation.",
  "A three-way in Vegas.",
  "Talking dirty in a Spanish accent.",
  "A raging libido.",
  "Going black, and never going back.",
  "The best man dressed in drag.",
  "A heart-shaped Jacuzzi filled with champagne and Viagra&trade;.",
  "Secretly drunk-dialing exes.",
  "Sexercise.",
  "Changing both your last names to \"Danger.\"",
  "Forgetting the safe word.",
  "Praying and reading the Torah.",
  "Bad dragon erotica.",
  "An elaborate alien abduction fantasy.",
  "A godless harlot.",
  "Praying and reading the Bible.",
  "Martha Stewart.",
  "That dirty weekend in Cabo.",
  "Unconditional love.",
  "The challenge of balancing career and family.",
  "Don Draper.",
  "A pound of weed and a Mexican stripper.",
  "Sex on the kitchen table.",
  "Unleashing the vixen within.",
  "Delirious, infectious happiness.",
  "Fighting over the remote control.",
  "Getting kicked out of your own wedding reception.",
  "A lifetime of judgmental glances from your in-laws.",
  "A colorful assortment of butt plugs.",
  "Being too hung-over for a hand job.",
  "Getting a dog.",
  "A thousand shitty wedding-planning websites.",
  "The best man's dark sexual past.",
  "Forgetting your birth control pills.",
  "Decorating the house with vagina-inspired artwork.",
  "A hot neighbor with no conscience and nothing to lose.",
  "A severed finger in the wedding cake.",
  "A solid five-year plan.",
  "Breaking the hymen.",
  "A penis with a smiley face.",
  "A misunderstanding involving a strap-on.",
  "Someone getting arrested.",
  "A happy ending.",
  "Getting tired of being on top.",
  "A forged prescription for STD meds.",
  "Sharing a bank account.",
  "Wondering if you made the right decision.",
  "Gratuitous PDA on Facebook.",
  "Getting a pube stuck in your teeth.",
  "Rephrasing it as an \"I feel\" statement.",
  "Pooping with the door open.",
  "A hasty vasectomy.",
  "A botched genital piercing.",
  "An unacceptable volume of body hair.",
  "A DJ with a Wham! obsession.",
  "A mysterious stain on his tuxedo.",
  "PMS-ing at the altar.",
  "A timeless reading from Fifty Shades of Grey.",
  "Walking down the aisle to \"Baby Got Back.\"",
  "Your unborn children.",
  "Someone using the word \"Bridezilla\" one more goddamn time.",
  "A lifetime subscription to Big Black Butts magazine.",
  "The secret handshake.",
  "Mowing the fucking lawn.",
  "Blaming it on the dog.",
  "A nervous breakdown at IKEA&trade;.",
  "A healthy work-life balance.",
  "Several decades of festering resentment.",
  "Really letting yourself go.",
  "Wondering who's gonna die first.",
  "The wedding-industrial complex.",
  "Hiding the M&M's&reg;.",
  "\"Intimacy issues.\"",
  "Just giving up.",
  "A 50% divorce rate.",
  "Keeping tabs. Always keeping tabs.",
  "Making a big fat deal out of nothing.",
  "A butthole full of mustard.",
  "Unwavering support for your career.",
  "A small price to pay for half off the catering.",
  "People constantly telling you that marriage is a lot of work.",
  "Faking it until making it.",
  "Wedding crashers passing out Ecstasy to your elderly relatives.",
  "A maid of honor with no shame. No. Shame.",
  "Winking at waitresses.",
  "A diamond the size of Uranus.",
  "Forgetting your anniversary, year after year.",
  "Wishing this moment could last forever.",
  "Hyperventilating at the gynecologist's office.",
  "Cashing in the kids' college fund to pay off your substantial gambling debts.",
  "A secret second family in Canada.",
  "Sharing all your most embarrassing secrets. Except one.",
  "A groomsman confessing he always secretly loved you.",
  "Your dad showing up drunk. Like always.",
  "His prostate.",
  "Realizing the Kama Sutra is actually really lame.",
  "Knowing way too much about each other's bathroom habits.",
  "Things you can never unsee.",
  "Wishing you were half as happy as your social media posts make you seem.",
  "Texting instead of talking.",
  "Grocery shopping in a bathrobe.",
  "The happiest man on Earth.",
  "Meaning something completely different by the word \"facial.\"",
  "Staying up all night talking.",
  "Wondering where that rash came from.",
  "Pretending you were just kidding.",
  "Seven tubs of ass wax.",
  "All the sacrifices that come with it.",
  "Low self-esteem.",
  "Each other.",
  "Blood on the sheets.",
  "Saying \"Me so horny!\" in a Yoda voice.",
  "Open, honest communication.",
  "Gay marriage.",
  "Tickle-fight-induced vomiting.",
  "Passive-aggressive notes on the fridge.",
  "Homoerotic undertones.",
  "Getting caught masturbating to hentai porn.",
  "Ranch dressing.",
  "A quivering pile of love jelly.",
  "Putting the cats in the pre-nup.",
  "Taking things too literally.",
  "Daily reminders about who actually pays the mortgage.",
  "Meeting the weekly cunnilingus quota.",
  "A demonstration of who really wears the pants in this family.",
  "A daily, futile power struggle.",
  "A bizarre love octagon.",
  "A digital chastity belt.",
  "Too little, too late.",
  "A lifetime of crippling regret.",
  "Make-up sex.",
  "Whisper-fighting in the kitchen.",
  "A pale slurry of tears, icing, and denial.",
  "The ceremonial spanking of the bride.",
  "Mormons.",
  "A veil made out of duct tape.",
  "Hearing the same jokes over and over again for all eternity.",
  "Finding your soul mate.",
  "A reluctant, eye-rolling apology.",
  "A disturbingly life-like blow-up doll.",
  "Adultery.",
  "Coveting your neighbor's polyamorous lifestyle.",
  "A mediocre dominatrix.",
  "Wearing a t-shirt that says \"I TOLD YOU SO.\"",
  "Lower expectations.",
  "CheapRussianBrides.com.",
  "Naked aggression.",
  "A shrieking biological alarm clock.",
  "Fairy-themed cosplay.",
  "A waterproof, vibrating attachment.",
  "A heart made of sentient nanobots.",
  "Foreplay.",
  "Neanderthal mating habits.",
  "Admitting defeat.",
  "Feelings of inadequacy.",
  "A top-shelf prostitute.",
  "Matching  denim outfits.",
  "Motherfucking cupcakes.",
  "Ring finger tattoos.",
  "Doctor Who.",
  "Jumanji.",
  "Peanutbutter jelly time.",
  "EXTERMINATE.",
  "Wards.",
  "Fuck you, I'm a bear.",
  "K-Pop.",
  "Doing Gangnam Style at a funeral.",
  "THE GODDAMN BATMAN.",
  "The crushed dreams of a stripper.",
  "Swinging an axe in the air while cornholing a bear.",
  "125% Reccomended Daily Allowance of cock.",
  "A molotov cocktail.",
  "Just the tip!",
  "A Fleshlite&trade;.",
  "SCIENCE!!1!",
  "Granny panties.",
  "A bag of dicks.",
  "Bearshark.",
  "Genital warts.",
  "Trouser snakes.",
  "A skeptical sheriff.",
  "The Power of Greyskull.",
  "A dead hooker.",
  "PEEEEEEEEEEEEEEEENIIIISSSSSSSS.",
  "Drinking on live TV.",
  "Mandatory Sex Party.",
  "The League of Legends.",
  "Games you can play with bricks.",
  "Googly eyes on a cock.",
  "Typing with your genitals.",
  "Pirate hookers.",
  "Miss. Piggy.",
  "The Fresh Prince of Bel-Air.",
  "Fancy tampons.",
  "The Card Czar.",
  "The town drunk.",
  "Morbid obesity.",
  "Don Knotts.",
  "A MILF.",
  "The end of the world.",
  "Tinychat.",
  "Moobs.",
  "Yellow snow.",
  "Boobs.",
  "STEAL ALL THE FARM.",
  "Standing next to short people to use them as armrests.",
  "Realizing, too late, that there is no toilet paper left.",
  "Scotch.",
  "A fuck-mothering vampire.",
  "Mr. Fancy Pants.",
  "TotalBiscuit's top hat.",
  "Tentacle rape.",
  "Illegal immigrants.",
  "Skullcrusher Mountain.",
  "FUNimation.",
  "Penn and Teller.",
  "An 8-ball.",
  "A Facebook stalker.",
  "Talking like a pirate.",
  "A 3am phone call.",
  "Rule 34.",
  "Narutards.",
  "Dead catgirls.",
  "The smallest, whitest dick.",
  "Nuns.",
  "Bed wetting.",
  "Ezreal's hot sugary ass.",
  "Hello Kitty.",
  "Tots.",
  "Getting drunk before noon.",
  "Clown strippers.",
  "KERMIT FLAIL.",
  "Fruit Fuckers.",
  "Beer Pong.",
  "Using hot sauce as lube.",
  "Bounty, the Quicker Picker Upper.",
  "Smooth jazz.",
  "Bleeding Anuses.",
  "A spoon that is too big.",
  "Soviet Russia.",
  "Not being pregnant.",
  "Indiana Jones.",
  "Hentai.",
  "Surgeon Simulator 2013.",
  "Tengen Toppa Gurren Lagann.",
  "Mewtwo.",
  "The Columbine Shooting.",
  "Cowboy Bebop.",
  "Fullmetal Alchemist.",
  "Futanari.",
  "Mr. Hankey the Christmas Poo.",
  "Vash the Stampede.",
  "Two midgets stacked up pretending to be one person.",
  "Sarah Fuckin' Palin.",
  "The Bible.",
  "Naruto.",
  "A giant horse cock.",
  "Minecraft.",
  "A wet paper towel.",
  "Xyzzy playing around with gender roles.",
  "Four Loko.",
  "Mario brutally murdering Sonic.",
  "Sonic brutally murdering Mario.",
  "Idiots who don't seem to realize that Avatar: The Last Airbender isn't really an anime.",
  "A fat middle-aged man in a Sailor Moon costume.",
  "The world's tallest midget.",
  "Yu-Gi-Oh! The Abridged Series.",
  "OVER 9000!!",
  "Aya Hirano being gang-banged by her entire band.",
  "A juice box.",
  "Sex.",
  "\". . . .\"",
  "Pacific Rim.",
  "Reddit.",
  "Novelty Twitter accounts.",
  "A mindfuck.",
  "Olmec.",
  "A Hello Kitty! vibrator.",
  "Reading the manual.",
  "Type-C Tetris music.",
  "The Death Note.",
  "YouTube.",
  "South Korea.",
  "Being eaten by a titan.",
  "A fountain of vomit.",
  "DeviantArt.",
  "The Hare Hare Yukai dance.",
  "Fart science.",
  "A big wet pink laser sword.",
  "Sonic the Hedgehog.",
  "A brief moment of aptitude.",
  "Fuck you, I do what I want.",
  "FUCK YOU, I'M SPIDERMAN!",
  "StarFox.",
  "Santa Christ.",
  "PetSmart.",
  "Getting mauled by a mountain lion AND a grizzly bear at the same time.",
  "Glenn Beck being torn apart by zombies.",
  "Going full retard.",
  "A tub of Vaseline.",
  "Ham?",
  "Sex with strangers.",
  "Getting your penis cut in half.",
  "Literally going to Hell.",
  "Being frozen today.",
  "Bees. My God.",
  "Cousin marriage.",
  "4Kids.",
  "Chuck Norris.",
  "My mom.",
  "My penis catching fire.",
  "Lesbians.",
  "A smaller, whiter dick.",
  "A pretty epic poo.",
  "A couch stinking of naked people.",
  "A beautiful little moment.",
  "John Madden.",
  "Bees!",
  "Watching FLCL while tripping on acid.",
  "A killer rabbit.",
  "Your mom.",
  "Sticking your finger up her ass.",
  "A tiny white dick.",
  "Maple syrup.",
  "A tree.",
  "Standing outside the gates of the White House completely naked with a revolver in your hand.",
  "A zombie fisherman.",
  "A mile-long penis.",
  "An awkward slash fic between The Nostalgia Critic and The Angry Video Game Nerd.",
  "An obscure reference only two people will get.",
  "Lara Croft.",
  "Anal tearing.",
  "Catholic priests who drink, smoke, and carry guns.",
  "Stick figure porn.",
  "A delicious baby.",
  "The elephant in the room.",
  "A butt egg.",
  "A street cleaning simulator.",
  "The Angry Video Game Nerd.",
  "The Nostalgia Critic.",
  "The Power Glove.",
  "Your virgin soul.",
  "An expensive rental costume.",
  "A bird fucking a horse.",
  "A Big Lipped Alligator Moment.",
  "Time travel.",
  "A baseball to the nuts.",
  "A testicle examination.",
  "Mountain Dew",
  "Surprise blowjobs.",
  "Space Core.",
  "Engrish.",
  "A dead meme.",
  "Duck Hunt",
  "Twincest.",
  "DOTA 2.",
  "Being banned from /r/pyongyang.",
  "That one episode of CSI.",
  "Drills for hands.",
  "Asian cock.",
  "The lost city of Atlantis.",
  "Holy dildos.",
  "George Costanza",
  "Dr. Phil.",
  "The sound a single ThunderStix&reg; makes.",
  "the PS4",
  "The Wii U",
  "the SNES",
  "the NES",
  "Show me your tits!",
  "the SEGA Genesis",
  "Thanking your sex slaves.",
  "the PSX",
  "the duck hunt dog",
  "Getting off on anime porn.",
  "Toilet paper.",
  "Laxatives.",
  "Mining for nose gold.",
  "The Teenage Mutant Ninja Turtles.",
  "Taking a seat with Chris Hansen.",
  "A big floppy donkey dick.",
  "A Cleveland steamer.",
  "The Village People.",
  "The syrupy goop inside a Stretch Armstrong doll.",
  "Rocky Dennis and John Merrick's lovechild.",
  "Life after Parole.",
  "Finding an adhesive bandage at the bottom of your ice cream.",
  "A Pit Bull named Genghis.",
  "A cat's sand papery tongue bath.",
  "Bringing the Hamburglar to Justice.",
  "Sphincter Bleaching.",
  "An Amputee's chapped limb nub.",
  "Toilet Wine.",
  "Leftist Propaganda.",
  "Febreezing your Taint.",
  "Cookie Monster's substance abuse issues.",
  "An ingrown toenail on the tip of a penis.",
  "Feline Leukemia.",
  "Marky Mark's foam rubber penis from Boogie Nights.",
  "My Spankerchief.",
  "Pumping a chemical toilet.",
  "The fine line between kinky and perverted.",
  "A Rotisserie Chicken.",
  "Vultures circling a birthday party.",
  "An All White Jury.",
  "Frottage.",
  "Michael J. Fox trying to use a rotary phone.",
  "The Five Knuckle Truffle Punch.",
  "Flipper Babies.",
  "Ejaculating into an insulin pump.",
  "That video of EatMyDiction1 twerking.",
  "The Sips Co. Dirt Factory.",
  "A canoe with enough room for Phil.",
  "The Black Seed.",
  "That time when Machinima played actual machinima videos.",
  "Bajan Canadian's fridge.",
  "DarkSydePhil playing Dark Souls.",
  "Hitler's Train!",
  "The league of being a big faggot.",
  "Inside Shrek's asshole.",
  "Solving a rubiks cube with your bare nipples.",
  "GaLm's sunglasses.",
  "An LP Smarty finished.",
  "A Big 'Ol Bowl of Fruit!",
  "Getting anally violated by a silverback gorilla.",
  "Tom drunk off his ass.",
  "Criken's Fun House.",
  "A Machinima contract.",
  "The Blue Yeti microphone.",
  "BEARS!",
  "A robot bird.",
  "Diction watching a burly outdoorsman skin a bear while eating honey and crying.",
  "The Great Youtube Unsubbing of 2012.",
  "Bolshevik the wolf.",
  "One of Chuggaconroy's awful puns.",
  "Chilledchaos' homosexual tendencies.",
  "A smart joke.",
  "Seananners' dolphin laugh.",
  "Chilled and Smarty's wedding.",
  "Jah be dwarfin' it up!",
  "Totalbiscuit and Angry Joe frolicking in a meadow.",
  "Seananners joyously dropping \"presents\" on the African minority in GTA.",
  "Smash Fighter.",
  "#TysLeftFoot",
  "Time to cancel Smash Fighter.",
  "The Tom Shark."
  ]

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
    },
    {
    "text": "Siskel and Ebert have panned _ as \"poorly conceived\" and \"sloppily executed.\"",
    "pick": 1
    },
    {
    "text": "Up next on Nickelodeon: \"Clarissa Explains _.\"",
    "pick": 1
    },
    {
    "text": "Believe it or not, Jim Carrey can do a dead-on impression of _.",
    "pick": 1
    },
    {
    "text": "It's Morphin' Time! Mastadon! Pterodactyl! Triceratops! Sabertooth Tiger! _!",
    "pick": 1
    },
    {
    "text": "I'm a bitch, I'm a lover, I'm a child, I'm _.",
    "pick": 1
    },
    {
    "text": "How did Stella get her groove back?",
    "pick": 1
    },
    {
    "text": "Tonight on SNICK: \"Are You Afraid of _?\"",
    "pick": 1
    },
    {
    "pick": 1,
    "text": "And in the end, the dragon was not evil; he just wanted _."
    },
    {
    "pick": 2,
    "text": "Critics are raving about HBO's new <i>Game of Thrones</i> spin-off, \"_ of _.\""
    },
    {
    "pick": 1,
    "text": "Having tired of poetry and music, the immortal elves now fill their days with _."
    },
    {
    "pick": 1,
    "text": "Legend tells of a princess who has been asleep for a thousand years and can only be awoken by _."
    },
    {
    "pick": 1,
    "text": "Who blasphemes and bubbles at the center of all infinity, whose name no lips dare speak aloud, and who gnaws hungrily in inconceivable, unlighted chambers beyond time?"
    },
    {
    "pick": 1,
    "text": "Your father was a powerful wizard, Harry. Before he died, he left you something very precious: _."
    },
    {
    "pick": 1,
    "text": "I'm Bobby Flay, and if you can't stand _, get out of the kitchen!"
    },
    {
    "pick": 1,
    "text": "It's not delivery. It's _."
    },
    {
    "pick": 1,
    "text": "Aw babe, your burps smell like _!"
    },
    {
    "pick": 1,
    "text": "Don't miss Rachel Ray's hit new show, <i>Cooking with _</i>."
    },
    {
    "pick": 1,
    "text": "Excuse me, waiter. Could take this back? This soup tastes like _."
    },
    {
    "pick": 1,
    "text": "Now on Netflix: <i>Jiro Dreams of _</i>."
    },
    {
    "pick": 2,
    "text": "In line with our predictions, we find a robust correlation between _ and _ (p&gt;.05)."
    },
    {
    "pick": 1,
    "text": "In what's being hailed as a major breakthrough, scientists have synthesized _ in the lab."
    },
    {
    "pick": 1,
    "text": "A study published in Nature this week found that _ is good for you in small doses."
    },
    {
    "pick": 2,
    "text": "In an attempt to recreate conditions just after the Big Bang, physicists at the LHC are observing collisions between _ and _."
    },
    {
    "pick": 1,
    "text": "What really killed the dinosaurs?"
    },
    {
    "pick": 1,
    "text": "Hey there, Young Scientists! Put on your labcoats and strap on your safety goggles, because today we're learning about _!"
    },
    {
    "pick": 2,
    "text": "Today on MythBusters, we found out how long _ can withstand _."
    },
    {
    "pick": 1,
    "text": "Don't worry, Penny! Go Go Gadget _!"
    },
    {
    "pick": 2,
    "text": "I need you like _ needs _."
    },
    {
    "pick": 1,
    "text": "I'm just gonna stay in tonight. You know, Netflix and _."
    },
    {
    "pick": 1,
    "text": "Nothing says \"I love you\" like _."
    },
    {
    "pick": 2,
    "text": "Such _. Very _. Wow."
    },
    {
    "pick": 1,
    "text": "This app is basically Tinder, but for _."
    },
    {
    "pick": 1,
    "text": "TRIGGER WARNING: _."
    },
    {
    "pick": 1,
    "text": "What did I nickname my genitals?"
    },
    {
    "pick": 1,
    "text": "You guys, you can buy _ on the dark web."
    },
    {
    "pick": 1,
    "text": "Donald Trump has nominated _ for his VP."
    },
    {
    "pick": 1,
    "text": "In 2019, Donald Trump eliminated our national parks to make room for _."
    },
    {
    "pick": 1,
    "text": "Donald Trump's first act as president was to outlaw _."
    },
    {
    "text": "After blacking out during New Year's Eve, I was awoken by _.",
    "pick": 1
    },
    {
    "text": "This holiday season, Tim Allen must overcome his fear of _ to save Christmas.",
    "pick": 1
    },
    {
    "text": "Jesus is _.",
    "pick": 1
    },
    {
    "text": "Every Christmas, my uncle gets drunk and tells the story about _.",
    "pick": 1
    },
    {
    "text": "What keeps me warm during the cold, cold winter?",
    "pick": 1
    },
    {
    "text": "On the third day of Christmas, my true love gave to me: three French hens, two turtle doves, and _.",
    "pick": 1
    },
    {
    "text": "Wake up, America. Christmas is under attack by secular liberals and their _.",
    "pick": 1
    },
    {
    "text": "Here's what you can expect for the new year.<br>Out: _.<br>In: _.",
    "pick": 2
    },
    {
    "text": "Revealed:<br>Why He Really Resigned!<br>Pope Benedict's Secret Struggle with _!",
    "pick": 1
    },
    {
    "text": "GREETINGS HUMANS<br><br>I AM _ BOT<br><br>EXECUTING PROGRAM",
    "pick": 1
    },
    {
    "text": "Kids these days with their iPods and their Internet. In my day, all we needed to pass the time was _.",
    "pick": 1
    },
    {
    "text": "Because they are forbidden from masturbating, Mormons channel their repressed sexual energy into _.",
    "pick": 1
    },
    {
    "text": "Blessed are you, Lord our God, creator of the universe, who has granted us _.",
    "pick": 1
    },
    {
    "text": "But wait, there's more! If you order _ in the next 15 minutes, we'll throw in _ absolutely free!",
    "pick": 2
    },
    {
    "text": "What's the one thing that makes an elf instantly ejaculate?",
    "pick": 1
    },
    {
    "text": "I really hope my grandmother doesn't ask me to explain _ again.",
    "pick": 1
    },
    {
    "text": "A wise man said, \"Everything is about sex. Except sex. Sex is about _.\"",
    "pick": 1
    },
    {
    "text": "Our relationship is strictly professional. Let's not complicate things with _.",
    "pick": 1
    },
    {
    "text": "Corruption. Betrayal. _. Coming soon to Netflix, \"House of _.\"",
    "pick": 2
    },
    {
    "text": "Because you enjoyed _, we thought you'd like _.",
    "pick": 2
    },
    {
    "text": "I can't believe Netflix is using _ to promote House of Cards.",
    "pick": 1
    },
    {
    "text": "We're not like other news organizations. Here at Slugline, we welcome _ in the office. ",
    "pick": 1
    },
    {
    "text": "I'm not going to lie. I despise _. There, I said it.",
    "pick": 1
    },
    {
    "text": "Cancel all my meetings. We've got a situation with _ that requires my immediate attention.",
    "pick": 1
    },
    {
    "text": "If you need him to, Remy Danton can pull some strings and get you _, but it'll cost you.",
    "pick": 1
    },
    {
    "pick": 1,
    "text": "<b>Absurd</b><br/><small>ridiculous, senseless, foolish</small>"
    },
    {
    "pick": 1,
    "text": "<b>Addictive</b><br/><small>obsessive, consuming, captivating</small>"
    },
    {
    "pick": 1,
    "text": "<b>Adorable</b><br/><small>lovable, charming, delightful</small>"
    },
    {
    "pick": 1,
    "text": "<b>Aged</b><br/><small>old, ancient, mature</small>"
    },
    {
    "pick": 1,
    "text": "<b>American</b><br/><small>U.S. Citizen, Yankee, Apple Pie</small>"
    },
    {
    "pick": 1,
    "text": "<b>Ancient</b><br/><small>elderly, old, antique</small>"
    },
    {
    "pick": 1,
    "text": "<b>Animated</b><br/><small>lively, exuberant, spirited</small>"
    },
    {
    "pick": 1,
    "text": "<b>Annoying</b><br/><small>irritating, bothersome, teasing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Appetizing</b><br/><small>appealing, tasty, flavorful</small>"
    },
    {
    "pick": 1,
    "text": "<b>Arrogant</b><br/><small>egotistical, overconfident, conceited</small>"
    },
    {
    "pick": 1,
    "text": "<b>Awesome</b><br/><small>amazing, remarkable, majestic</small>"
    },
    {
    "pick": 1,
    "text": "<b>Awkward</b><br/><small>clumsy, bumbling, uncoordinated</small>"
    },
    {
    "pick": 1,
    "text": "<b>Believable</b><br/><small>trustworthy, credible, convincing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Bogus</b><br/><small>fraudulent, phony, insincere</small>"
    },
    {
    "pick": 1,
    "text": "<b>Boisterous</b><br/><small>loud, rambunctious, rowdy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Bold</b><br/><small>daring, brave, courageous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Boring</b><br/><small>dull, tedious, monotonous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Bright</b><br/><small>brilliant, radiant, shiny</small>"
    },
    {
    "pick": 1,
    "text": "<b>Brilliant</b><br/><small>dazzling, gleaming, intelligent</small>"
    },
    {
    "pick": 1,
    "text": "<b>Busy</b><br/><small>occupied, meddlesome, engrossed</small>"
    },
    {
    "pick": 1,
    "text": "<b>Calm</b><br/><small>peaceful, tranquil, placid</small>"
    },
    {
    "pick": 1,
    "text": "<b>Casual</b><br/><small>easygoing, blase, nonchalant</small>"
    },
    {
    "pick": 1,
    "text": "<b>Charismatic</b><br/><small>alluring, magnetic, charming</small>"
    },
    {
    "pick": 1,
    "text": "<b>Charming</b><br/><small>captivating, enchanting, fascinating</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cheesy</b><br/><small>trashy, tawdry, far-fetched</small>"
    },
    {
    "pick": 1,
    "text": "<b>Chewy</b><br/><small>gummy, rubbery, stringy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Chunky</b><br/><small>lumpy, chubby, bumpy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Classic</b><br/><small>timeless, definitive, vintage</small>"
    },
    {
    "pick": 1,
    "text": "<b>Clean</b><br/><small>washed, pure, tidy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Clueless</b><br/><small>unaware, oblivious, ignorant</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cold</b><br/><small>chilly, icy, aloof</small>"
    },
    {
    "pick": 1,
    "text": "<b>Colorful</b><br/><small>vivid, brilliant, kaleidoscopic</small>"
    },
    {
    "pick": 1,
    "text": "<b>Comfortable</b><br/><small>cozy, snug, restful</small>"
    },
    {
    "pick": 1,
    "text": "<b>Comical</b><br/><small>funny, hilarious, amusing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Complicated</b><br/><small>difficult, complex, involved</small>"
    },
    {
    "pick": 1,
    "text": "<b>Confused</b><br/><small>muddled, bewildered, perplexed</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cool</b><br/><small>chilly, hip, cold-blooded</small>"
    },
    {
    "pick": 1,
    "text": "<b>Corrupt</b><br/><small>dishonest, underhanded, shady</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cosmic</b><br/><small>limitless, planetary, far out</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cosmopolitan</b><br/><small>sophisticated, urbane, well-informed</small>"
    },
    {
    "pick": 1,
    "text": "<b>Courageous</b><br/><small>brave, gallant, dauntless</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cowardly</b><br/><small>fearful, afraid, spineless</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cranky</b><br/><small>crabby, cantankerous, grouchy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Crazed</b><br/><small>insane, wild, deranged</small>"
    },
    {
    "pick": 1,
    "text": "<b>Crazy</b><br/><small>insane, bizarre, wacky</small>"
    },
    {
    "pick": 1,
    "text": "<b>Creative</b><br/><small>imaginative, artistic, original</small>"
    },
    {
    "pick": 1,
    "text": "<b>Creepy</b><br/><small>frightening, slithering, scary</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cruel</b><br/><small>mean, harsh, merciless</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cuddly</b><br/><small>loving, tender, huggable</small>"
    },
    {
    "pick": 1,
    "text": "<b>Cute</b><br/><small>pretty, perky, delightful</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dainty</b><br/><small>delicate, fragile, thin</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dangerous</b><br/><small>risky, chancy, hazardous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dead</b><br/><small>deceased, expired, unresponsive</small>"
    },
    {
    "pick": 1,
    "text": "<b>Deadly</b><br/><small>fatal, lethal, murderous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Delicate</b><br/><small>dainty, tender, elegant</small>"
    },
    {
    "pick": 1,
    "text": "<b>Delicious</b><br/><small>tasty, pleasing, appetizing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Delightful</b><br/><small>pleasing, enjoyable, charming</small>"
    },
    {
    "pick": 1,
    "text": "<b>Demanding</b><br/><small>difficult, exacting, bothersome</small>"
    },
    {
    "pick": 1,
    "text": "<b>Depressing</b><br/><small>dismal, gloomy, sad</small>"
    },
    {
    "pick": 1,
    "text": "<b>Desperate</b><br/><small>frantic, headlong, reckless</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dignified</b><br/><small>stately, honorable, distinguished</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dirty</b><br/><small>unclean, soiled, impure</small>"
    },
    {
    "pick": 1,
    "text": "<b>Distinguished</b><br/><small>dignified, extraordinary, acclaimed</small>"
    },
    {
    "pick": 1,
    "text": "<b>Disturbing</b><br/><small>unsettling, troubling, worrisome</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dramatic</b><br/><small>exciting, sensational, theatrical</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dreamy</b><br/><small>fanciful, whimsical, heavenly</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dull</b><br/><small>boring, stupid, blunt</small>"
    },
    {
    "pick": 1,
    "text": "<b>Dysfunctional</b><br/><small>impaired, damaged, maladjusted</small>"
    },
    {
    "pick": 1,
    "text": "<b>Earthy</b><br/><small>unrefined, natural, crude</small>"
    },
    {
    "pick": 1,
    "text": "<b>Easy</b><br/><small>effortless, gentle, promiscuous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Eccentric</b><br/><small>peculiar, odd, bizarre</small>"
    },
    {
    "pick": 1,
    "text": "<b>Elitist</b><br/><small>snobbish, arrogant, smug</small>"
    },
    {
    "pick": 1,
    "text": "<b>Emotional</b><br/><small>passionate, moving, volatile</small>"
    },
    {
    "pick": 1,
    "text": "<b>Eternal</b><br/><small>timeless, immortal, perpetual</small>"
    },
    {
    "pick": 1,
    "text": "<b>European</b><br/><small>of Europe, from Europe, about Europe</small>"
    },
    {
    "pick": 1,
    "text": "<b>Exciting</b><br/><small>thrilling, breathtaking, arousing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Exhausting</b><br/><small>weakening, tiring, draining</small>"
    },
    {
    "pick": 1,
    "text": "<b>Expensive</b><br/><small>costly, valuable, exorbitant</small>"
    },
    {
    "pick": 1,
    "text": "<b>Explosive</b><br/><small>bursting, blasting, dangerous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Exquisite</b><br/><small>excellent, refined, flawless</small>"
    },
    {
    "pick": 1,
    "text": "<b>Extreme</b><br/><small>exceptional, superlative, radical</small>"
    },
    {
    "pick": 1,
    "text": "<b>Fabulous</b><br/><small>marvelous, wonderful, incredible</small>"
    },
    {
    "pick": 1,
    "text": "<b>Fake</b><br/><small>unreal, counterfeit, deceptive</small>"
    },
    {
    "pick": 1,
    "text": "<b>Fancy</b><br/><small>showy, ornate, decorated</small>"
    },
    {
    "pick": 1,
    "text": "<b>Fantastic</b><br/><small>awesome, outrageous, imaginary</small>"
    },
    {
    "pick": 1,
    "text": "<b>Feminine</b><br/><small>womanly, ladylike, unmanly</small>"
    },
    {
    "pick": 1,
    "text": "<b>Filthy</b><br/><small>dirty, foul, unclean</small>"
    },
    {
    "pick": 1,
    "text": "<b>Flirtatious</b><br/><small>brazen, saucy, forward</small>"
    },
    {
    "pick": 1,
    "text": "<b>Foreign</b><br/><small>alien, unfamiliar, exotic</small>"
    },
    {
    "pick": 1,
    "text": "<b>Fragrant</b><br/><small>aromatic, odorous, perfumed</small>"
    },
    {
    "pick": 1,
    "text": "<b>Frazzled</b><br/><small>exhausted, frayed, worn</small>"
    },
    {
    "pick": 1,
    "text": "<b>Fresh</b><br/><small>new, original, good</small>"
    },
    {
    "pick": 1,
    "text": "<b>Friendly</b><br/><small>affectionate, comforting, welcoming</small>"
    },
    {
    "pick": 1,
    "text": "<b>Frightening</b><br/><small>scary, horrifying, awesome</small>"
    },
    {
    "pick": 1,
    "text": "<b>Frivolous</b><br/><small>trivial, silly, shallow</small>"
    },
    {
    "pick": 1,
    "text": "<b>Funky</b><br/><small>groovy, psychedelic, hip</small>"
    },
    {
    "pick": 1,
    "text": "<b>Funny</b><br/><small>amusing, comic, odd</small>"
    },
    {
    "pick": 1,
    "text": "<b>Furious</b><br/><small>angry, raging, wild</small>"
    },
    {
    "pick": 1,
    "text": "<b>Fuzzy</b><br/><small>downy, unclear, furry</small>"
    },
    {
    "pick": 1,
    "text": "<b>Glamorous</b><br/><small>beautiful, dazzling, stylish</small>"
    },
    {
    "pick": 1,
    "text": "<b>Glitzy</b><br/><small>flashy, showy, gaudy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Global</b><br/><small>world-wide, spherical, universal</small>"
    },
    {
    "pick": 1,
    "text": "<b>Glorious</b><br/><small>magnificent, delightful, splendid</small>"
    },
    {
    "pick": 1,
    "text": "<b>Goody-Goody</b><br/><small>sweet, well-behaved, virtuous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Graceful</b><br/><small>elegant, supple, limber</small>"
    },
    {
    "pick": 1,
    "text": "<b>Handsome</b><br/><small>attractive, elegant, fine</small>"
    },
    {
    "pick": 1,
    "text": "<b>Hardworking</b><br/><small>industrious, diligent, busy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Harmful</b><br/><small>hurtful, unhealthy, damaging</small>"
    },
    {
    "pick": 1,
    "text": "<b>Haunting</b><br/><small>unforgettable, bewitching, unearthly</small>"
    },
    {
    "pick": 1,
    "text": "<b>Healthy</b><br/><small>hearty, robust, wholesome</small>"
    },
    {
    "pick": 1,
    "text": "<b>Heartless</b><br/><small>insensitive, cruel, uncaring</small>"
    },
    {
    "pick": 1,
    "text": "<b>Hilarious</b><br/><small>funny, witty, amusing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Honorable</b><br/><small>honest, just, virtuous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Hopeless</b><br/><small>pessimistic, desperate, downhearted</small>"
    },
    {
    "pick": 1,
    "text": "<b>Horrifying</b><br/><small>offensive, abominable, disgusting</small>"
    },
    {
    "pick": 1,
    "text": "<b>Hostile</b><br/><small>antagonistic, aggressive, warlike</small>"
    },
    {
    "pick": 1,
    "text": "<b>Hot</b><br/><small>blazing, heated, spicy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Idiotic</b><br/><small>foolish, dumb, moronic</small>"
    },
    {
    "pick": 1,
    "text": "<b>Important</b><br/><small>significant, substantial, momentous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Industrious</b><br/><small>diligent, busy, hard-working</small>"
    },
    {
    "pick": 1,
    "text": "<b>Influential</b><br/><small>powerful, prominent, important</small>"
    },
    {
    "pick": 1,
    "text": "<b>Innocent</b><br/><small>guiltless, pure, naive</small>"
    },
    {
    "pick": 1,
    "text": "<b>Insane</b><br/><small>psychotic, deranged, mad</small>"
    },
    {
    "pick": 1,
    "text": "<b>Inspirational</b><br/><small>exhilarating, inspiring, stimulating</small>"
    },
    {
    "pick": 1,
    "text": "<b>Insulting</b><br/><small>offending, discourteous, rude</small>"
    },
    {
    "pick": 1,
    "text": "<b>Intelligent</b><br/><small>bright, smart, brainy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Intense</b><br/><small>extreme, passionate, strained</small>"
    },
    {
    "pick": 1,
    "text": "<b>Irresistible</b><br/><small>overpowering, overwhelming, compelling</small>"
    },
    {
    "pick": 1,
    "text": "<b>Irritating</b><br/><small>annoying, troublesome, provoking</small>"
    },
    {
    "pick": 1,
    "text": "<b>Juicy</b><br/><small>drippy, luscious, tantalizing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Lazy</b><br/><small>lifeless, apathetic, weary</small>"
    },
    {
    "pick": 1,
    "text": "<b>Legendary</b><br/><small>famous, distinctive, prominent</small>"
    },
    {
    "pick": 1,
    "text": "<b>Loud</b><br/><small>noisy, boisterous, deafening</small>"
    },
    {
    "pick": 1,
    "text": "<b>Lovable</b><br/><small>adorable, endearing, cuddly</small>"
    },
    {
    "pick": 1,
    "text": "<b>Lucky</b><br/><small>fortunate, serendipitous, favored</small>"
    },
    {
    "pick": 1,
    "text": "<b>Luscious</b><br/><small>delicious, savory, juicy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Luxurious</b><br/><small>opulent, lavish, sumptuous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Magical</b><br/><small>enchanting, miraculous, marvelous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Manly</b><br/><small>masculine, virile, strong</small>"
    },
    {
    "pick": 1,
    "text": "<b>Masculine</b><br/><small>male, manly, virile</small>"
    },
    {
    "pick": 1,
    "text": "<b>Meek</b><br/><small>shy, mild, timid</small>"
    },
    {
    "pick": 1,
    "text": "<b>Melodramatic</b><br/><small>theatrical, sensational, showy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Mischievous</b><br/><small>naughty, prankish, sly</small>"
    },
    {
    "pick": 1,
    "text": "<b>Miserable</b><br/><small>wretched, pitiful, forlorn</small>"
    },
    {
    "pick": 1,
    "text": "<b>Misunderstood</b><br/><small>not grasped, not learned, not absorbed</small>"
    },
    {
    "pick": 1,
    "text": "<b>Mysterious</b><br/><small>secretive, puzzling, strange</small>"
    },
    {
    "pick": 1,
    "text": "<b>Mystical</b><br/><small>spiritual, secretive, esoteric</small>"
    },
    {
    "pick": 1,
    "text": "<b>Naive</b><br/><small>unsophisticated, childlike, simple</small>"
    },
    {
    "pick": 1,
    "text": "<b>Nasty</b><br/><small>mean, inclement, offensive</small>"
    },
    {
    "pick": 1,
    "text": "<b>Natural</b><br/><small>pure, simple, unadorned</small>"
    },
    {
    "pick": 1,
    "text": "<b>Neat</b><br/><small>tidy, orderly, cool</small>"
    },
    {
    "pick": 1,
    "text": "<b>Neglected</b><br/><small>ignored, disregarded, rejected</small>"
    },
    {
    "pick": 1,
    "text": "<b>Nerdy</b><br/><small>unhip, uncool, dorky</small>"
    },
    {
    "pick": 1,
    "text": "<b>Normal</b><br/><small>usual, common, ordinary</small>"
    },
    {
    "pick": 1,
    "text": "<b>Obnoxious</b><br/><small>offensive, repulsive, annoying</small>"
    },
    {
    "pick": 1,
    "text": "<b>Odd</b><br/><small>different, eccentric, bizarre</small>"
    },
    {
    "pick": 1,
    "text": "<b>Offensive</b><br/><small>insulting, vulgar, attacking</small>"
    },
    {
    "pick": 1,
    "text": "<b>Ordinary</b><br/><small>usual, common, plain</small>"
    },
    {
    "pick": 1,
    "text": "<b>Organic</b><br/><small>natural, clean, biological</small>"
    },
    {
    "pick": 1,
    "text": "<b>Outrageous</b><br/><small>shocking, scandalous, disgraceful</small>"
    },
    {
    "pick": 1,
    "text": "<b>Overwhelming</b><br/><small>exhaustive, breathtaking, monumental</small>"
    },
    {
    "pick": 1,
    "text": "<b>Painful</b><br/><small>hurtful, agonizing, unbearable</small>"
    },
    {
    "pick": 1,
    "text": "<b>Pathetic</b><br/><small>pitiful, distressing, heart-rending</small>"
    },
    {
    "pick": 1,
    "text": "<b>Patriotic</b><br/><small>nationalistic, loyal, public-spirited</small>"
    },
    {
    "pick": 1,
    "text": "<b>Peaceful</b><br/><small>serene, restful, calm</small>"
    },
    {
    "pick": 1,
    "text": "<b>Perfect</b><br/><small>faultless, consummate, exact</small>"
    },
    {
    "pick": 1,
    "text": "<b>Philosophical</b><br/><small>thoughtful, contemplative, wise</small>"
    },
    {
    "pick": 1,
    "text": "<b>Phony</b><br/><small>false, artificial, imitation</small>"
    },
    {
    "pick": 1,
    "text": "<b>Playful</b><br/><small>fun, frisky, entertaining</small>"
    },
    {
    "pick": 1,
    "text": "<b>Popular</b><br/><small>well-liked, accepted, preferred</small>"
    },
    {
    "pick": 1,
    "text": "<b>Powerful</b><br/><small>strong, forceful, robust</small>"
    },
    {
    "pick": 1,
    "text": "<b>Primitive</b><br/><small>prehistoric, primal, uncivilized</small>"
    },
    {
    "pick": 1,
    "text": "<b>Principled</b><br/><small>conscientious, ethical, scrupulous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Profound</b><br/><small>deep, wise, thoughtful</small>"
    },
    {
    "pick": 1,
    "text": "<b>Puffy</b><br/><small>swollen, billowy, bloated</small>"
    },
    {
    "pick": 1,
    "text": "<b>Pure</b><br/><small>innocent, unadulterated, chaste</small>"
    },
    {
    "pick": 1,
    "text": "<b>Quiet</b><br/><small>peaceful, silent, calm</small>"
    },
    {
    "pick": 1,
    "text": "<b>Radiant</b><br/><small>shining, glowing, sparkling</small>"
    },
    {
    "pick": 1,
    "text": "<b>Radical</b><br/><small>unconventional, revolutionary, extreme</small>"
    },
    {
    "pick": 1,
    "text": "<b>Rare</b><br/><small>scarce, unusual, half-cooked</small>"
    },
    {
    "pick": 1,
    "text": "<b>Realistic</b><br/><small>authentic, lifelike, reasonable</small>"
    },
    {
    "pick": 1,
    "text": "<b>Refined</b><br/><small>well-bred, purified, cultivated</small>"
    },
    {
    "pick": 1,
    "text": "<b>Refreshing</b><br/><small>brisk, invigorating, rejuvenating</small>"
    },
    {
    "pick": 1,
    "text": "<b>Relaxing</b><br/><small>restful, calming, peaceful</small>"
    },
    {
    "pick": 1,
    "text": "<b>Repulsive</b><br/><small>disgusting, offensive, foul</small>"
    },
    {
    "pick": 1,
    "text": "<b>Responsible</b><br/><small>accountable, obligated, mature</small>"
    },
    {
    "pick": 1,
    "text": "<b>Revolutionary</b><br/><small>innovative, rebellious, radical</small>"
    },
    {
    "pick": 1,
    "text": "<b>Rich</b><br/><small>wealthy, affluent, moneyed</small>"
    },
    {
    "pick": 1,
    "text": "<b>Ridiculous</b><br/><small>preposterous, absurd, ludicrous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Risky</b><br/><small>hazardous, daring, speculative</small>"
    },
    {
    "pick": 1,
    "text": "<b>Rough</b><br/><small>scratchy, uneven, jagged</small>"
    },
    {
    "pick": 1,
    "text": "<b>Saintly</b><br/><small>virtuous, angelic, divine</small>"
    },
    {
    "pick": 1,
    "text": "<b>Sappy</b><br/><small>gooey, mushy, romantic</small>"
    },
    {
    "pick": 1,
    "text": "<b>Scary</b><br/><small>frightening, absurd, ugly</small>"
    },
    {
    "pick": 1,
    "text": "<b>Scenic</b><br/><small>picturesque, dramatic, panoramic</small>"
    },
    {
    "pick": 1,
    "text": "<b>Selfish</b><br/><small>stingy, greedy, miserly</small>"
    },
    {
    "pick": 1,
    "text": "<b>Senseless</b><br/><small>meaningless, absurd, foolish</small>"
    },
    {
    "pick": 1,
    "text": "<b>Sensitive</b><br/><small>susceptible, sympathetic, tender</small>"
    },
    {
    "pick": 1,
    "text": "<b>Sensual</b><br/><small>tactile, pleasing, sexual</small>"
    },
    {
    "pick": 1,
    "text": "<b>Sexy</b><br/><small>arousing, appealing, seductive</small>"
    },
    {
    "pick": 1,
    "text": "<b>Shallow</b><br/><small>superficial, trivial, not deep</small>"
    },
    {
    "pick": 1,
    "text": "<b>Sharp</b><br/><small>pointed, keen, acute</small>"
    },
    {
    "pick": 1,
    "text": "<b>Shiny</b><br/><small>reflective, gleaming, polished</small>"
    },
    {
    "pick": 1,
    "text": "<b>Shocking</b><br/><small>frightening, electrifying, startling</small>"
    },
    {
    "pick": 1,
    "text": "<b>Shy</b><br/><small>bashful, timid, cautious</small>"
    },
    {
    "pick": 1,
    "text": "<b>Silly</b><br/><small>goofy, absurd, nonsensical</small>"
    },
    {
    "pick": 1,
    "text": "<b>Smart</b><br/><small>intelligent, stylish, witty</small>"
    },
    {
    "pick": 1,
    "text": "<b>Smelly</b><br/><small>stinky, odorous, rank</small>"
    },
    {
    "pick": 1,
    "text": "<b>Smooth</b><br/><small>even, level, flat</small>"
    },
    {
    "pick": 1,
    "text": "<b>Snappy</b><br/><small>stylish, trendy, fast</small>"
    },
    {
    "pick": 1,
    "text": "<b>Soft</b><br/><small>malleable, pliable, mushy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Speedy</b><br/><small>quick, rapid, fast</small>"
    },
    {
    "pick": 1,
    "text": "<b>Spicy</b><br/><small>flavorable, tangy, hot</small>"
    },
    {
    "pick": 1,
    "text": "<b>Spiritual</b><br/><small>religious, inspired, supernatural</small>"
    },
    {
    "pick": 1,
    "text": "<b>Spooky</b><br/><small>scary, weird, ghostly</small>"
    },
    {
    "pick": 1,
    "text": "<b>Spunky</b><br/><small>perky, lively, spirited</small>"
    },
    {
    "pick": 1,
    "text": "<b>Squeaky Clean</b><br/><small>pure, immaculate, unapproachable</small>"
    },
    {
    "pick": 1,
    "text": "<b>Stereotyped</b><br/><small>pigeonholed, caricatured, characterized</small>"
    },
    {
    "pick": 1,
    "text": "<b>Stunning</b><br/><small>astonishing, staggering, astounding</small>"
    },
    {
    "pick": 1,
    "text": "<b>Sultry</b><br/><small>sweltering, humid, sensual</small>"
    },
    {
    "pick": 1,
    "text": "<b>Sweet</b><br/><small>sugary, caring, good</small>"
    },
    {
    "pick": 1,
    "text": "<b>Swift</b><br/><small>quick, speedy, expeditious</small>"
    },
    {
    "pick": 1,
    "text": "<b>Talented</b><br/><small>gifted, clever, skillful</small>"
    },
    {
    "pick": 1,
    "text": "<b>Tame</b><br/><small>subdued, gentle, trained</small>"
    },
    {
    "pick": 1,
    "text": "<b>Technological</b><br/><small>scientific, futuristic, mechanical</small>"
    },
    {
    "pick": 1,
    "text": "<b>Temperamental</b><br/><small>moody, irritable, short-tempered</small>"
    },
    {
    "pick": 1,
    "text": "<b>Timeless</b><br/><small>classic, ageless, well-established</small>"
    },
    {
    "pick": 1,
    "text": "<b>Touchy-Feely</b><br/><small>affectionate, tactile, huggy</small>"
    },
    {
    "pick": 1,
    "text": "<b>Tough</b><br/><small>strong, firm, difficult</small>"
    },
    {
    "pick": 1,
    "text": "<b>Trustworthy</b><br/><small>honest, reliable, unfailing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Twisted</b><br/><small>distorted, warped, perverted</small>"
    },
    {
    "pick": 1,
    "text": "<b>Unbelievable</b><br/><small>incredible, far-fetched, impossible</small>"
    },
    {
    "pick": 1,
    "text": "<b>Unforgettable</b><br/><small>notable, impressive, remarkable</small>"
    },
    {
    "pick": 1,
    "text": "<b>Unhealthy</b><br/><small>risky, sickly, dangerous</small>"
    },
    {
    "pick": 1,
    "text": "<b>Unnatural</b><br/><small>abnormal, artificial, bizarre</small>"
    },
    {
    "pick": 1,
    "text": "<b>Unreal</b><br/><small>imaginary, illusionary, unbelievable</small>"
    },
    {
    "pick": 1,
    "text": "<b>Unscrupulous</b><br/><small>unethical, corrupt, unprincipled</small>"
    },
    {
    "pick": 1,
    "text": "<b>Unusual</b><br/><small>rare, odd, uncommon</small>"
    },
    {
    "pick": 1,
    "text": "<b>Useless</b><br/><small>worthless, ineffective, unneeded</small>"
    },
    {
    "pick": 1,
    "text": "<b>Violent</b><br/><small>furious, vicious, destructive</small>"
    },
    {
    "pick": 1,
    "text": "<b>Virtuous</b><br/><small>worthy, righteous, chaste</small>"
    },
    {
    "pick": 1,
    "text": "<b>Visionary</b><br/><small>idealistic, prophetic, far-seeing</small>"
    },
    {
    "pick": 1,
    "text": "<b>Weird</b><br/><small>abnormal, peculiar, odd</small>"
    },
    {
    "pick": 1,
    "text": "<b>Wicked</b><br/><small>evil, corrupt, depraved</small>"
    },
    {
    "pick": 1,
    "text": "<b>Wild</b><br/><small>untamed, savage, ferocious</small>"
    },
    {
    "pick": 1,
    "text": "<b>Witty</b><br/><small>clever, humorous, cunning</small>"
    },
    {
    "pick": 1,
    "text": "<b>Woebegone</b><br/><small>dismal, sorrowful, bummed out</small>"
    },
    {
    "pick": 1,
    "text": "<b>Worldly</b><br/><small>experienced, sophisticated, materialistic</small>"
    },
    {
    "pick": 1,
    "text": "<b>Zany</b><br/><small>crazy, funny, wacky</small>"
    },
    {
    "pick": 1,
    "text": "9-1-1, what's your emergency?"
    },
    {
    "pick": 1,
    "text": "_, just for a second. Just to see how it feels."
    },
    {
    "pick": 1,
    "text": "_, you da real MVP."
    },
    {
    "pick": 1,
    "text": "_: Ain't nobody got time for that!"
    },
    {
    "pick": 1,
    "text": "_: boil 'em, mash 'em, stick 'em in a stew!"
    },
    {
    "pick": 1,
    "text": "_: I volunteer as tribute!"
    },
    {
    "pick": 1,
    "text": "_: it's magically delicious."
    },
    {
    "pick": 1,
    "text": "_: Just another way that God shows us he loves us."
    },
    {
    "pick": 1,
    "text": "_: Just girly things."
    },
    {
    "pick": 1,
    "text": "_: Just sayin'."
    },
    {
    "pick": 1,
    "text": "_: not even once."
    },
    {
    "pick": 1,
    "text": "_: Provided by the management for your protection."
    },
    {
    "pick": 1,
    "text": "_: Your ideas are intriguing to me and I wish to subscribe to your newsletter."
    },
    {
    "pick": 1,
    "text": "_? That's what <i>she</i> said."
    },
    {
    "pick": 1,
    "text": "A new Russian dash-cam video shows _, right there in the middle of the street!"
    },
    {
    "pick": 2,
    "text": "A wild _ appears! You used _! It's super effective!"
    },
    {
    "pick": 1,
    "text": "According to a new UN treaty, _ now qualifies as a weapon of mass destruction."
    },
    {
    "pick": 2,
    "text": "An ounce of _ is worth a pound of _."
    },
    {
    "pick": 3,
    "text": "Ancient Chinese proverb say: _ is just _ without _."
    },
    {
    "pick": 1,
    "text": "Apple&reg; has announced a new device that promises to revolutionize the way we think about _."
    },
    {
    "pick": 1,
    "text": "Audiences at Sundance were traumatized by Lars von Trier's controversial new film, &quot;_.&quot;"
    },
    {
    "pick": 1,
    "text": "Before I got laid off, I never pictured a career in _."
    },
    {
    "pick": 3,
    "text": "Bentley's&reg; latest ultra-high-end luxury sedan comes complete with _, _ and _."
    },
    {
    "pick": 1,
    "text": "Bowing to years of pressure, the Washington Redskins have officially been renamed the Washington _."
    },
    {
    "pick": 1,
    "text": "Coming soon from Pixar: &quot;_&quot;."
    },
    {
    "pick": 1,
    "text": "Dear Dan Savage, Please help. I am unable to achieve orgasm without _."
    },
    {
    "pick": 2,
    "text": "Dear, your father and I found _ and _ in your bedroom. I'm shocked, and frankly just a <i>little</i> disappointed."
    },
    {
    "pick": 1,
    "text": "During the lunch meeting, we were shocked to hear the boss reveal her obsession with _."
    },
    {
    "pick": 1,
    "text": "Ever since &quot;the incident,&quot; every time I close my eyes, I still see _."
    },
    {
    "pick": 1,
    "text": "Experts say that without careful management and conservation, _ will disappear within our liefetimes."
    },
    {
    "pick": 1,
    "text": "From the people who brough you <i>Sharktopus</i> and <i>Sharknado</i>, Syfy's&reg; next horror film combines sharks with _."
    },
    {
    "pick": 1,
    "text": "From the producers of Shark Week... Coming this fall, _ Week."
    },
    {
    "pick": 1,
    "text": "Fuddruckers&reg; is secretly testing a burger made with _."
    },
    {
    "pick": 1,
    "text": "Gentleman, I'm sure you're wondering why I asked you here this evening. It's a long story, but it all began with _."
    },
    {
    "pick": 1,
    "text": "Go-Go-Gadget _!"
    },
    {
    "pick": 2,
    "text": "Good news, everyone! I'm giving a TED Talk on the subject of how _ will transform _."
    },
    {
    "pick": 1,
    "text": "Having abandoned his pleas for a return to the gold standard, Ron Paul is now promoting a _-based economy."
    },
    {
    "pick": 1,
    "text": "Hey man, you gonna come check out my shown tonight? My new band is called &quot;_.&quot;"
    },
    {
    "pick": 1,
    "text": "How did I get this restraining order?"
    },
    {
    "pick": 1,
    "text": "How did I get through college?"
    },
    {
    "pick": 1,
    "text": "How did I hurt my back?"
    },
    {
    "pick": 1,
    "text": "How did I spend my inheritance?"
    },
    {
    "pick": 1,
    "text": "How did my grandparents make it through the Great Depression?"
    },
    {
    "pick": 2,
    "text": "I am _. I speak for _."
    },
    {
    "pick": 1,
    "text": "I am become _, the destroyer of worlds."
    },
    {
    "pick": 1,
    "text": "I do declare, in times of distress I have always relied on _."
    },
    {
    "pick": 1,
    "text": "I do wish the newspapers hadn't mentioned _ in grandpa's obituary."
    },
    {
    "pick": 1,
    "text": "I don't care <i>what</i> people say, _ is <i>not</i> a crime."
    },
    {
    "pick": 3,
    "text": "I got some strange looks in the checkout line when the cashier noticed _, _ and _ in my cart."
    },
    {
    "pick": 3,
    "text": "I have this recurring dream where I'm _, and I'm giving _ to _."
    },
    {
    "pick": 1,
    "text": "I have to admit... it took me a while to agree to it, but incorporating _ into our wedding ceremony is a decision I will never regret."
    },
    {
    "pick": 1,
    "text": "I quit my job as a bartender the night some jackass left me _ as a tip."
    },
    {
    "pick": 1,
    "text": "I think I need to take Fluffums to puppy training: he has this terrible habit of _."
    },
    {
    "pick": 3,
    "text": "I was once sent to the HR department for an incident involving _, _, and (allegedly) _."
    },
    {
    "pick": 1,
    "text": "I wish it were something simple &mdash; like peanuts or shellfish &mdash; but my doctor tells me I'm actually allergic to _."
    },
    {
    "pick": 2,
    "text": "I'm gonna go build my own theme park! With _! And _!"
    },
    {
    "pick": 1,
    "text": "I'm so hungry I could eat _."
    },
    {
    "pick": 2,
    "text": "I've designed a spaceship powered by the energy released when you combine_ and _."
    },
    {
    "pick": 1,
    "text": "If laughter is the best medicine, the second best is _."
    },
    {
    "pick": 1,
    "text": "If people wouldn't be so quick to judge, I would give _ to the person on my left in a heartbeat."
    },
    {
    "pick": 1,
    "text": "If you wanna be my lover, you gotta get with _."
    },
    {
    "pick": 1,
    "text": "If you want a picture of the future, imagine a boot stamping on _ &mdash; forever."
    },
    {
    "pick": 2,
    "text": "In a groundbreaking experiment, _ has given birth to _."
    },
    {
    "pick": 1,
    "text": "In a move that has Hollywood insiders baffled, the producers of American Idol have decided to replace host Ryan Seacrest with _."
    },
    {
    "pick": 1,
    "text": "In a new novel by Nicholas Sparks, a young girl tragically falls in love with _."
    },
    {
    "pick": 1,
    "text": "In his final interview, Robin Williams discussed his private battle with _."
    },
    {
    "pick": 1,
    "text": "In my opinion, _ is grounds for justifiable homicide."
    },
    {
    "pick": 1,
    "text": "In Valhalla, it is said that all brave warriors are given _."
    },
    {
    "pick": 1,
    "text": "It took seven years in a remote Tibetan monastery, but I finally learned the art of _."
    },
    {
    "pick": 1,
    "text": "Like Midas reborn, everything she touches turns to _."
    },
    {
    "pick": 1,
    "text": "Michelle Obama outraged conservatives when she implied that _ maybe wasn't such a bad thing."
    },
    {
    "pick": 1,
    "text": "My psychic warns that my future is filled with _."
    },
    {
    "pick": 1,
    "text": "My tour of the White House radically escalated when Secret Service caught a glimpse of _ in my bag."
    },
    {
    "pick": 2,
    "text": "Netflix's&reg; new original series is a sitcom based around _ and _."
    },
    {
    "pick": 1,
    "text": "Now that he has retired, Pope Benedict can finally devote time to his true passion: _."
    },
    {
    "pick": 1,
    "text": "Oh my God! They killed _! You bastards!"
    },
    {
    "pick": 1,
    "text": "Oh, so you think you're too good for us now, little &quot;Miss _!&quot;"
    },
    {
    "pick": 1,
    "text": "Old Willy used to be just like you or me, before _ got ahold of him."
    },
    {
    "pick": 1,
    "text": "Ooooooohh yeah, baby you know what I like. Gimmie _."
    },
    {
    "pick": 2,
    "text": "PornHub.com's single most popular video features _ and _."
    },
    {
    "pick": 1,
    "text": "Rumor is, Kim Jong-un is executing prisoners with _."
    },
    {
    "pick": 1,
    "text": "Scientists have discovered the true cause of autism: _."
    },
    {
    "pick": 2,
    "text": "So then he says, &quot;If you want to make this relationship work, you need to give up _ and _.&quot; As. If."
    },
    {
    "pick": 1,
    "text": "Sweet, I just got a Groupon for _."
    },
    {
    "pick": 1,
    "text": "Thank you Mario! But _ is in another castle!"
    },
    {
    "pick": 2,
    "text": "Thanks to _, I now have a crippling fear of _."
    },
    {
    "pick": 1,
    "text": "The best part of waking up is _."
    },
    {
    "pick": 1,
    "text": "The last three items on my &quot;bucket list&quot;:"
    },
    {
    "pick": 2,
    "text": "The night before a blizzard, always stock up on _ and _."
    },
    {
    "pick": 1,
    "text": "The NSA wants to talk to me about an email I sent out containing these key phrases:"
    },
    {
    "pick": 1,
    "text": "The restaurant was nice, but I was surprised to see _ on the menu."
    },
    {
    "pick": 1,
    "text": "The road to hell is paved with _."
    },
    {
    "pick": 1,
    "text": "There's a new anime about four magical high school students and their adventures with _."
    },
    {
    "pick": 2,
    "text": "This bottle of 1961 Ch&acirc;teau Cheval Blanc has notes of _ and _."
    },
    {
    "pick": 2,
    "text": "This film has been rated &quot;NC-17&quot; for graphic depictions of _ and _."
    },
    {
    "pick": 3,
    "text": "Three bullet points from my OKCupid&reg; profile: _, _, and most importantly, _."
    },
    {
    "pick": 1,
    "text": "Today, Amazon.com&reg; received a patent on _."
    },
    {
    "pick": 1,
    "text": "Tonight on &quot;My Super Sweet 16,&quot; Stephani's parents give her _."
    },
    {
    "pick": 2,
    "text": "Tonight on &quot;Supernatural,&quot; Sam and Dean are forced to confront _ using only _."
    },
    {
    "pick": 2,
    "text": "Topping this week's non-fiction best-sellers: &quot;_ : the art of living with _.&quot;"
    },
    {
    "pick": 2,
    "text": "Ultimate Deathmatch: _ vs. _."
    },
    {
    "pick": 1,
    "text": "Utah is considering the legalization of _."
    },
    {
    "pick": 1,
    "text": "WANTED: a clean, well-lit place for _."
    },
    {
    "pick": 1,
    "text": "What <i>exactly</i> is up my ass?"
    },
    {
    "pick": 1,
    "text": "What <i>really</i> gave Superman his powers?"
    },
    {
    "pick": 1,
    "text": "What do I have rotting away in a storage unit?"
    },
    {
    "pick": 1,
    "text": "What do we want? _!<br><br>When do we want it? Now!"
    },
    {
    "pick": 1,
    "text": "What made me this way?"
    },
    {
    "pick": 1,
    "text": "What should I be for Halloween?"
    },
    {
    "pick": 1,
    "text": "What was one of the rejected flavors for Bertie Bott's Every Flavour Beans&trade;?"
    },
    {
    "pick": 1,
    "text": "What will they carve on my tombstone?"
    },
    {
    "pick": 1,
    "text": "What's my safe word?"
    },
    {
    "pick": 1,
    "text": "What's this town's best-kept secret?"
    },
    {
    "pick": 3,
    "text": "When I'm dating somebody, I can overlook _ and _, but _ is a deal-breaker."
    },
    {
    "pick": 1,
    "text": "When I've serious fucked up and need to make amends, what can I give my significant other to show them I am truly remorseful?"
    },
    {
    "pick": 1,
    "text": "When you play the Game Of _, you win or you die."
    },
    {
    "pick": 1,
    "text": "While officially still frowned on, _ is now permitted in the U.S. armed forces."
    },
    {
    "pick": 1,
    "text": "Who will be first against the wall when the revolution comes?"
    },
    {
    "pick": 1,
    "text": "Who's <i>really</i> to blame?"
    },
    {
    "pick": 2,
    "text": "Who's got _, _, and two thumbs? This guy!"
    },
    {
    "pick": 1,
    "text": "Why won't anyone sit with me?"
    },
    {
    "pick": 1,
    "text": "Why won't they let me in Chuck E. Cheese's&reg; anymore?"
    },
    {
    "pick": 1,
    "text": "William Shatner's shocking new autobiography is titled &quot;_: The Final Frontier.&quot;"
    },
    {
    "pick": 2,
    "text": "Yea, though I walk through the valley of _, I will fear no _."
    },
    {
    "pick": 1,
    "text": "Yes, it is I, the world's most dangerous supervillain: Baron Von _!"
    },
    {
    "pick": 2,
    "text": "You got your _ in my _!"
    },
    {
    "pick": 1,
    "text": "You have my sword. &quot;And you have my bow.&quot; &quot;And <i>my</i> _!&quot;"
    },
    {
    "pick": 1,
    "text": "You people are sick! There's <i>nothing</i> funny about _."
    },
    {
    "pick": 1,
    "text": "What's the most common obstacle to consummating a marriage on one's wedding night?"
    },
    {
    "pick": 1,
    "text": "What will the groom think of when he first sees the bride on their wedding day?"
    },
    {
    "pick": 1,
    "text": "What was the happiest memory from the honeymoon?"
    },
    {
    "pick": 1,
    "text": "What should every couple incorporate into their first dance?"
    },
    {
    "pick": 1,
    "text": "In a marriage, whatever the question is, the answer is always _."
    },
    {
    "pick": 1,
    "text": "First comes love, then comes marriage, then comes _."
    },
    {
    "pick": 1,
    "text": "If you like it, then you should put _ on it."
    },
    {
    "pick": 1,
    "text": "What's a sure sign of a healthy marriage?"
    },
    {
    "pick": 1,
    "text": "True love means _."
    },
    {
    "pick": 1,
    "text": "She's not just my wife. She's also _."
    },
    {
    "pick": 1,
    "text": "Consider including _ in your vows."
    },
    {
    "pick": 1,
    "text": "What's the #1 cause of wedding day jitters?"
    },
    {
    "pick": 1,
    "text": "What the fuck is your problem?"
    },
    {
    "pick": 1,
    "text": "What's the best way to spice up your marriage after years of monotony?"
    },
    {
    "pick": 2,
    "text": "It's not _ that puts strain on a relationship, it's _."
    },
    {
    "pick": 1,
    "text": "Love is patient, love is kind. Love is _."
    },
    {
    "pick": 1,
    "text": "Marriage is a lot of work, which mainly consists of _."
    },
    {
    "pick": 2,
    "text": "Marriage: the end of _ and the beginning of _."
    },
    {
    "pick": 1,
    "text": "_ doesn't count as cheating."
    },
    {
    "pick": 1,
    "text": "What was your favorite wedding photo of?"
    },
    {
    "pick": 1,
    "text": "_: grounds for divorce in all 50 states."
    },
    {
    "pick": 1,
    "text": "Along with something borrowed and something blue, be sure to take _ with you down the aisle."
    },
    {
    "pick": 2,
    "text": "The only thing worse than _ at a wedding is _."
    },
    {
    "pick": 1,
    "text": "What's the secret to a long and happy marriage?"
    },
    {
    "pick": 1,
    "text": "Nothing gets a wedding reception fired up like _."
    },
    {
    "pick": 1,
    "text": "What will be the best thing about the couple's married sex life?"
    },
    {
    "pick": 1,
    "text": "The first five years are the hardest. After that, it's all _."
    },
    {
    "pick": 1,
    "text": "Make sure you have _ and the rest will take care of itself."
    },
    {
    "pick": 1,
    "text": "The first issue the couple tackles in marriage counseling will be _."
    },
    {
    "pick": 1,
    "text": "Nothing says \"fulfilling life-long commitment\" like _."
    },
    {
    "pick": 1,
    "text": "It's trendy to include _ in your wedding these days."
    },
    {
    "pick": 1,
    "text": "Every wedding toast should include at least one mention of _."
    },
    {
    "pick": 1,
    "text": "What's the only thing sexier than confidence?"
    },
    {
    "pick": 1,
    "text": "The word \"husband\" comes from the Latin word for _."
    },
    {
    "pick": 1,
    "text": "Between the champagne toast and the cake-cutting, there was _."
    },
    {
    "pick": 1,
    "text": "_. A sure-fire cure for the seven-year itch."
    },
    {
    "pick": 1,
    "text": "_. A wedding gift you'll cherish forever."
    },
    {
    "pick": 1,
    "text": "In a committed adult relationship, _ goes a long way."
    },
    {
    "pick": 1,
    "text": "Studies show that married people are much more likely than single people to have _."
    },
    {
    "pick": 1,
    "text": "What unique detail did the bride's dress include?"
    },
    {
    "pick": 1,
    "text": "Being married means having the freedom to embrace _."
    },
    {
    "pick": 1,
    "text": "The wedding cake was shaped like _."
    },
    {
    "pick": 1,
    "text": "What's the groom hiding in his underwear?"
    },
    {
    "pick": 1,
    "text": "The ceremony ended with _."
    },
    {
    "pick": 1,
    "text": "The couple has a wonderful life filled with _ ahead of them."
    },
    {
    "pick": 1,
    "text": "There's nothing more romantic than _."
    },
    {
    "pick": 1,
    "text": "A healthy long-term sex life is built on _."
    },
    {
    "pick": 1,
    "text": "What's the couple's favorite shared hobby?"
    },
    {
    "pick": 1,
    "text": "Instead of a garter toss, try _."
    },
    {
    "pick": 1,
    "text": "How did you celebrate your first anniversary?"
    },
    {
    "pick": 1,
    "text": "What saved your marriage?"
    },
    {
    "pick": 1,
    "text": "Their first fight as a married couple was about _."
    },
    {
    "pick": 1,
    "text": "The proposal featured _."
    },
    {
    "pick": 1,
    "text": "What's a favorite pastime of the family you're marrying into?"
    },
    {
    "pick": 1,
    "text": "What did the rehearsal dinner taste like?"
    },
    {
    "text": "Real men watch _.",
    "pick": 1
    },
    {
    "text": "So wait, _ was actually _? Wow, I didn't see that one coming!",
    "pick": 2
    },
    {
    "text": "Whenever I'm splashed with cold water, I turn into _.",
    "pick": 1
    },
    {
    "text": "No matter how you look at it, ultimately _ is responsible for _.",
    "pick": 2
    },
    {
    "text": "_. That is my fetish.",
    "pick": 1
    },
    {
    "text": "_ is camping my lane.",
    "pick": 1
    },
    {
    "text": "Vegeta, what does the scouter say?",
    "pick": 1
    },
    {
    "text": "Who the hell do you think I am?!",
    "pick": 1
    },
    {
    "text": "On the next episode of Dragon Ball Z, Goku has a fierce battle with _.",
    "pick": 1
    },
    {
    "text": "Who let the dogs out?",
    "pick": 1
    },
    {
    "text": "In his next movie, Will Smith saves the world from _.",
    "pick": 1
    },
    {
    "text": "_ and _ are the new hot couple.",
    "pick": 2
    },
    {
    "text": "When North Korea gets _, it will be the end of the world.",
    "pick": 1
    },
    {
    "text": "Plan a three course meal.",
    "pick": 3
    },
    {
    "text": "Tastes like _.",
    "pick": 1
    },
    {
    "text": "Hey guys, check out my _ montage!",
    "pick": 1
    },
    {
    "text": "What will Xyzzy take over the world with?",
    "pick": 1
    },
    {
    "text": "Dustin Browder demands more _ in StarCraft&reg;.",
    "pick": 1
    },
    {
    "text": "Welcome to my secret lair on _.",
    "pick": 1
    },
    {
    "text": "Truly and without question, _ is the manliest of all men.",
    "pick": 1
    },
    {
    "text": "WANTED: $50,000,000,000 reward for the apprehension of_.",
    "pick": 1
    },
    {
    "text": "People die when they are _.",
    "pick": 1
    },
    {
    "text": "Okay, I'll admit it. I would totally go gay for _.",
    "pick": 1
    },
    {
    "text": "_.tumblr.com",
    "pick": 1
    },
    {
    "text": "_. Goddammit, Japan.",
    "pick": 1
    },
    {
    "text": "All your _ are belong to us",
    "pick": 1
    },
    {
    "text": "Digimon! Digivolve to: _-mon!",
    "pick": 1
    },
    {
    "text": "What will YouTube add in its next unneeded update?",
    "pick": 1
    },
    {
    "text": "I have never in my life laughed harder than the first time I watched _.",
    "pick": 1
    },
    {
    "text": "Who's an asshole?",
    "pick": 1
    },
    {
    "text": "Ladies and gentlemen, I give you _... COVERED IN BEES!!!",
    "pick": 1
    },
    {
    "text": "Sorry Mario, but _ is in another castle.",
    "pick": 1
    },
    {
    "text": "There are guilty pleasures. And then there's _.",
    "pick": 1
    },
    {
    "text": "_ for president!",
    "pick": 1
    },
    {
    "text": "_ is a lie.",
    "pick": 1
    },
    {
    "text": "Have fun, don't be _.",
    "pick": 1
    },
    {
    "text": "Don't get mad, get _.",
    "pick": 1
    },
    {
    "text": "When it comes to Japanese cuisine, there's simply nothing better than _.",
    "pick": 1
    },
    {
    "text": "After I saw _, I needed _.",
    "pick": 2
    },
    {
    "text": "I'm an expert on _.",
    "pick": 1
    },
    {
    "text": "Just announced: The brand new anime adaptation of _, starring _ as the voice of _.",
    "pick": 3
    },
    {
    "text": "_ is the only thing that matters.",
    "pick": 1
    },
    {
    "text": "Cunnilungus and psychiatry brought us to _.",
    "pick": 1
    },
    {
    "text": "We'll always have _.",
    "pick": 1
    },
    {
    "text": "OH MY GOD THIS IS THE GREATEST _ I'VE EVER SEEN IN MY LIFE!",
    "pick": 1
    },
    {
    "text": "And the award for the filthiest scene in an adult film goes to \"5 women and _.\"",
    "pick": 1
    },
    {
    "text": "What mildy annoyed you today?",
    "pick": 1
    },
    {
    "text": "The seldomly mentioned 4th little pig built his house out of _.",
    "pick": 1
    },
    {
    "text": "Let's all rock out to the sounds of _.",
    "pick": 1
    },
    {
    "text": "No one wants to see your _.",
    "pick": 1
    },
    {
    "text": "\"Why Grandma\", said Little Red Riding Hood, \"What big _ you have!\"",
    "pick": 1
    },
    {
    "text": "_ uses _. It is SUPER EFFECTIVE!",
    "pick": 2
    },
    {
    "text": "It's difficult to explain to friends and family why I know so much about _.",
    "pick": 1
    },
    {
    "text": "Who knew I'd be able to make a living off of _?",
    "pick": 1
    },
    {
    "text": "Take _, it will last longer.",
    "pick": 1
    },
    {
    "text": "I finally realized I hit rock bottom when I started digging through dumpsters for _.",
    "pick": 1
    },
    {
    "text": "Long story short, I ended up with _ in my ass.",
    "pick": 1
    },
    {
    "text": "At first I couldn't understand _, but now it's my biggest kink.",
    "pick": 1
    },
    {
    "text": "_ is my worst habit.",
    "pick": 1
    },
    {
    "text": "What do I keep hidden in the crawlspace?",
    "pick": 1
    },
    {
    "text": "It's the end of _ as we know it.",
    "pick": 1
    },
    {
    "text": "I watch movies just to see if I can find a Big Lipped _ Moment.",
    "pick": 1
    },
    {
    "text": "Go-Go-Gadget, _!",
    "pick": 1
    },
    {
    "text": "Everything's better with _.",
    "pick": 1
    },
    {
    "text": "And it is said his ghost still wanders these halls, forever searching for his lost _.",
    "pick": 1
    },
    {
    "text": "What have you accomplished today?",
    "pick": 1
    },
    {
    "text": "What would you taste like?",
    "pick": 1
    },
    {
    "text": "The best part of waking up is _ in your cup.",
    "pick": 1
    },
    {
    "text": "Why are you frothing with rage?",
    "pick": 1
    },
    {
    "text": "What made you happy today?",
    "pick": 1
    },
    {
    "text": "Why are there six _ when there are only four _?",
    "pick": 2
    },
    {
    "text": "My _ is too big!",
    "pick": 1
    },
    {
    "text": "Best drink ever: One part _, three parts _, and a splash of _.",
    "pick": 3
    },
    {
    "text": "_ makes me uncomfortable.",
    "pick": 1
    },
    {
    "text": "The primitive villagers were both shocked and amazed when I showed them _.",
    "pick": 1
    },
    {
    "text": "Stop, drop, and _.",
    "pick": 1
    },
    {
    "text": "_ is the root of all evil.",
    "pick": 1
    },
    {
    "text": "Think before you _.",
    "pick": 1
    },
    {
    "text": "The road to success is paved with _.",
    "pick": 1
    },
    {
    "text": "And on his farm he had _, E-I-E-I-O!",
    "pick": 1
    },
    {
    "text": "A wild _ appeared! It used _!",
    "pick": 2
    },
    {
    "text": "What is your mating call?",
    "pick": 1
    },
    {
    "text": "The Himalayas are filled with many perils, such as _.",
    "pick": 1
    },
    {
    "text": "There's _ in my soup.",
    "pick": 1
    },
    {
    "text": "What is the worst thing anyone could say in front of the police?",
    "pick": 1
    },
    {
    "text": "The sad truth is, that at the edge of the universe, there is nothing but _.",
    "pick": 1
    },
    {
    "text": "What is the saddest thing you've ever seen?",
    "pick": 1
    },
    {
    "text": "If life gives you _, make _.",
    "pick": 2
    },
    {
    "text": "What is your favorite book?",
    "pick": 1
    },
    {
    "text": "Who needs a bidet when you have _?",
    "pick": 1
    },
    {
    "text": "Kill it with _!",
    "pick": 1
    },
    {
    "text": "The Xbox One's DRM policy isn't half as bad as _.",
    "pick": 1
    },
    {
    "text": "TotalBiscuit's top hat is actually _. ",
    "pick": 1
    },
    {
    "text": "Best game of 2013? _, of course.",
    "pick": 1
    },
    {
    "text": "I'M-A FIRIN' MAH _!",
    "pick": 1
    },
    {
    "text": "How do you get your dog to stop humping your leg?",
    "pick": 1
    },
    {
    "text": "_ sounds like a great alternative rock band.",
    "pick": 1
    },
    {
    "text": "_. Everything else is uncivilized.",
    "pick": 1
    },
    {
    "text": "Of my entire collection, my most prized possession is _.",
    "pick": 1
    },
    {
    "text": "_! You know, for kids.",
    "pick": 1
    },
    {
    "text": "Mom, I swear! Despite its name, _ is NOT a porno!",
    "pick": 1
    },
    {
    "text": "The government of Japan recently passed a law that effectively forbids all forms of _.",
    "pick": 1
    },
    {
    "text": "I can't believe I spent most of my paycheck on _.",
    "pick": 1
    },
    {
    "text": "_ is the greatest Canadian.",
    "pick": 1
    },
    {
    "text": "I write slash fanfiction pairing _ with _.",
    "pick": 2
    },
    {
    "text": "_? It's a DLC item.",
    "pick": 1
    },
    {
    "text": "Oh god, I can't believe we ate _ at PAX.",
    "pick": 1
    },
    {
    "text": "Only in Korea can you see _.",
    "pick": 1
    },
    {
    "text": "Alcoholic games of Clue&reg; lead to _.",
    "pick": 1
    },
    {
    "text": "_ is the name of my _ cover band.",
    "pick": 2
    },
    {
    "text": "The Holy Trinity: _, _, and _!",
    "pick": 3
    },
    {
    "text": "Praise _!",
    "pick": 1
    },
    {
    "text": "What doesn't work that way?",
    "pick": 1
    },
    {
    "text": "What can you always find in between the couch cushions?",
    "pick": 1
    },
    {
    "text": "What the fuck is wrong with you?",
    "pick": 1
    },
    {
    "text": "What is the next great Kickstarter project?",
    "pick": 1
    },
    {
    "text": "What is the meaning of life?",
    "pick": 1
    },
    {
    "text": "My life for _!",
    "pick": 1
    },
    {
    "text": "When I was a kid, all we had in Lunchables were three _ and _.",
    "pick": 2
    },
    {
    "text": "On its last dying breath, _ sent out a cry for help. A bunch of _ heard the cry.",
    "pick": 2
    },
    {
    "text": "With Democrats and Republicans in a dead heat, the election was snatched by _ party.",
    "pick": 1
    },
    {
    "text": "Who would have guessed that the alien invasion would be easily thwarted by _.",
    "pick": 1
    },
    {
    "text": "If you could fuck anyone in the world, who would you choose?",
    "pick": 1
    },
    {
    "text": "Technology improves every day. One day soon, surfing the web will be replaced by _.",
    "pick": 1
    },
    {
    "text": "Despite our Administration's best efforts, we are still incapable of _.",
    "pick": 1
    },
    {
    "text": "At camp, we'd scare each other by telling stories about _ around the fire.",
    "pick": 1
    },
    {
    "text": "Choosy Moms Choose _.",
    "pick": 1
    },
    {
    "text": "The reason I go to church is to learn about _.",
    "pick": 1
    },
    {
    "text": "Show me on _, where he _.",
    "pick": 2
    },
    {
    "text": "I wouldn't _ you with _.",
    "pick": 2
    },
    {
    "text": "All attempts at _, have met with failure and crippling economic sanctions.",
    "pick": 1
    },
    {
    "text": "Eating _ gave me _.",
    "pick": 2
    },
    {
    "text": "What's a paladin?",
    "pick": 1
    },
    {
    "text": "One of these days i'm just gonna shit my _.",
    "pick": 1
    },
    {
    "text": "You need to _ your asshole, it's vital to this operation.",
    "pick": 1
    },
    {
    "text": "I'm sorry Timmy, but I must _ you.",
    "pick": 1
    },
    {
    "text": "Knowing Chilled's knowledge with Minecraft, he'll probably use _ on _ in his next video.",
    "pick": 2
    },
    {
    "text": "In his new Co-op work SSoHPKC will be playing _ with _.",
    "pick": 2
    },
    {
    "text": "My name is-a _ and i likea da _.",
    "pick": 2
    },
    {
    "text": "GTA shenanigans would not be GTA shenanigans without Seananners dropping _ on _.",
    "pick": 2
    },
    {
    "text": "Two Best Friends Play _.",
    "pick": 1
    },
    {
    "text": "On this episode of PKA Woody and Wings talk about _.",
    "pick": 1
    },
    {
    "text": "Oh great, _ is doing another _ game LP.",
    "pick": 2
    },
    {
    "text": "Bro's Angels. We _ hard.",
    "pick": 1
    },
    {
    "text": "In today's Driftor in-depth episode we shall look at _.",
    "pick": 1
    },
    {
    "text": "Only Totalbiscuit would spend an hour long video discussing _.",
    "pick": 1
    },
    {
    "text": "Last Thursday, Riorach was identified in public and she proceeded to _.",
    "pick": 1
    },
    {
    "text": "What did Pewdiepie overreact to on his channel today?",
    "pick": 1
    },
    {
    "text": "This time on Brutalmoose's Top 10, his guest was _.",
    "pick": 1
    },
    {
    "text": "When Sp00n finally removed his horsemask on the livestream, we saw _.",
    "pick": 1
    },
    {
    "text": "I give this game a rating of _.",
    "pick": 1
    },
    {
    "text": "What did Mitch or Bajan Canadian find in the fridge today?",
    "pick": 1
    },
    {
    "text": "In _ We Trust.",
    "pick": 1
    },
    {
    "text": "What did Criken do this time to break ARMA III? ",
    "pick": 1
    },
    {
    "text": "What was the big prize this time around at the Thrown Controllers panel?",
    "pick": 1
    },
    {
    "text": "In the next episode of Press Heart to Continue: Dodger talks about _.",
    "pick": 1
    },
    {
    "text": "But Beardman! Why do you think that _?",
    "pick": 1
    },
    {
    "text": "And here we have _. Strike it's weakness for MASSIVE damage!",
    "pick": 1
    },
    {
    "text": "Pewdiepie's going to play _!?",
    "pick": 1
    },
    {
    "text": "Smarty's darkest fear is _.",
    "pick": 1
    },
    {
    "text": "GaLmHD is so pro at almost every game he plays yet he can`t play_!",
    "pick": 1
    },
    {
    "text": "The comment section was nothing but _ arguing about _.",
    "pick": 2
    },
    {
    "text": "_, the one you want to get DDoS'd",
    "pick": 1
    },
    {
    "text": "Come on and slam, and welcome to the _.",
    "pick": 1
    },
    {
    "text": "The Creatures' next member is _.",
    "pick": 1
    },
    {
    "text": "Tehsmarty loves the smell of _ in the morning.",
    "pick": 1
    },
    {
    "text": "ZeRoyalViking's up and coming game company, \"ZEA\" accredits their success to _.",
    "pick": 1
    },
    {
    "text": "I AM THE _ CZAR!!!",
    "pick": 1
    },
    {
    "text": "In this week's gauntlet, ChilledChaos challenges Tehsmarty to _.",
    "pick": 1
    },
    {
    "text": "In this week's gauntlet, Tehsmarty challenges ChilledChaos to _.",
    "pick": 1
    },
    {
    "text": "It took hours to edit _ into the video.",
    "pick": 1
    }
    ]



const mongoose = require('mongoose');

const BlackCardSchema = new mongoose.Schema({
  prompt: String,
  numPrompts: Number,
  cardType: String
})
const WhiteCardSchema = new mongoose.Schema({
  text: String,
  cardType: String
})

//  const BlackCard = mongoose.model("Card", BlackCardSchema)
 const WhiteCard = mongoose.model("Card", WhiteCardSchema)


 mongoose.connect('mongodb://hackbox:hackbox2018@ds117701.mlab.com:17701/hackbox');
 mongoose.connection.once('open', function() {
  // createBlackCards(blackCards)
  createWhiteCards(whiteCards)
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
createWhiteCards = (arr) => {
  arr.forEach( card => {
    console.log(card);
    WhiteCard.create({
      text: card,
      cardType: "CAHWhiteCard"
    })
  })
}