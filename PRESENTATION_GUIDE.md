# Electrolux AI Presentation — Speaker Guide

A one-per-scene crib sheet. Each block gives you: what's on screen, the one-liner to open with, the 2–3 beats to hit, and a "keep in your back pocket" fun fact so you can expand if the room is engaged.

Target runtime: **~20–25 min** plus discussion on the outro.
Navigation: `←` / `→` / `Space` to move between slides, `Esc` for the mini-map.

---

## 00 · Cover — *"From a dream to your toaster"*

**On screen:** Starfield with a single pulsing "neuron" (spark). Title: *Artificial Intelligence — A 75-year story in 14 scenes.*

**Open with:**
> "AI has gone from Turing's notebook to Gemini 3 in one human lifetime. Tonight, 14 scenes, about 20 minutes — the whole story."

**Beats:**
- Set the frame: this is a story, not a slide deck. You want them curious, not taking notes.
- Point at the pulsing neuron: *"That's where everything starts — a single artificial neuron."*
- Pace: move through the first half briskly; the last 3 scenes are the meat.

**Presenter context (not on slides):**
- The "75-year" framing counts from the Dartmouth workshop (1956) + the ~5 pre-history years. It's a deliberate rounding — the real count from Turing's 1950 paper is 76. Use whichever feels right in the room.
- If someone asks "Why Electrolux?" — the tie-in comes in scene 12. Tease it: *"Stay with me — scene 12 is where this becomes about us."*
- The presentation is designed to feel like a Netflix documentary, not a corporate deck. Lean into the storytelling. Pauses matter more than facts.

---

## 01 · The Dream (1940s–1955) — *"Before it had a name"*

**On screen:** Sepia parchment, Turing's handwritten signature, McCulloch-Pitts neuron sketch.

**Open with:**
> "Before anyone called it AI, two things happened: a math paper in 1943 imagined a neuron as a switch, and Turing in 1950 asked *'Can machines think?'*"

**Beats:**
- **McCulloch & Pitts (1943)** — first mathematical model of a neuron. *Every* neural network today descends from that paper.
- **Turing Test (1950)** — originally called the **"Imitation Game"** (parlor game where you guess who's behind a curtain).
- Turing predicted that by year 2000, machines would fool humans 30% of the time in a 5-minute chat. He was right — just ~23 years late.

**Back pocket:** Turing designed this BEFORE computers were programmable in the modern sense. He was describing a thought experiment.

**Presenter context (not on slides):**
- **Turing's personal story:** Turing was a war hero — he cracked the Enigma code at Bletchley Park, arguably shortening WWII by 2 years. In 1952, he was prosecuted for homosexuality, chemically castrated, and died in 1954 at age 41 — likely suicide. He received a royal pardon in 2013. The tragedy adds weight to the "dream" framing: the man who imagined thinking machines didn't live to see them.
- **McCulloch & Pitts context:** Their 1943 paper "A Logical Calculus of the Ideas Immanent in Nervous Activity" was published in the *Bulletin of Mathematical Biophysics*. It was a neuroscience paper, not a CS paper — the field didn't exist yet. Every neural network, from AlexNet to GPT-5, is a direct descendant.
- **Why "Imitation Game" matters today:** Turing's test wasn't about intelligence — it was about *behavior indistinguishable from intelligence*. This is exactly the debate we're having with ChatGPT: "Is it thinking, or just imitating?" You can draw this line for the audience.
- **Audience hook:** *"Turing never saw a computer run his test. He was imagining a future that took 73 years to arrive — and we're still arguing about whether we've passed it."*

---

## 02 · The Birth (1956) — *"10 men, 2 months… 70 years and counting"*

**On screen:** Chalkboard aesthetic, the words *ARTIFICIAL INTELLIGENCE* written in chalk.

**Open with:**
> "Summer 1956, Dartmouth College. Ten researchers meet for 2 months to 'solve' AI. They coined the term and gave themselves a deadline. That was 70 years ago — we're still at it."

**Beats:**
- **John McCarthy** coins *"Artificial Intelligence"* — partly to distance the field from Norbert Wiener's "cybernetics" camp. Academic politics.
- The original proposal really did budget **2 months and 10 people**. Today's frontier labs have thousands of engineers.
- The attendees included Claude Shannon (information theory), Marvin Minsky, Herbert Simon — founding fathers of multiple computer-science fields.
- Establishes the recurring pattern: AI progress = wild optimism → reality check → quiet grinding → breakthrough.

**Back pocket:** The Dartmouth attendees included Claude Shannon (information theory), Marvin Minsky, Herbert Simon — basically the founding fathers of multiple computer-science fields.

**Presenter context (not on slides):**
- **The actual proposal text** (McCarthy, 1955): *"We propose that a 2 month, 10 man study of artificial intelligence be carried out during the summer of 1956... An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans, and improve themselves."* Every one of those goals is what GPT-5 does today. They were right about the destination, wrong about the timeline by ~70 years.
- **Why "Artificial Intelligence" as a name:** McCarthy deliberately chose it over "automata theory," "complex information processing," and Wiener's "cybernetics." He wanted a term that was provocative enough to attract funding and talent. It worked — possibly too well, since the hype it generated led directly to the first AI winter.
- **Herbert Simon's infamous prediction (1957):** "Within ten years, a digital computer will be chess champion of the world." It took 40 years (Deep Blue, 1997). This is the first instance of the pattern: AI researchers consistently underestimate *timelines* while correctly predicting *capabilities*.
- **Audience analogy:** *"Imagine 10 engineers meeting for 2 months to 'solve' consumer appliances. That's the level of ambition — and naivety — we're talking about."*

---

## 03 · The Golden Years (1956–1974) — *"Symbols, logic, and a therapist"*

**On screen:** CRT-green terminal typing out a live ELIZA conversation.

**Open with:**
> "Early AI ran on rules. Logic, if-then statements, symbol manipulation. And then a chatbot therapist broke its creator's heart."

**Beats:**
- **Logic Theorist (Newell & Simon, 1956)** — first program to prove math theorems. Some proofs were *more elegant* than the human originals.
- **ELIZA (Weizenbaum, 1966)** — ~200 lines of code pretending to be a Rogerian therapist.
- **The ELIZA Effect:** Weizenbaum's own secretary asked him to *leave the room* so she could talk to ELIZA privately. He spent the rest of his career warning against trusting chatbots.
- **Shakey the Robot (1966–72)** — could navigate a room. Took ~8 hours to cross it.

**Back pocket:** The word *"chatbot"* wasn't coined until 1994. ELIZA was 28 years ahead of the term for what it was.

**Presenter context (not on slides):**
- **ELIZA was ~200 lines of code.** It didn't understand *anything*. It used pattern matching: if you say "I feel X," it responds "Why do you feel X?" The entire program is trivial. What's profound is that people *didn't care* — they formed emotional bonds with something that was basically a text-substitution engine. This is the first documented case of humans projecting intelligence onto machines. ChatGPT is the same phenomenon at planetary scale.
- **Logic Theorist's elegance:** Newell & Simon's program didn't just prove theorems — some of its proofs were *more elegant* than the ones published by Bertrand Russell in *Principia Mathematica*. They submitted the proof to the *Journal of Symbolic Logic* co-authored by the program. The journal rejected it: a machine can't be an author.
- **Weizenbaum's crisis of conscience:** After seeing how easily people were fooled by ELIZA, Weizenbaum spent the rest of his career as an *AI skeptic*. His 1976 book *Computer Power and Human Reason* argued there are things computers *should not* do, even if they can. Replace "computer" with "LLM" and the book reads like it was written yesterday.
- **Shakey the Robot** was funded by DARPA (then ARPA). It used a planning system called STRIPS that is *still* the foundation of AI planning algorithms. The 8-hour room crossing wasn't a failure — it was a triumph of integration: vision + planning + motor control, all running on 1960s hardware.

---

## 04 · The First Winter (1974–1980) — *"The promises froze over"*

**On screen:** Icy blue palette, snow accumulating on the UI. Moravec's paradox as a callout.

**Open with:**
> "By the mid-70s, the promises had outrun the technology. Funding dried up. Welcome to the first AI winter."

**Beats:**
- **Lighthill Report (UK, 1973)** argued AI research had failed to deliver. Funding was slashed across the UK and US.
- **Moravec's Paradox:** *"It's easy to teach a computer chess, but hard to teach it to tell a cat from a dog."* — what's effortless for humans (vision, movement) is extraordinarily hard for computers, and vice versa.
- Lesson: overhyping = backlash. We'll see this pattern repeat.

**Back pocket:** Marvin Minsky's 1969 book *Perceptrons* mathematically showed the limits of single-layer neural nets. This single result set neural-network research back by about 15 years.

**Presenter context (not on slides):**
- **The Lighthill Report (1973)** was commissioned by the UK Parliament. Sir James Lighthill, a fluid-dynamics expert (not an AI researcher), concluded that AI had failed in all areas except game-playing. He was particularly savage about robotics: *"In no part of the field have the discoveries made so far produced the major impact that was then promised."* The UK cut almost all AI funding; researchers emigrated to the US.
- **Moravec's Paradox explained simply:** A 4-year-old can catch a ball, recognize their mother's face, and walk across a room — all things that took AI until the 2010s to do competently. Meanwhile, a 4-year-old can't do arithmetic, which computers mastered in the 1940s. Intelligence isn't what we thought it was. *"The hard problems are easy, and the easy problems are hard."*
- **DARPA's role:** The Defense Advanced Research Projects Agency had been the primary funder of AI since the 1960s. When the Mansfield Amendment (1969) required all DARPA-funded research to have direct military relevance, the abstract "make machines think" grants dried up. AI researchers had to pivot to applied military problems or lose funding.
- **Audience connection:** *"This is the first time AI went from 'miracle technology' to 'overhyped disappointment.' We'll see it happen again in scene 6. And arguably, we might be in the early stages of it happening again right now — which is why scene 13 matters."*

---

## 05 · Expert Systems Boom (1980–1987) — *"Rules all the way down"*

**On screen:** 80s neon Tron grid, glowing rule-trees.

**Open with:**
> "The 80s brought a comeback. If AI couldn't be general, at least it could be an expert in one thing — and businesses started paying real money for it."

**Beats:**
- **MYCIN** — diagnosed bacterial infections. Outperformed junior doctors in trials. Never deployed because of liability concerns.
- **XCON** at DEC saved **$40M/year** configuring computer orders. First AI system to *actually pay for itself.*
- **Japan's Fifth Generation Project** — a $850M national bet on AI supercomputers. Galvanized a US response.
- **The LISP Machine** — an entire computer built just to run one programming language (LISP). Went extinct when PCs got fast enough.

**Back pocket:** Expert systems encoded expert knowledge as thousands of if-then rules. Building them was called "knowledge engineering" — a job title that barely exists now.

**Presenter context (not on slides):**
- **MYCIN's ironic fate:** It outperformed junior doctors and matched senior specialists in diagnosing blood infections. It was *never deployed* — not because it didn't work, but because no one could answer: *"Who's liable if the machine is wrong?"* This is EXACTLY the question we face today with AI diagnostics, autonomous vehicles, and — for Electrolux — appliances that make decisions.
- **Japan's Fifth Generation Project ($850M):** Japan bet that PROLOG (a logic-programming language) would be the future of computing. They built custom PROLOG supercomputers. By 1992, every prediction had failed. The project was quietly dissolved. The lesson: *betting on a specific implementation rather than a general approach is risky.* The US responded with its own panicked spending (MCC, DARPA Strategic Computing), most of which also failed.
- **The hidden cost of expert systems:** Each one required person-years of "knowledge engineering" — interviewing experts and encoding their knowledge as rules. Systems with 10,000+ rules became unmaintainable. When the expert retired or the domain changed, the system became useless. Modern LLMs solved this by *learning from data instead of rules* — the expert's knowledge is in the training data, not hand-coded.
- **LISP Machine context:** Companies like Symbolics and LMI built entire computers that could *only* run LISP. At $70,000–$100,000 each, they were viable when nothing else could handle AI workloads. Then Sun Microsystems shipped $5,000 workstations that were fast enough. The LISP machine market collapsed in a single year (1987).
- **Audience analogy:** *"Imagine building a $70,000 device that only washes one type of fabric. That's what LISP machines were. Then someone built a $5,000 machine that washed everything."*

---

## 06 · The Second Winter (1987–1993) — *"Rinse, repeat"*

**On screen:** Deeper ice, a short visual beat. *"Rinse. Repeat."*

**Open with:**
> "The PC revolution kills specialized AI hardware. Expert systems get too expensive to maintain. AI winter, part two. Shorter this time."

**Beats:**
- Keep this one fast. ~45 seconds.
- The pattern: every AI winter is caused by hype outrunning delivery, and every spring is caused by *hardware catching up to ambition.*
- Foreshadow: the next thaw will come from an unexpected place — **graphics cards.**

**Presenter context (not on slides):**
- **Why this winter was shorter (~6 years vs. ~6 years):** The first winter was about fundamental *limitations*. The second was about *economics* — cheaper hardware made specialized AI kit obsolete, but the underlying ideas were sound. The field didn't lose faith; it lost its business model.
- **The seeds of the next spring:** During this winter, three things were quietly happening: (1) the internet was generating massive amounts of data, (2) GPUs were getting exponentially faster for gaming, and (3) a handful of researchers (Yann LeCun, Geoffrey Hinton, Yoshua Bengio) kept working on neural networks when everyone else had abandoned them. These three — later called the "Godfathers of Deep Learning" — won the Turing Award in 2018.
- **The "AI effect":** started during this period. As soon as something AI-powered worked well (spell-check, route planning, data mining), people stopped calling it AI. *"AI is anything that hasn't been done yet."* This meant AI could never get credit for its own successes.
- **Speed through this slide** (~30–45 seconds). The audience will appreciate the brevity — it mirrors the field's own impatience with winters.

---

## 07 · The Quiet Revolution (1993–2011) — *"Machine learning learns"*

**On screen:** Warm 90s/2000s palette, chess board with Deep Blue pieces.

**Open with:**
> "While everyone was busy calling AI dead, it was quietly moving into every corner of your life. Spam filters. Recommendation engines. Chess."

**Beats:**
- **Deep Blue beats Kasparov (1997)** — first time a computer defeats a reigning world chess champion under tournament conditions.
- **The Kasparov bug:** Kasparov believed IBM was cheating because Deep Blue made a move so strange it felt *human*. It was actually a bug — when stuck, Deep Blue picked a random legal move. That "random" move rattled Kasparov so much he lost the series.
- **IBM Watson wins Jeopardy! (2011)** — first time a computer handled natural-language trivia at championship level.
- Silent everywhere: **Netflix Prize, Google PageRank, Gmail spam filters, facial recognition in cameras.** AI was winning by being invisible.

**Back pocket:** The statistical/machine-learning approach that won here was *unfashionable* in the 80s. It was the losing bet that quietly became the dominant paradigm.

**Presenter context (not on slides):**
- **The Kasparov story in full:** In 1996, Kasparov beat Deep Blue 4–2. IBM demanded a rematch. In 1997, Game 2 was the turning point: Deep Blue made a bizarre move (move 44) that deviated from any known chess strategy. Kasparov was so rattled he assumed IBM had a team of grandmasters secretly guiding the machine. He demanded to see the logs; IBM refused. Kasparov played the rest of the match badly and lost 3.5–2.5. Years later, the Deep Blue team revealed the move was a **software bug** — when the engine couldn't decide, it picked a random legal move. A *glitch* defeated the world champion. The lesson: sometimes randomness is indistinguishable from genius.
- **The "AI is boring" era:** From ~1995 to 2012, AI was everywhere but invisible: Google Search (PageRank = ML), Netflix recommendations, Amazon's "customers also bought," Gmail spam filters, face detection in cheap digital cameras. None of this was called "AI" because it worked. The public associated AI with robots and Terminator, not useful infrastructure.
- **Netflix Prize (2006–2009):** Netflix offered $1M to anyone who could improve their recommendation algorithm by 10%. The winning team used matrix factorization and ensemble methods — techniques that are now standard ML. The competition demonstrated that small improvements in prediction accuracy = millions of dollars in business value. This framing ("AI as a business multiplier") is exactly how Electrolux should think about AI: not as a science project, but as a product differentiator.
- **Watson's Jeopardy! win (2011):** IBM spent ~$3M and 4 years building Watson. It won impressively, but the deeper lesson was that Watson used a *hybrid* approach: NLP, information retrieval, and machine learning together. Modern LLMs do all of this in a single model.

---

## 08 · The Deep Learning Awakening (2012–2017) — *"When neurons woke up"*

**On screen:** Neural network lighting up in Kurzgesagt colors.

**Open with:**
> "2012 is the hinge of modern AI. A single paper, a single result, changed everything we're doing today."

**Beats:**
- **AlexNet (2012)** — in the ImageNet image-recognition contest, AlexNet's error rate was **10 percentage points lower** than anything that came before. Overnight, everyone realized: *GPUs + big data + deep neural nets actually works.*
- **GANs invented in a bar (Goodfellow, 2014)** — Ian Goodfellow sketched the architecture for Generative Adversarial Networks during an argument at a pub. Next morning he coded it. It worked on the first try.
- **AlphaGo vs. Lee Sedol (2016)** — AI beats world champion at Go, a game with more positions than atoms in the observable universe. **Move 37** was so strange and brilliant that professional commentators thought AlphaGo had made a mistake. It was a move no human would have ever played — and it won.
- **AlphaGo Zero (2017)** — learned Go from *zero*, never seeing a human game. Beat the version that beat Lee Sedol **100–0**.

**Back pocket:** The "Deep" in Deep Learning just means *many layers*. The ideas existed since the 80s. The thing that changed was compute (GPUs) and data (the internet).

**Presenter context (not on slides):**
- **Why 2012 was THE inflection point:** The ImageNet Large Scale Visual Recognition Challenge (ILSVRC) had been running since 2010. Error rates were improving ~1–2% per year. Then AlexNet dropped error by **10 percentage points** in a single year (from 26% to 16%). Every team the next year used deep learning. The paradigm shift took exactly 12 months.
- **The GPU accident:** Neural networks need massive parallel computation. By coincidence, Nvidia GPUs (designed for video games) were perfectly suited for this. Nvidia's CEO Jensen Huang has described this as the luckiest accident in his company's history. In 2012, a $500 GPU could train models that would have required $10M in custom hardware a decade earlier. Today Nvidia is worth $3+ trillion largely because of this accident.
- **GAN origin story (expanded):** In 2014, Ian Goodfellow was at a bar with colleagues debating generative models. A friend argued you could train a network to generate images by having two networks compete: one generates fakes, one detects fakes. Everyone said it wouldn't work. Goodfellow went home, coded it in one evening, ran it — and it worked *on the first try*. He published it three months later. GANs spawned deepfakes, AI art, and Stable Diffusion — an entire industry from a bar argument.
- **AlphaGo's cultural impact:** In South Korea and China, Go is not just a game — it's a 2,500-year-old cultural institution, like chess × philosophy. Lee Sedol cried after losing Game 4. Over 200 million people watched in China. The Chinese government responded by launching a $15B national AI plan. Move 37 wasn't just unexpected — professional Go players said it was *beautiful*. A machine had made art.
- **Audience hook:** *"2012 is when AI stopped being academic and became industrial. Everything after this point happens because of three ingredients that finally came together: data from the internet, GPUs from gamers, and algorithms from the 1980s."*

---

## 09 · DeepMind & the Nobel Prizes (2016–2024) — *"When AI started winning science's biggest award"*

**On screen:** Dark cosmic background. Two Nobel Prize cards (Physics & Chemistry) with gold/green medal icons. AlphaGo and AlphaFold facts.

**Open with:**
> "AlphaGo proved AI could master intuition. Then DeepMind asked: what if we pointed that power at science itself?"

**Beats:**
- **AlphaGo vs. Lee Sedol (2016)** — Go has more possible positions than atoms in the observable universe. **Move 37** was so alien that professional commentators thought it was a mistake. It won the game. AlphaGo Zero later taught itself Go from scratch and beat the original **100–0**.
- **AlphaFold 2 (2020)** — solved the **protein-folding problem**, a 50-year grand challenge in biology. Predicted the 3D structure of nearly every known protein. This is accelerating drug discovery and disease research worldwide.
- **Nobel Prize in Physics 2024** — **Geoffrey Hinton** & John Hopfield, for foundational discoveries enabling machine learning with artificial neural networks. Hinton is called the "Godfather of Deep Learning." His work on backpropagation made every modern AI system possible.
- **Nobel Prize in Chemistry 2024** — **Demis Hassabis** & John Jumper (DeepMind), for computational protein structure prediction. First time AI research directly won a Nobel Prize. AlphaFold's database is used by **2 million researchers** in **190 countries**.

**Back pocket:** After winning, Hinton publicly warned about AI existential risks. The man who made deep learning work is now one of its loudest safety advocates. That tension tells you a lot about where the field is.

**Presenter context (not on slides):**
- **Hinton's journey from builder to warner:** Geoffrey Hinton worked on neural networks for over 40 years when no one cared. He shared the 2018 Turing Award with LeCun and Bengio. Then, in May 2023, he *quit Google* specifically to speak freely about AI risks. His reasoning: *"I suddenly realized that these systems are going to be smarter than us quite soon, and we have no idea how to control them."* When the man who made it all possible says he's scared, the room should listen.
- **AlphaFold's real-world impact:** Before AlphaFold, determining a single protein's 3D structure took months of lab work and cost ~$100,000. AlphaFold predicts a structure in *minutes* for free. The AlphaFold Protein Structure Database contains 200+ million predicted structures — essentially *every known protein*. This is accelerating: malaria vaccine research, antibiotic design for drug-resistant bacteria, understanding genetic diseases, and enzyme design for industrial applications. For Electrolux: enzymes in detergents are designed using protein-structure knowledge. AlphaFold could help design better detergent enzymes.
- **The Nobel Prize controversy:** Many physicists and chemists objected to AI researchers winning "their" Nobels. The physics community debated whether neural networks are really "physics." The committee's decision signals that AI is no longer a tool used *by* scientists — it's becoming a *scientific contributor* in its own right.
- **AlphaGo Zero's philosophical significance:** It taught itself Go from scratch with no human games, no human strategy, no human knowledge. It developed strategies superior to anything in 2,500 years of human play. Then DeepMind did the same for chess (AlphaZero, 2017) in just 4 hours of self-play — and it played *beautiful* chess that grandmasters study. The implication: human intuition isn't just reproducible; it may be *improvable*.

---

## 10 · The Transformer Era (2017–2022) — *"Attention is all you need"*

**On screen:** Cosmic purple/pink gradient. Attention arcs between words.

**Open with:**
> "In 2017, a Google paper with a playful title — 'Attention is All You Need' — quietly rewrote AI. Every major model today is a descendant of that paper."

**Beats:**
- The **Transformer** architecture made models *parallelizable*, meaning you could throw compute at them and they'd keep getting better. This unlocked **scaling laws** — bigger model + more data = predictably better.
- **GPT-1 (2018)** → **GPT-2 (2019)** → **GPT-3 (2020)**. Each 10× bigger. Each dramatically more capable. Not because of algorithmic breakthroughs — just *scale*.
- **DALL·E, Stable Diffusion** arrive — AI starts generating *images* that look real.
- **Fun fact:** An AI-generated portrait — *"Edmond de Belamy"* — sold at Christie's for **$432,500** in 2018. It was signed with the GAN's loss function.

**Back pocket:** "Attention" is a mechanism that lets the model decide *which parts of the input to pay attention to* when generating each word. Before transformers, models processed text sequentially like we do reading. Transformers read everything at once and decide what matters.

**Presenter context (not on slides):**
- **The paper that changed everything:** "Attention Is All You Need" (Vaswani et al., 2017) came from Google Brain and was initially about machine translation. The authors didn't know they'd invented the foundation of modern AI. The title was deliberately playful — a riff on the Beatles' "All You Need Is Love." As of 2026, it has over 150,000 citations. Of the 8 original authors, most have left Google: some founded Cohere, Adept, Essential AI, and Character.AI.
- **Scaling laws explained simply:** In 2020, OpenAI published the "scaling laws" paper showing that model performance improves *predictably* with more parameters, more data, and more compute. This turned AI from alchemy into engineering: you could now *budget* your way to a better model. This is why AI labs are raising billions — they know exactly what they'll get for the money.
- **GPT evolution:** GPT-1 (2018): 117M parameters. GPT-2 (2019): 1.5B parameters — OpenAI initially *refused to release it*, calling it "too dangerous." GPT-3 (2020): 175B parameters — could write essays, code, and poetry. Each jump was ~10× bigger. No fundamental algorithm changed. It was pure scale. *"We didn't get smarter. We just got bigger."*
- **The DALL·E moment:** DALL·E (Jan 2021) and then Stable Diffusion (Aug 2022) democratized image generation. Suddenly anyone could create photorealistic images from text. This triggered the first major public reckoning with AI: artists protested, copyright lawsuits were filed, and schools panicked. For context: *"Edmond de Belamy"* sold for $432K in 2018 and was grainy. By 2023, AI images were winning photography competitions.
- **Audience bridge:** *"Everything from this slide forward is the world you and I live in. Everything before was history. The transformer is the dividing line."*

---

## 11 · The ChatGPT Moment (Nov 2022 – 2024) — *“The week everyone noticed”*

**On screen:** Kurzgesagt creatures swarming. Big counter: **100,000,000**.

**Open with:**
> "AI had been incredible for a decade. But on November 30, 2022, your mother, your accountant, and your CEO all found out at the same time."

**Beats:**
- **ChatGPT hits 100M users in 2 months.** TikTok took 9 months. Instagram took 2.5 years. It was the fastest-growing consumer app in history.
- **GPT-4 (March 2023), Claude, Gemini** — multimodal models that read images and hold real conversations.
- **Cost collapse:** GPT-3.5-level inference got **280× cheaper** between Nov 2022 and Oct 2024. The same intelligence, a fraction of the price.
- **Training cost:** GPT-4 estimated at **$41–71M** to train. Gemini ~$30–191M. Electricity bills matter.

**Back pocket:** ChatGPT was *never* supposed to be a product. OpenAI launched it as a "low-key research preview" on a Wednesday. By Friday they'd broken their own infrastructure.

**Presenter context (not on slides):**
- **The ChatGPT launch story:** Sam Altman expected maybe 1 million users in the first few months. They hit 1 million in 5 days. 100 million in 2 months. The servers crashed repeatedly. OpenAI wasn't even charging for it — it was burning cash to demonstrate the technology. The viral moment was unplanned.
- **Why ChatGPT, not GPT-3?:** GPT-3 launched in 2020 and was equally impressive, but only developers could access it via API. ChatGPT's innovation was a *chat interface* — something anyone could use. The technology was incremental (GPT-3.5 was a fine-tuned GPT-3); the *product* was revolutionary. Lesson for Electrolux: sometimes the UI matters more than the underlying tech.
- **The cost collapse in detail:** In November 2022, running GPT-3.5-level inference cost ~$0.06 per 1K tokens. By October 2024, equivalent models cost ~$0.0002 per 1K tokens. That's a **280× reduction** in 2 years. For comparison: compute costs rarely drop more than 10× per decade in most industries. This is unprecedented deflation.
- **The education crisis:** Within weeks of ChatGPT's launch, schools worldwide banned it. Then, within months, many reversed course and began integrating it. Stanford, MIT, and Harvard all overhauled their curricula. The speed of institutional response was itself extraordinary — and a preview of how quickly organizations will need to adapt.
- **Corporate response:** Microsoft invested $13B in OpenAI and integrated GPT-4 into Bing, Office 365 (Copilot), and Azure. Google declared a "code red" and rushed Bard (later Gemini) to market. Every major tech company reallocated R&D budgets. The AI gold rush started on November 30, 2022.
- **Audience hook:** *"Your grandmother can use ChatGPT. That's the revolution. Not the technology — the accessibility."*

---

## 12 · Today — State of the Art (2025–2026) — *“Reasoning, agents, and chip designers”*

**On screen:** Four cards (Reasoning, Agents, Self-improving, New math) + Electrolux tie-in box.

**Open with:**
> "So where are we *right now*, in April 2026? Four things are new, and one of them involves us."

**Beats:**
- **Reasoning models** — GPT-5, Claude Opus 4.6, Gemini 3 Pro. These models *think before they answer.* On **GPQA Diamond** (PhD-level science questions) the top models score **94.3%**. Humans with PhDs score ~65%.
- **Agents** — AI doing multi-step autonomous work. **Grok 4** runs *three* specialist agents (Harper, Benjamin, Lucas) who debate before responding. On **GDPval knowledge-work bench**, top agents score 83%.
- **Self-improving** — AI now *designs computer chips.* In **6 hours** vs. months for human engineers. The students are teaching the teachers.
- **New math** — Google's **Gemini Deep Think** solved **4 previously-open mathematical problems** during its evaluation. A first in history.
- **Electrolux tie-in:**
  - **Predictive maintenance** — appliances that tell you they need service *before* they break.
  - **Computer-vision cooking** — ovens recognize the dish and pick the program.
  - **Connected learning** — washers optimize cycles based on how *you* actually use them.
  - *"The same thread that started with Turing now runs through our product lines."*

**Back pocket:** The reasoning-model breakthrough in 2024 came from letting models "think out loud" for longer before committing to an answer. It's embarrassingly simple in retrospect.

**Presenter context (not on slides):**
- **Chain-of-thought (CoT) reasoning explained:** In 2022, Google researchers discovered that if you add "Let's think step by step" to a prompt, model accuracy on math and logic problems jumps dramatically. OpenAI's o1 (Sep 2024) formalized this into "test-time compute": the model generates hidden "thinking" tokens before answering. More thinking = better answers. It's like giving a student extra time on an exam. This is why these models are slower (and more expensive) but dramatically more accurate.
- **GPQA Diamond benchmark context:** GPQA (Graduate-level Google-Proof Q&A) Diamond is a dataset of PhD-level questions in physics, chemistry, and biology that even *experts outside their subfield* struggle with. Human PhD holders score ~65%. Top models now score ~94%. This doesn't mean AI is "smarter" than PhDs — it means AI has broad expert-level knowledge across all fields simultaneously.
- **Grok 4's multi-agent architecture:** xAI's Grok 4 runs three internal agents (Harper, Benjamin, Lucas) that independently analyze a problem, then debate their answers before producing a final response. This mimics how human expert panels work. The GDPval benchmark scores 83% on real-world knowledge-work tasks (report writing, data analysis, strategic planning).
- **The chip design revolution:** Google's AlphaChip (2024) designed chip layouts in 6 hours that outperformed human designs taking months. The chips are now in production TPUs. AI is designing the hardware that runs AI. This recursive loop — AI improving itself — is what futurists call the beginning of an "intelligence explosion."
- **Electrolux tie-in depth:** Predictive maintenance uses sensor data + ML to predict failures 2–4 weeks before they happen. This could reduce warranty costs by 15–25% and improve customer satisfaction by turning breakdowns into scheduled service visits. Computer-vision cooking is already in development at competitors (Samsung's AI oven recognizes food types). Connected learning means each washer contributes anonymous usage data that improves the algorithm for all washers — a network effect.
- **Audience hook:** *"We're not showing off. These are capabilities our competitors are already building. The question is whether Electrolux leads or follows."*

---

## 13 · The 2026 Frontier — *"The year AI left the sandbox"*

**On screen:** Seven frontier-cards covering the most advanced AI technologies of 2026.

**Open with:**
> "2026. This is the year AI stopped being a demo and started *doing things* in the real world."

**Beats:**
- **Claude Mythos** (Anthropic) — The most advanced model so far, available *only* to 11 selected organizations. Can find critical vulnerabilities in major OSes and browsers. Anthropic says it will not be released publicly. *"This is the first model that's too capable for the public."*
- **DeepSeek V3.2 & R1** — China's open-weight champion. Claimed $6M training cost vs $100M+ for GPT-4. R1 matched or beat OpenAI's o1 on reasoning. The "Sputnik moment" that wiped $600B off Nvidia's stock in a single day.
- **Gemma 4** (Google) — Google's most capable fully open model, April 2026, Apache 2.0. Supports vision, audio, 256K context. The 31B model reached 3rd place on Arena's text leaderboard.
- **Chinese open models** — **Qwen 3** (Alibaba, 235B, Apache 2.0), **Kimi K2.5** (Moonshot, 1T MoE, 100 parallel sub-agents), **GLM-5.1** (Z.ai, beating Opus 4.6 on coding). The open-weights revolution is mostly happening in China.
- **GPT-5.2 & Codex** (OpenAI) — Solved an open problem in statistical learning theory. OpenAI also released GPT-OSS, its first open-source models since 2019.
- **OpenClaw** — Peter Steinberger's open-source autonomous AI agent, 190,000+ GitHub stars in weeks, 1.5M agents created. Connects any LLM to everyday tools via messaging apps. Creator joined OpenAI; project continues as an independent foundation. Elon Musk called it *"the first stages of the singularity."* Gartner warned it *"presents unacceptable cyber risk"* for enterprise use.
- **AI leaves the sandbox** — Models now act autonomously for hours. Claude Opus 4.6 sustains tasks for 14.5 hours. 16 Claude agents wrote a working C compiler. NASA used AI to plan Mars rover routes. AI found 100+ bugs in Firefox.

**Back pocket:** OpenClaw started as a personal WhatsApp assistant called "Clawdbot." Anthropic's legal team forced a rename; during the seconds the old GitHub username was available, scammers grabbed it and launched a $16M crypto token. The second rename—to OpenClaw—had to be coordinated across multiple platforms simultaneously to avoid repeating the incident.

**Presenter context (not on slides):**
- **Claude Mythos — why it matters:** This is the first model publicly acknowledged as *too capable for general release*. Anthropic gave access only to 11 organizations (red-teaming, national security, infrastructure protection). Mythos found critical zero-day vulnerabilities in major OSes and browsers. The model's existence raises a fundamental question: *"If your most advanced AI is too dangerous for the public, what does that say about the trajectory?"* This is the Oppenheimer moment for AI.
- **The DeepSeek shock (Jan 2025):** DeepSeek R1, developed for a claimed $6M, matched OpenAI's o1 on reasoning benchmarks. Wall Street panicked: if frontier AI doesn't require $100M+ budgets, the moat around US AI labs disappears. Nvidia lost $600B in market cap in a single day (Jan 27, 2025) — the largest single-day loss in stock market history. The "Sputnik moment" framing (Sam Altman's words) reflects genuine geopolitical anxiety: China might be winning the AI race on a fraction of the budget.
- **The open-source revolution:** In 2023, a leaked Google memo said *"We have no moat."* By 2026, it's proven true: Gemma 4, Qwen 3, DeepSeek, and Llama are all open-weight models competitive with proprietary ones. The implication for companies like Electrolux: you don't need to pay OpenAI or Google to deploy frontier-level AI. Open-source models can run on your own infrastructure, keeping data in-house.
- **OpenClaw's significance:** It's not the AI itself — it's the *pattern*. A single developer built an autonomous agent that connects any LLM to real-world tools (email, calendar, smart home, messaging). 1.5 million agents were created in weeks. Gartner's warning about "unacceptable cyber risk" is real: Kaspersky found 512 vulnerabilities, including remote code execution. But the demand is undeniable. The lesson: *autonomous AI agents are inevitable; the question is who builds them safely.*
- **Regulatory landscape (EU AI Act):** The EU AI Act (effective Feb 2025) classifies AI systems by risk level. High-risk systems (medical, employment, safety-critical) require conformity assessments. Electrolux products that use AI for safety decisions (e.g., stove auto-shutoff) may fall under high-risk classification. This is not optional — it's law.
- **Audience hook:** *"Seven cards on one slide. A year ago, we'd have needed seven slides. That's how fast this is moving. And every one of these technologies is available to Electrolux today."*

---

## 14 · Outro — *"So… what's next?"*

**On screen:** Starfield, 5 discussion questions.

**Open with:**
> "Alright. Five questions. I don't have answers to any of them. Let's talk."

**The questions and how to run them:**

### 01 · Accountability
> *"If an AI reasons better than us on a task, who is accountable when it gets it wrong — the engineer, the company, or the model?"*

- **Why it matters:** This is the open legal question of the decade. An oven that over-cooks a meal via CV is a refund. An AI diagnostic that misses a tumor is a lawsuit. The engineering decisions we make *now* determine who's on the hook later.
- **Push if quiet:** "If our washer damages a garment because the AI misread the fabric, who pays?"

### 02 · Help vs. decide
> *"Where is the line between an appliance that helps you and one that decides for you — and who should draw it?"*

- **Why it matters:** Every automation is a transfer of agency. Electrolux is literally in the business of making this choice, appliance by appliance.
- **Push if quiet:** "Should your oven refuse to cook something it thinks is unsafe?"

### 03 · What stays human
> *"As AI agents start doing multi-step work autonomously, which parts of our jobs should stay human — and why?"*

- **Why it matters:** Not fear-mongering about jobs — an honest values question. What is the part of *your* work that you believe *must* stay with a person?
- **Push if quiet:** "Strip your job to its core. Which task would you refuse to hand over, even if the AI did it better?"

### 04 · Ownership of intelligence
> *"Models are trained on data we all produced. Who owns the intelligence that comes out the other side?"*

- **Why it matters:** The IP question under every AI lawsuit. Electrolux has decades of appliance data. Who benefits when it trains a model?
- **Push if quiet:** "If our service data trained an AI that a competitor uses — is that stealing?"

### 05 · What to build today
> *"If the next 10 years of AI compress into 2, what's the one thing we should start building at Electrolux today?"*

- **Why it matters:** Closes on action. Not philosophy — a concrete bet.
- **Push if quiet:** "Forget feasibility. What do you *wish* we were building?"

**Closing line:**
> "Thank you. The thread that started with Turing is running through our machines now — and the next chapter is ours to write."

**Presenter context (not on slides):**
- **How to facilitate the discussion:** Don't read the questions — *pause* after each one. Let silence work. Count to 10 in your head. If nobody speaks, use the "Push if quiet" prompt. Go around the room if needed: *"Pick one question that matters to YOUR work."*
- **The meta-point behind all 5 questions:** They all converge on *agency*. Who decides? Who's responsible? Who benefits? Who adapts? These are not technology questions — they are *human* questions. The technology is moving. The question is whether Electrolux moves with it, or waits and reacts.
- **If the discussion runs hot:** Steer toward *concrete next steps*. *"That's a great debate. Now: what's the one thing we could start TOMORROW?"* End on action, not philosophy.
- **If the discussion runs cold:** Share a personal take. *"Here's what keeps me up at night: [pick your favorite question]. What about you?"* Vulnerability opens rooms.
- **The 5-question structure:** The questions are ordered from abstract to concrete (accountability → help/decide → human work → ownership → what to build). If time is short, skip to questions 3 and 5 — they're the most actionable.

---

## Navigation cheat-sheet (for the presenter)

| Key | Action |
|---|---|
| `→` / `Space` | Next scene |
| `←` | Previous scene |
| `Home` | Jump to cover |
| `End` | Jump to outro |
| `Esc` | Open/close mini-map |

**Setup:**
1. Open `http://localhost:5173` in Chrome or Edge.
2. Press `F11` for fullscreen.
3. Set browser zoom to **125%** (`Ctrl` + `+` three times).
4. Click the first scene to focus, then use arrow keys.

**Pacing suggestion (20-minute version):**
- Scenes 0–2: 3 min
- Scenes 3–6: 4 min (winters go fast)
- Scenes 7–9: 5 min
- Scenes 10–12: 5 min
- Scene 13 (Frontier): 3 min
- Scene 14 (discussion): 5+ min

**If time is short (10-minute version):**
Skip scenes 4 and 6 (the winters). Compress 5 into 30 seconds. Combine 8+9 into 2 minutes. Land scene 13 and run the discussion.
